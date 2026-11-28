import { existsSync, readFileSync } from "node:fs"

import type { PropRow, SettingRow } from "@/app/docs/_ui/notes-tables"
import registry from "@/registry.json"

// The Props and Settings tables in each guide are written by hand. These tests
// fail when a component changes and its guide doesn't, so the docs can't drift.

type Notes = { props?: PropRow[]; settings?: SettingRow[] }
const notes = Object.fromEntries(
  Object.entries(import.meta.glob<Notes>("../app/docs/_guides/*/notes.tsx", { eager: true })).map(([path, mod]) => [path.split("/").at(-2)!, mod]),
)

const literals = (text: string) => new Set([...text.matchAll(/"([^"]+)"/g)].map((m) => m[1]))
const sorted = (set: Set<string>) => [...set].sort()

/** Every prop in a component file that takes one of a fixed list of words: cva variants and props typed like `size?: "sm" | "default"`. */
function choiceProps(name: string) {
  const source = readFileSync(`registry/threadcn/ui/${name}.tsx`, "utf8")
  const found = new Map<string, Set<string>>()
  for (const [, prop, union] of source.matchAll(/(\w+)\?: ((?:"[^"]+"\s*\|\s*)+"[^"]+")/g)) found.set(prop, literals(union))
  // cva: `variants: {` then `group: {` then `value: "classes",` (Prettier keeps the indents steady).
  const lines = source.split("\n")
  lines.forEach((line, i) => {
    const start = line.match(/^(\s*)variants: \{$/)
    if (!start) return
    const indent = start[1].length
    let group = ""
    for (const next of lines.slice(i + 1)) {
      const depth = next.search(/\S/)
      if (depth <= indent) break
      const key = next.trim().match(/^"?([\w-]+)"?:/)?.[1]
      if (!key) continue
      if (depth === indent + 2) found.set((group = key), new Set())
      else if (depth === indent + 4 && group) found.get(group)!.add(key)
    }
  })
  return found
}

/** The `--_` settings listed in the header comment of a component's CSS file, and of the shared looks it builds on (like modal.css). */
function knobs(name: string) {
  return { own: knobsIn([name]), shared: knobsIn(sharedLooks(name)) }
}

function sharedLooks(name: string) {
  const item = registry.items.find((i) => i.name === name)!
  return (item.registryDependencies ?? [])
    .map((d) => d.replace("@threadcn/", ""))
    .filter((d) => d !== "base" && !existsSync(`registry/threadcn/ui/${d}.tsx`))
}

function knobsIn(files: string[]) {
  const set = new Set<string>()
  for (const file of files) {
    const path = `registry/threadcn/styles/${file}.css`
    if (!existsSync(path)) continue
    const header = readFileSync(path, "utf8").match(/\/\*[\s\S]*?\*\//)?.[0] ?? ""
    const after = header.slice(header.indexOf("Knobs") === -1 ? header.length : header.indexOf("Knobs"))
    for (const [knob] of after.matchAll(/--_[a-z-]+/g)) set.add(knob)
  }
  return set
}

test("each guide's Props table lists every variant, size and other fixed choice the component has", () => {
  for (const [name, { props }] of Object.entries(notes)) {
    for (const [prop, values] of choiceProps(name)) {
      // A prop name can repeat on different parts (Alert Dialog's box and its Cancel button both take size), so one row must match.
      const rows = (props ?? []).filter((r) => r.name === prop).map((r) => sorted(literals(r.type)).join(" | "))
      expect.soft(rows, `${name}: the Props table should list "${prop}" as ${sorted(values).join(" | ")}`).toContain(sorted(values).join(" | "))
    }
  }
})

// Every setting in a component's own CSS must be documented. A shared look (modal, pocket, canvas)
// may list settings that don't apply to every component (a Popover has no ticks), so those are optional.
// Nothing may be documented that the CSS doesn't list.
test("each guide's Settings table matches the settings its CSS lists", () => {
  for (const [name, { settings }] of Object.entries(notes)) {
    const { own, shared } = knobs(name)
    const documented = new Set((settings ?? []).map(([knob]) => knob))
    for (const knob of own) expect.soft(documented.has(knob), `${name}: ${knob} is in ${name}.css but not in the Settings table`).toBe(true)
    for (const knob of documented)
      expect.soft(own.has(knob) || shared.has(knob), `${name}: ${knob} is in the Settings table but no CSS lists it`).toBe(true)
  }
})
