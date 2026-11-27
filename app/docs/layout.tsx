import { Stitch } from "@/registry/threadcn/ui/stitch"

import { MobileNav } from "./_ui/mobile-nav"
import { DocsNav } from "./_ui/nav"

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto grid max-w-7xl gap-8 px-4 pt-6 pb-10 md:px-8 lg:grid-cols-[15rem_minmax(0,1fr)]">
      <aside className="max-lg:hidden">
        <div className="sticky top-22 rounded-2xl bg-(--tx-surface) shadow-(--tx-card-shadow) [--_inset:7px] [--_radius:16px]">
          <Stitch />
          <div className="max-h-[calc(100dvh-7rem)] overflow-y-auto p-4 [scrollbar-width:thin]">
            <DocsNav />
          </div>
        </div>
      </aside>
      <div className="min-w-0">
        <div className="mb-4 lg:hidden">
          <MobileNav />
        </div>
        {children}
      </div>
    </div>
  )
}
