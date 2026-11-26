import { existsSync, readdirSync, readFileSync } from "node:fs"
import { denim } from "@/registry/threadcn/fabrics/denim"
import { buildRegistry, importsOf } from "@/scripts/build-registry"

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

test("public/r has no leftover items: every file is in registry.json", () => {
  // shadcn build writes new files but never removes old ones, and anything here goes live.
  const names = new Set([...built.registry.items.map((i) => i.name), "registry"])
  const leftovers = readdirSync("public/r").filter((f) => !names.has(f.replace(/\.json$/, "")))
  expect(leftovers).toEqual([])
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
  for (const file of readdirSync("registry/threadcn/styles")) {
    expect(readFileSync(`registry/threadcn/styles/${file}`, "utf8"), file).not.toContain("--_ring")
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

test("the site address comes from NEXT_PUBLIC_SITE_URL, without a trailing slash", async () => {
  vi.stubEnv("NEXT_PUBLIC_SITE_URL", "https://threadcn.example/")
  vi.resetModules()
  const { buildRegistry: rebuild } = await import("@/scripts/build-registry")
  const base = rebuild().registry.items.find((i) => i.name === "base")!
  expect(base.docs).toContain('"@threadcn": "https://threadcn.example/r/{name}.json"')
  vi.unstubAllEnvs()
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
    modal: { deps: [], parts: ["@threadcn/base"], css: true },
    dialog: { deps: ["@base-ui/react", "cn"], parts: ["@threadcn/modal", "@threadcn/button", "@threadcn/stitch"], css: false },
    badge: { deps: ["@base-ui/react", "class-variance-authority", "cn"], parts: ["@threadcn/stitch"], css: true },
    label: { deps: ["cn"], parts: ["@threadcn/base"], css: false },
    separator: { deps: ["@base-ui/react", "cn"], parts: ["@threadcn/base"], css: true },
    patch: { deps: ["@base-ui/react", "class-variance-authority", "cn"], parts: ["@threadcn/stitch"], css: true },
    canvas: { deps: [], parts: ["@threadcn/base"], css: true },
    input: { deps: ["@base-ui/react", "cn"], parts: ["@threadcn/canvas"], css: false },
    textarea: { deps: ["cn"], parts: ["@threadcn/canvas"], css: false },
    checkbox: { deps: ["@base-ui/react", "cn"], parts: ["@threadcn/stitch"], css: true },
    "radio-group": { deps: ["@base-ui/react", "cn"], parts: ["@threadcn/stitch"], css: true },
    switch: { deps: ["@base-ui/react", "cn"], parts: ["@threadcn/stitch"], css: true },
    pocket: { deps: [], parts: ["@threadcn/base"], css: true },
    select: { deps: ["@base-ui/react", "cn"], parts: ["@threadcn/canvas", "@threadcn/pocket", "@threadcn/stitch"], css: true },
    tooltip: { deps: ["@base-ui/react", "cn"], parts: ["@threadcn/stitch"], css: true },
    tabs: { deps: ["@base-ui/react", "class-variance-authority", "cn"], parts: ["@threadcn/stitch"], css: true },
    "pocket-card": { deps: ["cn"], parts: ["@threadcn/base"], css: true },
    toggle: { deps: ["@base-ui/react", "class-variance-authority", "cn"], parts: ["@threadcn/stitch"], css: true },
    "toggle-group": { deps: ["@base-ui/react", "class-variance-authority", "cn"], parts: ["@threadcn/stitch", "@threadcn/toggle"], css: false },
    alert: { deps: ["class-variance-authority", "cn"], parts: ["@threadcn/stitch"], css: true },
    "alert-dialog": { deps: ["@base-ui/react", "cn"], parts: ["@threadcn/modal", "@threadcn/button", "@threadcn/stitch"], css: false },
    progress: { deps: ["@base-ui/react", "cn"], parts: ["@threadcn/base"], css: true },
    slider: { deps: ["@base-ui/react", "cn"], parts: ["@threadcn/base"], css: true },
    skeleton: { deps: ["cn"], parts: ["@threadcn/base"], css: true },
    spinner: { deps: ["cn"], parts: ["@threadcn/base"], css: true },
    toast: { deps: ["@base-ui/react", "cn"], parts: ["@threadcn/button", "@threadcn/spinner", "@threadcn/stitch"], css: true },
    accordion: { deps: ["@base-ui/react", "cn"], parts: ["@threadcn/base"], css: true },
    collapsible: { deps: ["@base-ui/react"], parts: [], css: false },
    breadcrumb: { deps: ["@base-ui/react", "cn"], parts: ["@threadcn/base"], css: true },
    pagination: { deps: ["cn"], parts: ["@threadcn/button", "@threadcn/stitch"], css: false },
    avatar: { deps: ["@base-ui/react", "cn"], parts: ["@threadcn/stitch"], css: true },
    table: { deps: ["cn"], parts: ["@threadcn/base"], css: true },
    kbd: { deps: ["cn"], parts: ["@threadcn/base"], css: true },
    "scroll-area": { deps: ["@base-ui/react", "cn"], parts: ["@threadcn/base"], css: true },
    popover: { deps: ["@base-ui/react", "cn"], parts: ["@threadcn/pocket", "@threadcn/stitch"], css: false },
    "hover-card": { deps: ["@base-ui/react", "cn"], parts: ["@threadcn/pocket", "@threadcn/stitch"], css: false },
    "dropdown-menu": { deps: ["@base-ui/react", "cn"], parts: ["@threadcn/pocket", "@threadcn/stitch"], css: false },
    "context-menu": { deps: ["@base-ui/react", "cn"], parts: ["@threadcn/pocket", "@threadcn/stitch"], css: false },
    sheet: { deps: ["@base-ui/react", "cn"], parts: ["@threadcn/modal", "@threadcn/button", "@threadcn/stitch"], css: true },
    drawer: { deps: ["@base-ui/react", "cn"], parts: ["@threadcn/modal", "@threadcn/stitch"], css: true },
  })
})

test("the field placeholder uses the same blend the contrast test measures", () => {
  const pair = denim.pairs.find((p) => typeof p.fg === "object" && p.fg.mix[0] === "field-foreground")
  expect(pair).toEqual({ fg: { mix: ["field-foreground", "field", 0.7] }, bg: "field", min: 4.5 })
  expect(readFileSync("registry/threadcn/styles/canvas.css", "utf8")).toContain("color-mix(in srgb, var(--tx-field-foreground) 70%, var(--tx-field))")
})

test("every item that animates also turns it off under reduced motion", () => {
  for (const item of built.registry.items) {
    const layer = (item.css?.["@layer components"] ?? {}) as Record<string, Record<string, string>>
    const animates = Object.entries(layer).some(([key, rule]) => !key.startsWith("@") && "transition" in rule)
    if (animates) expect(Object.keys(layer), item.name).toContain("@media (prefers-reduced-motion: reduce)")
  }
})

test("Tailwind transition classes in components also switch off under reduced motion", () => {
  // Utilities beat @layer components, so a CSS reduced-motion rule can't stop them.
  const usesTransition = /(?<!motion-reduce:)\btransition(?:-|\b)/
  for (const file of readdirSync("registry/threadcn/ui")) {
    const literals = readFileSync(`registry/threadcn/ui/${file}`, "utf8").match(/"[^"\n]*"/g) ?? []
    for (const classes of literals.filter((l) => usesTransition.test(l))) expect(classes, file).toContain("motion-reduce:transition-none")
  }
})

test("checkbox and radio fade their marks in and out", () => {
  for (const name of ["checkbox", "radio-group"]) {
    const css = readFileSync(`registry/threadcn/styles/${name}.css`, "utf8")
    expect(css, name).toMatch(/indicator:is\(\[data-starting-style\], \[data-ending-style\]\)/)
  }
})

test("pockets mark picks with a thread tick, and every divider uses the pocket's one line", () => {
  const pocket = styles("pocket")
  const tick = pocket.slice(pocket.indexOf(".tx-pocket-tick {"), pocket.indexOf("}", pocket.indexOf(".tx-pocket-tick {")))
  expect(tick).toContain("border-right: 2px solid var(--_mark)")
  expect(tick).toContain("rotate: 45deg")
  expect(pocket).toMatch(/--_divider: repeating-linear-gradient/)
  expect(pocket).toMatch(/\.tx-pocket-separator \{[^}]*background-image: var\(--_divider\)/)
  expect(styles("select")).toMatch(/\.tx-select-item \+ \.tx-select-item \{[^}]*background-image: var\(--_divider\)/)
})

const ui = (name: string) => readFileSync(`registry/threadcn/ui/${name}.tsx`, "utf8")
const styles = (name: string) => readFileSync(`registry/threadcn/styles/${name}.css`, "utf8")

test("every Base UI part that ships a default glyph gets empty children", () => {
  // Select.Icon "▼", ItemIndicator "✔️", ScrollArrow "▲"/"▼" (checked in Base UI 1.9)
  const select = ui("select")
  for (const part of ["Icon", "ItemIndicator", "ScrollUpArrow", "ScrollDownArrow"]) {
    expect(select, part).toMatch(new RegExp(`<SelectPrimitive\\.${part}[^>]*>\\s*\\{null\\b`))
  }
})

test("tab and panel padding lives in CSS, so the active tab can grow", () => {
  expect(ui("tabs")).not.toMatch(/\b(py|p)-[\d[]/)
})

test("text on flat parts inherits its color, so it reads on denim and on cream", () => {
  expect(ui("label")).not.toMatch(/text-\(--tx-/)
  for (const name of ["button", "badge"]) expect(styles(name), name).not.toMatch(/--_fg: var\(--tx-surface-foreground\)/)
})

test("high-contrast mode keeps highlight, focus and error apart", () => {
  expect(styles("pocket")).toMatch(/:root \.tx-pocket-item\[data-highlighted\] \{\s*forced-color-adjust: none;\s*background-color: Highlight;/)
  expect(styles("canvas")).toMatch(/outline: 3px double/)
  expect(styles("canvas")).toMatch(/outline-color: Highlight/)
})

test("hover never hides an error outline, and disabled toggles never show a pointer", () => {
  expect(styles("canvas")).toContain(".tx-canvas:hover:where(:not(:disabled, [data-disabled]))")
  for (const name of ["checkbox", "radio-group", "switch", "select"]) expect(ui(name), name).toContain("data-disabled:cursor-not-allowed")
})

test("line tabs mark the active tab in both orientations and stay flat on hover", () => {
  const css = styles("tabs")
  expect(css).toContain('.tx-tabs-list-line .tx-tabs-trigger[data-orientation="vertical"][data-active]::after')
  expect(css).toContain(".tx-tabs-list-line .tx-tabs-trigger:hover")
})

test("a focused field keeps its dashed stitch (darker) and gets a gold ring on its edge", () => {
  const css = styles("canvas")
  const focus = css.slice(css.indexOf(".tx-canvas:is(:focus-visible, [data-popup-open]) {"))
  const rule = focus.slice(0, focus.indexOf("}"))
  expect(rule).toContain("outline-color: var(--tx-field-foreground)")
  expect(rule).toContain("0 0 0 3px var(--tx-ring)")
  expect(rule).not.toContain("solid")
})

test("on/off controls say 'on' with leather, which stands out in both modes", () => {
  const on = (name: string, selector: string) => {
    const css = styles(name)
    const start = css.indexOf(selector + " {")
    return css.slice(start, css.indexOf("}", start))
  }
  expect(on("checkbox", ".tx-checkbox:is([data-checked], [data-indeterminate])")).toContain("var(--tx-leather)")
  expect(on("toggle", ".tx-toggle[data-pressed]")).toContain("background-color: var(--tx-leather)")
})

// In a Next.js server component, render={<Button />} would otherwise be rendered
// on the server first, freezing Button's <Stitch /> as its only content and
// dropping the trigger's text. "use client" keeps Button a client reference.
test("Button is a client component, but buttonVariants stays callable on the server", () => {
  expect(ui("button-client").startsWith('"use client"')).toBe(true)
  expect(ui("button").startsWith('"use client"')).toBe(false)
  const button = built.registry.items.find((i) => i.name === "button")!
  expect(button.files!.map((f) => f.path)).toEqual(["registry/threadcn/ui/button.tsx", "registry/threadcn/ui/button-client.tsx"])
})

test("importsOf ignores imports mentioned in comments", () => {
  const source = '// import it from "button"\n/* or from "card" */\nimport { cn } from "cn"\n'
  expect(importsOf(source)).toEqual({ dependencies: ["cn"], registryDependencies: [] })
})
