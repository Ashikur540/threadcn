import registry from "@/registry.json"

// The components the site lists, read from registry.json so the count and the
// names never drift. Each one belongs to one group; tests/site.test.ts fails if
// a new component has no group yet.
export const groups = {
  Form: ["button", "input", "textarea", "label", "checkbox", "radio-group", "switch", "select", "slider", "toggle", "toggle-group"],
  Overlay: ["dialog", "alert-dialog", "sheet", "drawer", "popover", "tooltip", "hover-card", "dropdown-menu", "context-menu"],
  Feedback: ["alert", "toast", "progress", "skeleton", "spinner", "badge"],
  "Layout and content": ["card", "separator", "accordion", "collapsible", "table", "scroll-area", "avatar", "kbd"],
  Navigation: ["tabs", "breadcrumb", "pagination"],
  "Denim specials": ["pocket-card", "patch", "stitch"],
} as const

export type Component = { name: string; title: string; description: string }

export const components: Component[] = registry.items
  .filter((item) => item.type === "registry:ui")
  .map(({ name, title, description }) => ({ name, title, description }))

const byName = new Map(components.map((c) => [c.name, c]))

/** The groups with their components, in the order above. */
export const catalog = Object.entries(groups).map(([group, names]) => ({
  group,
  items: names.map((name) => byName.get(name)).filter((c): c is Component => c !== undefined),
}))
