import { catalog, components, groups } from "@/app/_site/catalog"

test("every component in registry.json is in exactly one group on the site", () => {
  const grouped = Object.values(groups).flat() as string[]
  expect(new Set(grouped).size).toBe(grouped.length)
  expect([...grouped].sort()).toEqual(components.map((c) => c.name).sort())
})

test("the catalog lists every component once", () => {
  expect(catalog.flatMap((g) => g.items).length).toBe(components.length)
})
