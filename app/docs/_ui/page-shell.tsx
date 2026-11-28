import Link from "next/link"

import { Stitch } from "@/registry/threadcn/ui/stitch"

import { neighbours } from "../_lib/registry"

export type TocItem = { id: string; title: string; depth?: 1 | 2 }

const chevron = (d: string) => (
  <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={d} />
  </svg>
)

/**
 * One docs page: breadcrumb, title and intro on the fabric, then the page body
 * on a solid canvas sheet (no texture behind text), "On this page" on the right
 * at wide sizes, and previous / next links at the bottom.
 */
export function PageShell({
  href,
  crumbs,
  title,
  intro,
  actions,
  toc = [],
  children,
}: {
  href: string
  crumbs: { href: string; title: string }[]
  title: string
  intro: React.ReactNode
  actions?: React.ReactNode
  toc?: TocItem[]
  children: React.ReactNode
}) {
  return (
    <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_12rem]">
      <article className="min-w-0">
        <header className="mb-6 grid gap-3">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm text-(--tx-muted-foreground)">
            {crumbs.map((c) => (
              <span key={c.href} className="flex items-center gap-1.5">
                <Link href={c.href} className="hover:text-(--tx-thread)">
                  {c.title}
                </Link>
                {chevron("m9 6 6 6-6 6")}
              </span>
            ))}
            <span aria-current="page">{title}</span>
          </nav>
          <h1 className="font-(family-name:--tx-font-heading) text-4xl font-bold tracking-tight md:text-5xl">{title}</h1>
          <p className="max-w-[62ch] text-lg text-(--tx-muted-foreground)">{intro}</p>
          {actions && <div className="flex flex-wrap gap-3 pt-1">{actions}</div>}
        </header>

        <div className="relative rounded-2xl bg-(--tx-field) px-5 py-8 text-(--tx-field-foreground) shadow-(--tx-card-shadow) [--_inset:8px] [--_radius:16px] [--_stitch:var(--tx-field-border)] md:px-10 md:py-10">
          <Stitch />
          <div className="docs-prose grid gap-6 *:min-w-0">{children}</div>
        </div>

        <PrevNext href={href} />
      </article>

      {toc.length > 0 && (
        <aside className="max-xl:hidden">
          <nav aria-label="On this page" className="sticky top-22 grid gap-1 border-l-[1.6px] border-dashed border-(--tx-thread)/60 pl-4 text-sm">
            <p className="mb-1 font-(family-name:--tx-font-patch) font-semibold">On this page</p>
            {toc.map((item) => (
              <a key={item.id} href={`#${item.id}`} className={`py-0.5 text-(--tx-muted-foreground) hover:text-(--tx-thread) ${item.depth === 2 ? "pl-3" : ""}`}>
                {item.title}
              </a>
            ))}
          </nav>
        </aside>
      )}
    </div>
  )
}

/** A section heading inside a docs page, with an id the "On this page" list links to. */
export function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="scroll-mt-24 border-b-[1.6px] border-dashed border-(--tx-field-border)/50 pb-2 font-(family-name:--tx-font-heading) text-2xl font-bold md:text-3xl">
      {children}
    </h2>
  )
}

export function H3({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h3 id={id} className="scroll-mt-24 font-(family-name:--tx-font-heading) text-xl font-bold">
      {children}
    </h3>
  )
}

/** Inline code inside the canvas sheet. */
export function C({ children }: { children: React.ReactNode }) {
  return <code className="rounded bg-(--tx-field-foreground)/10 px-1.5 py-0.5 font-mono text-[0.9em]">{children}</code>
}

/** Previous and next docs page. On phones it sticks to the bottom of the screen. */
export function PrevNext({ href }: { href: string }) {
  const { prev, next } = neighbours(href)
  return (
    <nav aria-label="Previous and next page" className="mt-8 flex justify-between gap-4 max-sm:sticky max-sm:bottom-0 max-sm:z-30 max-sm:-mx-4 max-sm:border-t-[1.6px] max-sm:border-dashed max-sm:border-(--tx-thread)/60 max-sm:bg-(--tx-fabric) max-sm:px-4 max-sm:py-2.5">
      {prev ? (
        <Link href={prev.href} className="flex items-center gap-1.5 rounded-xl bg-(--tx-patch-secondary) px-4 py-2.5 font-(family-name:--tx-font-patch) font-semibold text-(--tx-patch-secondary-foreground) shadow-[0_3px_0_var(--tx-patch-secondary-edge)]">
          {chevron("m15 6-6 6 6 6")}
          {prev.title}
        </Link>
      ) : (
        <span />
      )}
      {next && (
        <Link href={next.href} className="flex items-center gap-1.5 rounded-xl bg-(--tx-patch-secondary) px-4 py-2.5 font-(family-name:--tx-font-patch) font-semibold text-(--tx-patch-secondary-foreground) shadow-[0_3px_0_var(--tx-patch-secondary-edge)]">
          {next.title}
          {chevron("m9 6 6 6-6 6")}
        </Link>
      )}
    </nav>
  )
}
