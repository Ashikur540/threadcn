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
import { siteUrl } from "../site"

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
  `1. The registry in components.json: "registries": { "@threadcn": "${siteUrl}/r/{name}.json" }`,
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
  // Ignore comments, so a sentence like `import it from "button"` isn't read as code.
  const code = source.replace(/\/\*[\s\S]*?\*\//g, "").replace(/^\s*\/\/.*$/gm, "")
  const specifiers = [...code.matchAll(/from\s+"([^"]+)"/g)].map((m) => m[1])
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

/** A CSS-only item shared by several components, like the canvas look. */
function styleOnly(name: string, title: string, description: string): RegistryItem {
  return { name, type: "registry:item", title, description, dependencies: [], registryDependencies: ["@threadcn/base"], css: style(name) }
}

/**
 * One installable component: ui/<name>.tsx plus styles/<name>.css when it exists.
 * `files` adds more ui files to the same item (e.g. "button-client").
 */
function component(name: string, title: string, description: string, extra: { needs?: string[]; files?: string[] } = {}): RegistryItem {
  const names = [name, ...(extra.files ?? [])]
  const paths = names.map((n) => `${UI}/${n}.tsx`)
  const found = paths.map((p) => importsOf(readFileSync(p, "utf8")))
  const own = new Set(names.map((n) => `@threadcn/${n}`))
  const dependencies = [...new Set(found.flatMap((f) => f.dependencies))].sort()
  const registryDependencies = [...new Set(found.flatMap((f) => f.registryDependencies))].filter((d) => !own.has(d))
  const hasCss = existsSync(`${STYLES}/${name}.css`)
  return {
    name,
    type: "registry:ui",
    title,
    description,
    dependencies,
    registryDependencies: [...(extra.needs ?? []), ...registryDependencies],
    files: paths.map((path) => ({ path, type: "registry:ui" })),
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
  // data-fabric is for this site only. "denim" or "night" pins one block of a page
  // to that fabric whatever the mode; "flip" always shows the other fabric, so the
  // landing quilt changes every block when the mode changes.
  const appCss =
    `/* Generated by scripts/build-registry.ts from registry/threadcn/fabrics/denim.ts. Do not edit. */\n` +
    tokenBlock(':root, [data-fabric="denim"], .dark [data-fabric="flip"]', light) +
    tokenBlock('.dark, [data-fabric="night"], :root:not(.dark) [data-fabric="flip"]', denim.dark)

  const registry = {
    $schema: "https://ui.shadcn.com/schema/registry.json",
    name: "threadcn",
    homepage: siteUrl,
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
      component("button", "Button", "A sewn-on patch that sinks when pressed.", { files: ["button-client"] }),
      component("card", "Card", "A stitched piece of fabric. Puffy and quilted in dark mode."),
      styleOnly("modal", "Modal look", "The shared look of Dialog, Alert Dialog, Sheet and Drawer: a stitched card over a dimmed page."),
      component("dialog", "Dialog", "A stitched card that floats over a dimmed page.", { needs: ["@threadcn/modal"] }),
      component("badge", "Badge", "A small woven label."),
      // Label and Separator draw no stitch, but they read the fabric tokens from base.
      component("label", "Label", "The name above a field. Click it to jump into that field.", { needs: ["@threadcn/base"] }),
      component("separator", "Separator", "A line of thread between two blocks.", { needs: ["@threadcn/base"] }),
      component("patch", "Patch", "A sewn-on brand patch: leather label or round denim patch."),
      styleOnly("canvas", "Canvas look", "The cream canvas look shared by Input, Textarea and the Select trigger."),
      component("input", "Input", "A one-line box to type in, like a name or email. Cream canvas look.", { needs: ["@threadcn/canvas"] }),
      component("textarea", "Textarea", "A bigger box for longer text, like a note or a review.", { needs: ["@threadcn/canvas"] }),
      component("checkbox", "Checkbox", "A box to tick on or off. It turns leather when ticked."),
      component("radio-group", "Radio Group", "A set of round options where only one can be picked."),
      component("switch", "Switch", "An on and off switch. Its sewing-button thumb rolls as it slides."),
      styleOnly("pocket", "Pocket look", "The floating stitched denim pocket shared by Select, Popover, Hover Card and the menus."),
      component("select", "Select", "A field that opens a list so you pick one option.", { needs: ["@threadcn/canvas", "@threadcn/pocket"] }),
      component("tooltip", "Tooltip", "A small stitched leather tag with a pointer."),
      component("tabs", "Tabs", "Sewn-on label tabs; the active tab is stitched onto its panel."),
      // Pocket card draws its own double stitch, so it needs only the tokens from base.
      component("pocket-card", "Pocket Card", "A jeans back pocket with double stitching, rivets and a hang tag.", { needs: ["@threadcn/base"] }),
      component("toggle", "Toggle", "A button that stays pressed in or out, like Bold in an editor."),
      component("toggle-group", "Toggle Group", "A row of toggle buttons. Pick one, or allow many."),
      component("alert", "Alert", "A notice sewn on like a garment care label."),
      component("alert-dialog", "Alert Dialog", "A dialog that must be answered, in the stitched modal look.", { needs: ["@threadcn/modal"] }),
      // Progress, Slider, Skeleton and Spinner draw no stitch, but read the fabric tokens.
      component("progress", "Progress", "A recessed denim strap filled by a gold patch with a running thread.", { needs: ["@threadcn/base"] }),
      component("slider", "Slider", "Drag a thumb to pick a number, or two thumbs for a range.", { needs: ["@threadcn/base"] }),
      component("skeleton", "Skeleton", "A basted fabric placeholder that pulses while content loads.", { needs: ["@threadcn/base"] }),
      component("spinner", "Spinner", "A ring of stitches that turns while something loads.", { needs: ["@threadcn/base"] }),
      component("toast", "Toast", "A small stitched card that slides in from the corner."),
      component("accordion", "Accordion", "Stacked questions with dashed thread between them.", { needs: ["@threadcn/base"] }),
      component("collapsible", "Collapsible", "A trigger that shows and hides a panel. No look of its own."),
      component("breadcrumb", "Breadcrumb", "Muted links with thread chevrons between them.", { needs: ["@threadcn/base"] }),
      component("pagination", "Pagination", "Page links built from Button; the current page is the leather patch."),
      component("avatar", "Avatar", "A round photo with a stitched ring, or initials on cream canvas."),
      component("table", "Table", "A data table with dashed thread lines between rows.", { needs: ["@threadcn/base"] }),
      component("kbd", "Kbd", "A keyboard key as a small cream key cap.", { needs: ["@threadcn/base"] }),
      component("scroll-area", "Scroll Area", "A box that scrolls with a thin thread-colored scrollbar.", { needs: ["@threadcn/base"] }),
      component("popover", "Popover", "A small stitched pocket that opens next to its trigger.", { needs: ["@threadcn/pocket"] }),
      component("hover-card", "Hover Card", "A stitched pocket that previews a link on hover.", { needs: ["@threadcn/pocket"] }),
      component("dropdown-menu", "Dropdown Menu", "A menu in a stitched pocket, with ticks, dots and submenus.", { needs: ["@threadcn/pocket"] }),
      component("context-menu", "Context Menu", "A right-click menu in a stitched pocket.", { needs: ["@threadcn/pocket"] }),
      component("sheet", "Sheet", "The stitched modal card, sliding in from a side.", { needs: ["@threadcn/modal"] }),
      component("drawer", "Drawer", "The stitched modal card as a panel you can swipe away.", { needs: ["@threadcn/modal"] }),
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
