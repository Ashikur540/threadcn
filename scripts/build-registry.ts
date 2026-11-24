// Builds two files from their sources, so no value is ever typed twice:
//   1. app/fabric.generated.css: the Denim tokens as CSS variables, for this site.
//   2. registry.json: the list of installable items, for the shadcn CLI.
//      Colors come from the fabric, CSS from styles/<name>.css, and each item's
//      packages from the import lines of ui/<name>.tsx.
// Run: pnpm generate (or pnpm registry:build, which also runs `shadcn build`).
// tests/registry.test.ts fails if either file is out of date.

import { existsSync, readFileSync, writeFileSync } from "node:fs"
import { pathToFileURL } from "node:url"
import postcss, { type ChildNode } from "postcss"

import { denim } from "../registry/threadcn/fabrics/denim"

type CssObject = { [selectorOrAtRule: string]: CssObject | string }

/** One entry in registry.json (the fields threadcn uses from shadcn's schema). */
type RegistryItem = {
  name: string
  type: string
  title: string
  description: string
  docs?: string
  dependencies?: string[]
  registryDependencies?: string[]
  files?: { path: string; type: string }[]
  cssVars?: { light: Record<string, string>; dark: Record<string, string> }
  css?: CssObject
}

const STYLES = "registry/threadcn/styles"
const UI = "registry/threadcn/ui"

/** Turns a CSS file into the nested object shape the shadcn CLI expects in an item's `css` field. */
export function cssToObject(css: string): CssObject {
  const walk = (nodes: ChildNode[]): CssObject => {
    const out: CssObject = {}
    for (const node of nodes) {
      if (node.type === "atrule") {
        out[`@${node.name} ${node.params}`.trim()] = walk(node.nodes ?? [])
      } else if (node.type === "rule") {
        const declarations: CssObject = {}
        node.each((child) => {
          if (child.type === "decl") declarations[child.prop] = child.value + (child.important ? " !important" : "")
        })
        out[node.selector.replace(/\s+/g, " ")] = declarations
      }
    }
    return out
  }
  return walk(postcss.parse(css).nodes)
}

// Printed by the shadcn CLI after install.
const BASE_DOCS = [
  "threadcn components need two things:",
  '1. The registry in components.json: "registries": { "@threadcn": "https://<threadcn-host>/r/{name}.json" }',
  '2. A fabric background: add class="tx-fabric" to <body> (or any section). Outline, ghost and link buttons and plain text expect it.',
].join("\n")

const style = (name: string) => cssToObject(readFileSync(`${STYLES}/${name}.css`, "utf8"))

/**
 * Reads a component's import lines and sorts them into:
 *   dependencies          npm packages, e.g. "@base-ui/react/button" → "@base-ui/react"
 *   registryDependencies  other threadcn parts, e.g. "@/registry/threadcn/ui/stitch" → "@threadcn/stitch"
 * React is skipped: every app already has it.
 */
export function importsOf(source: string) {
  const specifiers = [...source.matchAll(/from\s+"([^"]+)"/g)].map((m) => m[1])
  const dependencies = new Set<string>()
  const registryDependencies = new Set<string>()
  for (const spec of specifiers) {
    const part = spec.match(/^@\/registry\/threadcn\/ui\/(.+)$/)
    if (part) registryDependencies.add(`@threadcn/${part[1]}`)
    else if (!spec.startsWith(".") && !spec.startsWith("@/") && spec !== "react") {
      const segments = spec.split("/")
      dependencies.add(spec.startsWith("@") ? segments.slice(0, 2).join("/") : segments[0])
    }
  }
  return { dependencies: [...dependencies], registryDependencies: [...registryDependencies] }
}

/** A CSS-only item shared by several components, like the field look. */
function styleOnly(name: string, title: string, description: string): RegistryItem {
  return { name, type: "registry:item", title, description, dependencies: [], registryDependencies: ["@threadcn/base"], css: style(name) }
}

