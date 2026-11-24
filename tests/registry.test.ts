import { existsSync, readFileSync } from "node:fs"
import { denim } from "@/registry/threadcn/fabrics/denim"
import { buildRegistry } from "@/scripts/build-registry"

const built = buildRegistry()

test("app/fabric.generated.css matches the fabric source", () => {
  expect(readFileSync("app/fabric.generated.css", "utf8")).toBe(built.appCss)
})

test("registry.json matches its sources", () => {
  expect(JSON.parse(readFileSync("registry.json", "utf8"))).toEqual(built.registry)
})

test("every file listed in registry.json exists", () => {
  for (const item of built.registry.items) for (const file of item.files ?? []) expect(existsSync(file.path), file.path).toBe(true)
})

test("the base item carries every Denim token with the tx- prefix", () => {
  const { cssVars } = built.registry.items.find((i) => i.name === "base")!
  expect(cssVars!.light["tx-thread"]).toBe(denim.light.thread)
  expect(cssVars!.dark["tx-fabric"]).toBe(denim.dark.fabric)
  expect(Object.keys(cssVars!.light)).toHaveLength(Object.keys(denim.shared).length + Object.keys(denim.light).length)
})

test("component CSS ships inside @layer components, so user classes win", () => {
  for (const item of built.registry.items) {
    if (item.css) expect(Object.keys(item.css)).toEqual(["@layer components"])
  }
})

// The shadcn CLI moves every @media block in front of the normal rules when it
// merges items into the user's CSS. Rules inside @media must start with :root,
// so they still outrank the normal rules that now come after them.
test("rules inside @media start with :root, so they win after the CLI reorders them", () => {
  const selectorsInMedia = (css: object, inMedia = false): string[] =>
    Object.entries(css).flatMap(([key, value]) =>
      typeof value !== "object" ? [] : key.startsWith("@media") ? selectorsInMedia(value, true) : key.startsWith("@") ? selectorsInMedia(value, inMedia) : inMedia ? key.split(/,\s*(?![^(]*\))/) : [],
    )
  const selectors = built.registry.items.flatMap((item) => (item.css ? selectorsInMedia(item.css) : []))
  expect(selectors.length).toBeGreaterThan(0)
  expect(selectors.filter((s) => !s.startsWith(":root "))).toEqual([])
})

test("the focus ring is an outline on :focus-visible, so shadow classes and high-contrast mode keep it", () => {
  const button = built.registry.items.find((i) => i.name === "button")!.css!["@layer components"] as Record<string, Record<string, string>>
  expect(button[".tx-button:focus-visible"]?.outline).toMatch(/var\(--tx-ring\)/)
  for (const file of ["base", "button", "card", "dialog"]) {
    expect(readFileSync(`registry/threadcn/styles/${file}.css`, "utf8"), file).not.toContain("--_ring")
  }
  for (const file of ["button", "dialog"]) {
    expect(readFileSync(`registry/threadcn/ui/${file}.tsx`, "utf8"), file).not.toMatch(/\boutline-(none|hidden)\b/)
  }
})

test("reduced motion only touches threadcn parts: no !important, no catch-all selector", () => {
  const css = JSON.stringify(built.registry.items.map((i) => i.css ?? {}))
  expect(css).not.toContain("!important")
  expect(css).not.toMatch(/\[class\*=/)
})

test("the base item tells users how to set up the registry and the fabric background", () => {
  const base = built.registry.items.find((i) => i.name === "base")!
  expect(base.docs).toMatch(/"@threadcn"/)
  expect(base.docs).toMatch(/tx-fabric/)
})

test("the button's soft shadow is a public token, so users can change every button at once", () => {
  expect(denim.shared["patch-shadow"]).toBeDefined()
  const button = built.registry.items.find((i) => i.name === "button")!.css!["@layer components"] as Record<string, Record<string, string>>
  expect(button[".tx-button"]["--_shadow"]).toBe("var(--tx-patch-shadow)")
})

test("each item installs exactly the packages and threadcn parts its file imports", () => {
  const summary = Object.fromEntries(
    built.registry.items.map((i) => [i.name, { deps: i.dependencies ?? [], parts: i.registryDependencies ?? [], css: Boolean(i.css) }]),
  )
  expect(summary).toEqual({
    base: { deps: [], parts: [], css: true },
    stitch: { deps: ["cn"], parts: ["@threadcn/base"], css: false },
    button: { deps: ["@base-ui/react", "class-variance-authority", "cn"], parts: ["@threadcn/stitch"], css: true },
    card: { deps: ["cn"], parts: ["@threadcn/stitch"], css: true },
    dialog: { deps: ["@base-ui/react", "cn"], parts: ["@threadcn/button", "@threadcn/stitch"], css: true },
    badge: { deps: ["@base-ui/react", "class-variance-authority", "cn"], parts: ["@threadcn/stitch"], css: true },
    label: { deps: ["cn"], parts: ["@threadcn/base"], css: false },
    separator: { deps: ["@base-ui/react", "cn"], parts: ["@threadcn/base"], css: true },
    patch: { deps: ["@base-ui/react", "class-variance-authority", "cn"], parts: ["@threadcn/stitch"], css: true },
    field: { deps: [], parts: ["@threadcn/base"], css: true },
    input: { deps: ["@base-ui/react", "cn"], parts: ["@threadcn/field"], css: false },
    textarea: { deps: ["cn"], parts: ["@threadcn/field"], css: false },
  })
})

test("the field placeholder uses the same blend the contrast test measures", () => {
  const pair = denim.pairs.find((p) => typeof p.fg === "object" && p.fg.mix[0] === "field-foreground")
  expect(pair).toEqual({ fg: { mix: ["field-foreground", "field", 0.7] }, bg: "field", min: 4.5 })
  expect(readFileSync("registry/threadcn/styles/field.css", "utf8")).toContain("color-mix(in srgb, var(--tx-field-foreground) 70%, var(--tx-field))")
})
