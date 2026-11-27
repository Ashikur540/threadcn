"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/registry/threadcn/ui/dialog"
import { Input } from "@/registry/threadcn/ui/input"
import { Kbd } from "@/registry/threadcn/ui/kbd"

import { components } from "./catalog"

const pages = [
  { href: "/docs", title: "Installation", hint: "Add the registry and install your first component" },
  { href: "/docs/components", title: "All components", hint: "Every component with a live preview" },
  ...components.map((c) => ({ href: `/docs/components/${c.name}`, title: c.title, hint: c.description })),
]

/** Search the docs. Opens with the button or with Cmd+K / Ctrl+K; Enter opens the first match. */
export function Search() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const router = useRouter()

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((o) => !o)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  const q = query.trim().toLowerCase()
  const results = pages.filter((p) => !q || p.title.toLowerCase().includes(q) || p.hint.toLowerCase().includes(q)).slice(0, 8)

  function go(href: string) {
    setOpen(false)
    setQuery("")
    router.push(href)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="flex items-center gap-3 rounded-[10px] bg-(--tx-patch-secondary) py-1.5 pr-1.5 pl-3 text-sm text-(--tx-patch-secondary-foreground) hover:bg-(--tx-patch-secondary-edge) focus-visible:outline-3 focus-visible:outline-(--tx-ring)">
        <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
        <span className="max-md:sr-only">Search docs</span>
        <Kbd className="max-md:hidden">⌘K</Kbd>
      </DialogTrigger>
      <DialogContent className="top-24 translate-y-0 sm:max-w-lg">
        <DialogTitle>Search the docs</DialogTitle>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            if (results[0]) go(results[0].href)
          }}
        >
          <Input autoFocus value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Button, dialog, install…" aria-label="Search the docs" />
        </form>
        {results.length === 0 ? (
          <p className="py-4 text-center text-(--tx-muted-foreground)">Nothing matches &ldquo;{query}&rdquo;.</p>
        ) : (
          <ul className="grid max-h-80 gap-1 overflow-y-auto" aria-label="Results">
            {results.map((r) => (
              <li key={r.href}>
                <Link
                  href={r.href}
                  onClick={() => go(r.href)}
                  className="grid rounded-lg px-3 py-2 hover:bg-(--tx-patch-secondary) focus-visible:bg-(--tx-patch-secondary) focus-visible:outline-none"
                >
                  <span className="font-semibold">{r.title}</span>
                  <span className="line-clamp-1 text-sm text-(--tx-muted-foreground)">{r.hint}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </DialogContent>
    </Dialog>
  )
}
