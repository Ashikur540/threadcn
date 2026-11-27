"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "cn"

import { catalog, components } from "../../_site/catalog"

const start = [
  { href: "/docs", title: "Installation" },
  { href: "/docs/components", title: "All components" },
]

function NavLink({ href, title, onNavigate }: { href: string; title: string; onNavigate?: () => void }) {
  const active = usePathname() === href
  return (
    <Link
      href={href}
      onClick={onNavigate}
      aria-current={active ? "page" : undefined}
      className={cn(
        "block rounded-lg px-3 py-1.5 text-[15px] hover:bg-(--tx-patch-secondary) hover:text-(--tx-patch-secondary-foreground)",
        active && "bg-(--tx-leather) font-semibold text-(--tx-leather-foreground) hover:bg-(--tx-leather) hover:text-(--tx-leather-foreground)",
      )}
    >
      {title}
    </Link>
  )
}

const heading = "mb-1.5 px-3 font-(family-name:--tx-font-patch) text-sm font-semibold text-(--tx-muted-foreground)"

/** The docs menu: getting started, then every component by group. Used in the sidebar and in the phone menu. */
export function DocsNav({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <nav aria-label="Docs" className="grid gap-6">
      <div>
        <p className={heading}>Getting started</p>
        {start.map((page) => (
          <NavLink key={page.href} {...page} onNavigate={onNavigate} />
        ))}
      </div>
      {catalog.map(({ group, items }) => (
        <div key={group}>
          <p className={heading}>{group}</p>
          {items.map((c) => (
            <NavLink key={c.name} href={`/docs/components/${c.name}`} title={c.title} onNavigate={onNavigate} />
          ))}
        </div>
      ))}
      <p className="px-3 text-sm text-(--tx-muted-foreground)">{components.length} components</p>
    </nav>
  )
}
