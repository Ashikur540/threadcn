import { denim } from "@/registry/threadcn/fabrics/denim"
import { checkPairs, ratio } from "@/scripts/contrast"

test("ratio of white on black is 21", () => {
  expect(ratio("#ffffff", "#000000")).toBe(21)
})

test("ratio of #777777 on white is just under AA", () => {
  expect(ratio("#777777", "#ffffff")).toBe(4.48)
})

test("ratio rejects colors that are not 6-digit hex", () => {
  expect(() => ratio("#fff", "#000000")).toThrow(/6-digit hex/)
})

test("checkPairs measures a blended background, like a hover color", () => {
  const fake = {
    light: { a: "#000000", b: "#ffffff", c: "#000000" },
    dark: {},
    pairs: [{ fg: "a", bg: { mix: ["b", "c", 0.5] as [string, string, number] }, min: 6 }],
  }
  expect(checkPairs(fake, "light")).toEqual([{ fg: "a", bg: "b~c@0.5", ratio: 5.32, min: 6 }])
})

test.each(["light", "dark"] as const)("every Denim pair passes in %s mode", (mode) => {
  expect(checkPairs(denim, mode)).toEqual([])
})
