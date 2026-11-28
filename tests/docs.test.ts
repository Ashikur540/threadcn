import { existsSync, readdirSync, readFileSync } from "node:fs"

import { demos } from "@/app/docs/_demos"
import { guides } from "@/app/docs/_guides"
import { exportsOf, getItem, pages } from "@/app/docs/_lib/registry"
import { components } from "@/app/_site/catalog"

test("every component has a demo file and an entry in the demo index", () => {
  for (const { name } of components) {
    expect(existsSync(`app/docs/_demos/${name}.tsx`), name).toBe(true)
    expect(demos[name], name).toBeDefined()
  }
  expect(Object.keys(demos).sort()).toEqual(components.map((c) => c.name).sort())
})

test("every guide belongs to a real component and its example files exist", () => {
  for (const [name, guide] of Object.entries(guides)) {
    expect(getItem(name), name).toBeDefined()
    for (const example of guide.examples) {
      expect(existsSync(example.file), example.file).toBe(true)
      // The page draws `text` in backticks as code, so an odd count would flip code and prose.
      expect(example.description.split("`").length % 2, example.description).toBe(1)
    }
  }
})

test("every component file exports something to import", () => {
  for (const { name } of components) expect(exportsOf(name).length, name).toBeGreaterThan(0)
})

test("previous / next covers every docs page once", () => {
  const hrefs = pages.map((p) => p.href)
  expect(new Set(hrefs).size).toBe(hrefs.length)
  expect(hrefs.length).toBe(components.length + 2)
})

// docs-focus.css copies each component's :focus-visible look so a "States"
// example can show focus. The copy must match the real rule exactly.
test("the docs focus look matches each component's real focus rule", () => {
  const body = (css: string, selector: RegExp) => {
    const match = css.match(new RegExp(selector.source + String.raw`\s*\{([^}]*)\}`))
    expect(match, String(selector)).not.toBeNull()
    return match![1].replace(/\s+/g, " ").trim()
  }
  const docs = readFileSync("app/docs/docs-focus.css", "utf8")
  const pairs: [string, RegExp, RegExp][] = [
    ["canvas", /\.tx-canvas:is\(:focus-visible, \[data-popup-open\]\)/, /\.tx-canvas\[data-docs-focus\]/],
    ["checkbox", /\.tx-checkbox:focus-visible/, /\.tx-checkbox\[data-docs-focus\]/],
    ["radio-group", /\.tx-radio-group-item:focus-visible/, /\.tx-radio-group-item\[data-docs-focus\]/],
    ["switch", /\.tx-switch:focus-visible/, /\.tx-switch\[data-docs-focus\]/],
    ["toggle", /\.tx-toggle:focus-visible/, /\.tx-toggle\[data-docs-focus\]/],
    ["slider", /\.tx-slider-thumb:has\(:focus-visible\)/, /\[data-docs-focus\] \.tx-slider-thumb/],
  ]
  for (const [file, real, copy] of pairs) {
    const original = readFileSync(`registry/threadcn/styles/${file}.css`, "utf8")
    expect(body(docs, copy), file).toBe(body(original, real))
  }
})

test("every link to another site opens in a new tab", () => {
  const files = readdirSync("app", { recursive: true, encoding: "utf8" }).filter((f) => f.endsWith(".tsx"))
  for (const file of files) {
    const source = readFileSync(`app/${file}`, "utf8")
    for (const [tag] of source.matchAll(/<a\s[^>]*href=(?:"https?:|\{[^}]*(?:repoUrl|https?:))[^>]*>/g)) {
      expect(tag, file).toContain('target="_blank"')
      expect(tag, file).toContain('rel="noreferrer"')
    }
  }
})

test("docs wrappers hide their own stitch without hiding the stitch of what's inside", () => {
  // --_stitch passes down to children, so setting it on a wrapper would also
  // blank every <Stitch /> in the demo inside. Hide the wrapper's own stitch instead.
  for (const file of ["app/docs/_ui/preview.tsx", "app/docs/_ui/install-tabs.tsx", "app/_site/copy.tsx"]) {
    expect(readFileSync(file, "utf8"), file).not.toMatch(/--_stitch:transparent/)
  }
})
