import type { Metadata } from "next"
import Link from "next/link"

import { components } from "../../_site/catalog"
import { PrevNext } from "../_ui/page-shell"
import { ComponentBrowser } from "./browser"

export const metadata: Metadata = {
  title: "Components · threadcn",
  description: `All ${components.length} stitched threadcn components, each with a live preview.`,
}

/** The components index. Wide like a gallery, so it skips the reading sheet the other docs pages use. */
export default function ComponentsPage() {
  return (
    <div className="grid gap-6">
      <header className="grid gap-3">
        <nav aria-label="Breadcrumb" className="text-sm text-(--tx-muted-foreground)">
          <Link href="/docs" className="hover:text-(--tx-thread)">
            Docs
          </Link>
        </nav>
        <h1 className="font-(family-name:--tx-font-heading) text-4xl font-bold tracking-tight md:text-5xl">Components</h1>
        <p className="max-w-[62ch] text-lg text-(--tx-muted-foreground)">
          {components.length} components, each one stitched. Same names and props as shadcn/ui, so what you know carries over.
        </p>
      </header>
      <ComponentBrowser />
      <PrevNext href="/docs/components" />
    </div>
  )
}
