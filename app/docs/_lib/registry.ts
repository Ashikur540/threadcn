import { existsSync, readFileSync } from "node:fs"

import registry from "@/registry.json"

import { catalog } from "../../_site/catalog"

// Server-only helpers for the docs pages. Everything a component page shows
// about installing comes from registry.json and the real source files, so the
// docs can never describe a file or package that does not exist.

type Item = (typeof registry.items)[number]

export function getItem(name: string): Item | undefined {
  return registry.items.find((item) => item.name === name && item.type === "registry:ui")
}

/** The file's text, with the registry import path rewritten to the one users have. */
export function readSource(path: string) {
  return readFileSync(path, "utf8").replace(/@\/registry\/threadcn\/ui\//g, "@/components/ui/").trimEnd()
}

/** The names a component file exports, for the import line in Usage. Types are left out. */
export function exportsOf(name: string) {
  const text = readFileSync(`registry/threadcn/ui/${name}.tsx`, "utf8")
  const names = [...text.matchAll(/export\s*\{([^}]*)\}/g)].flatMap((m) => m[1].split(","))
  return names.map((n) => n.trim()).filter((n) => n && !n.startsWith("type ") && /^[A-Z]/.test(n))
}

/** The component's own stylesheet, if it has one. */
export function stylePath(name: string) {
  const path = `registry/threadcn/styles/${name}.css`
  return existsSync(path) ? path : undefined
}

/** Docs pages in sidebar order, for previous / next links. */
export const pages = [
  { href: "/docs", title: "Installation" },
  { href: "/docs/components", title: "Components" },
  ...catalog.flatMap(({ items }) => items).map((c) => ({ href: `/docs/components/${c.name}`, title: c.title })),
]

export function neighbours(href: string) {
  const i = pages.findIndex((p) => p.href === href)
  return { prev: i > 0 ? pages[i - 1] : undefined, next: i >= 0 && i < pages.length - 1 ? pages[i + 1] : undefined }
}
