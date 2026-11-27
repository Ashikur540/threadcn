import { existsSync } from "node:fs"

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
    for (const example of guide.examples) expect(existsSync(example.file), example.file).toBe(true)
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