/** One installable component: ui/<name>.tsx plus styles/<name>.css when it exists. */
function component(name: string, title: string, description: string, extra: { needs?: string[] } = {}): RegistryItem {
  const path = `${UI}/${name}.tsx`
  const { dependencies, registryDependencies } = importsOf(readFileSync(path, "utf8"))
  const hasCss = existsSync(`${STYLES}/${name}.css`)
  return {
    name,
    type: "registry:ui",
    title,
    description,
    dependencies,
    registryDependencies: [...(extra.needs ?? []), ...registryDependencies],
    files: [{ path, type: "registry:ui" }],
    ...(hasCss ? { css: style(name) } : {}),
  }
}

const prefixed = (tokens: Record<string, string>) =>
  Object.fromEntries(Object.entries(tokens).map(([key, value]) => [`tx-${key}`, value]))

function tokenBlock(selector: string, tokens: Record<string, string>) {
  const lines = Object.entries(tokens).map(([key, value]) => `  --tx-${key}: ${value};`)
  return `${selector} {\n${lines.join("\n")}\n}\n`
}

export function buildRegistry() {
  // Shared values (radius, stitch size…) only go in light: dark mode inherits them from :root.
  const light = { ...denim.shared, ...denim.light }
  const appCss =
    `/* Generated by scripts/build-registry.ts from registry/threadcn/fabrics/denim.ts. Do not edit. */\n` +
    tokenBlock(":root", light) +
    tokenBlock(".dark", denim.dark)

  const registry = {
    $schema: "https://ui.shadcn.com/schema/registry.json",
    name: "threadcn",
    homepage: "https://github.com/Ashikur540/threadcn",
    items: <RegistryItem[]>[
      {
        name: "base",
        type: "registry:theme",
        title: "threadcn base",
        description: "The Denim fabric (light) and Quilted night (dark) tokens, the shared stitch, and accessibility fallbacks.",
        docs: BASE_DOCS,
        cssVars: { light: prefixed(light), dark: prefixed(denim.dark) },
        css: style("base"),
      },
      // Stitch imports no threadcn part, but its drawing CSS lives in base.
      component("stitch", "Stitch", "The stitch line drawn inside a part's edge.", { needs: ["@threadcn/base"] }),
      component("button", "Button", "A sewn-on patch that sinks when pressed."),
      component("card", "Card", "A stitched piece of fabric. Puffy and quilted in dark mode."),
      component("dialog", "Dialog", "A stitched card that floats over a dimmed page."),
      component("badge", "Badge", "A small woven label."),
      // Label and Separator draw no stitch, but they read the fabric tokens from base.
      component("label", "Label", "A field label in the fabric's text color.", { needs: ["@threadcn/base"] }),
      component("separator", "Separator", "A line of thread between two blocks.", { needs: ["@threadcn/base"] }),
      component("patch", "Patch", "A sewn-on brand patch: leather label or round denim patch."),
      styleOnly("canvas", "Canvas look", "The cream canvas look shared by Input, Textarea and the Select trigger."),
      component("input", "Input", "A text field on cream canvas.", { needs: ["@threadcn/canvas"] }),
      component("textarea", "Textarea", "A multi-line text field on cream canvas.", { needs: ["@threadcn/canvas"] }),
      component("checkbox", "Checkbox", "A stitched cream box that turns to leather when checked."),
      component("radio-group", "Radio Group", "Stitched round options, leather with a cream dot when picked."),
      component("switch", "Switch", "A fabric strap with a sewing-button thumb that rolls as it slides."),
      component("select", "Select", "A field that opens a stitched denim pocket of options.", { needs: ["@threadcn/canvas"] }),
      component("tooltip", "Tooltip", "A small stitched leather tag with a pointer."),
      component("tabs", "Tabs", "Sewn-on label tabs; the active tab is stitched onto its panel."),
      // Pocket card draws its own double stitch, so it needs only the tokens from base.
      component("pocket-card", "Pocket Card", "A jeans back pocket with double stitching, rivets and a hang tag.", { needs: ["@threadcn/base"] }),
    ],
  }

  return { appCss, registry }
}

// Write the files only when run as a script, not when a test imports this file.
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const { appCss, registry } = buildRegistry()
  writeFileSync("app/fabric.generated.css", appCss)
  writeFileSync("registry.json", JSON.stringify(registry, null, 2) + "\n")
  console.log(`Wrote app/fabric.generated.css and registry.json (${registry.items.length} items).`)
}
