"use client"

import Link from "next/link"
import { useState } from "react"

import { Input } from "@/registry/threadcn/ui/input"
import { Stitch } from "@/registry/threadcn/ui/stitch"
import { ToggleGroup, ToggleGroupItem } from "@/registry/threadcn/ui/toggle-group"

import { catalog } from "../../_site/catalog"
import { demos } from "../_demos"

const all = "All"

/**
 * Search box, group chips and a card per component. Each card shows the
 * component's real demo, shrunk and made inert (you look, you don't click);
 * the whole card links to the component's page.
 */
export function ComponentBrowser() {
  const [query, setQuery] = useState("")
  const [group, setGroup] = useState(all)

  const q = query.trim().toLowerCase()
  const shown = catalog
    .filter((g) => group === all || g.group === group)
    .flatMap((g) => g.items.map((item) => ({ ...item, group: g.group })))
    .filter((c) => !q || c.title.toLowerCase().includes(q) || c.description.toLowerCase().includes(q))

  return (
    <div className="grid gap-6">
      <div className="flex flex-wrap items-center gap-4">
        <Input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search components"
          aria-label="Search components"
          className="w-full max-w-xs"
        />
        <ToggleGroup
          variant="outline"
          size="sm"
          value={[group]}
          onValueChange={(value) => setGroup(value[0] ?? all)}
          aria-label="Filter by group"
          className="flex-wrap"
        >
          {[all, ...catalog.map((g) => g.group)].map((g) => (
            <ToggleGroupItem key={g} value={g}>
              {g}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>

      <p aria-live="polite" className="text-sm text-(--tx-muted-foreground)">
        {shown.length === 1 ? "1 component" : `${shown.length} components`}
      </p>

      {shown.length === 0 ? (
        <p className="rounded-xl bg-(--tx-surface) p-8 text-center">
          Nothing matches &ldquo;{query}&rdquo;. Try a shorter word, like &ldquo;menu&rdquo; or &ldquo;input&rdquo;.
        </p>
      ) : (
        <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {shown.map((c) => {
            const Demo = demos[c.name]
            return (
              <li key={c.name} className="relative flex flex-col overflow-hidden rounded-2xl bg-(--tx-field) text-(--tx-field-foreground) shadow-(--tx-card-shadow) [--_inset:7px] [--_radius:16px] [--_stitch:var(--tx-field-border)] has-[a:focus-visible]:outline-3 has-[a:focus-visible]:outline-(--tx-ring)">
                <div inert className="docs-stage tx-fabric shadow-[inset_0_2px_10px_rgb(0_0_0/.35)] m-2 grid h-48 place-items-center overflow-hidden rounded-xl">
                  <div className="origin-center scale-[0.8]">{Demo && <Demo />}</div>
                </div>
                <div className="grid gap-1 px-5 pt-2 pb-5">
                  <Link
                    href={`/docs/components/${c.name}`}
                    className="font-(family-name:--tx-font-heading) text-xl font-bold outline-none after:absolute after:inset-0 hover:underline hover:underline-offset-4"
                  >
                    {c.title}
                  </Link>
                  <p className="text-[15px] text-(--tx-field-foreground)/80">{c.description}</p>
                  <p className="font-(family-name:--tx-font-patch) text-sm text-(--tx-field-foreground)/70">{c.group}</p>
                </div>
                <Stitch />
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
