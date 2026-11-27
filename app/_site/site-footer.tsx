import Link from "next/link"

import { repoUrl } from "./github"
import { SewingButton } from "./logo"

const columns = [
  { title: "Docs", links: [{ href: "/docs", label: "Installation" }, { href: "/docs/components", label: "Components" }] },
  { title: "Project", links: [{ href: repoUrl, label: "GitHub" }, { href: `${repoUrl}/issues`, label: "Report an issue" }] },
]

/** Washing symbols, as on a real care label: wash at 30, no bleach, iron low. Decoration only. */
function CareSymbols() {
  const symbol = { fill: "none", stroke: "#2d2a26", strokeWidth: 1.6, "aria-hidden": true } as const
  return (
    <div className="flex gap-3">
      <svg width="30" height="24" viewBox="0 0 30 24" {...symbol}>
        <path d="M2 6l3 15h20l3-15M2 6c4 3 7 3 13 0s9-3 13 0" />
        <text x="10" y="18" fontSize="8" fontFamily="system-ui" fill="#2d2a26" stroke="none">30</text>
      </svg>
      <svg width="26" height="24" viewBox="0 0 26 24" {...symbol}>
        <path d="M13 3 24 21H2z" />
        <path d="M6 6l14 15M20 6 6 21" />
      </svg>
      <svg width="28" height="24" viewBox="0 0 28 24" {...symbol}>
        <path d="M3 19h22l-2-8c-1-4-4-6-9-6H6L3 19z" />
        <circle cx="14" cy="14" r="1.4" fill="#2d2a26" />
      </svg>
    </div>
  )
}

/** The footer, sewn on like a clothing care label: a folded, stitched top edge, the "composition" and washing symbols. */
export function SiteFooter() {
  return (
    <footer className="mx-auto w-full max-w-5xl px-4 pt-10 pb-16 md:px-8">
      <div className="overflow-hidden rounded-b-md bg-[#f4efe4] text-[#2d2a26] shadow-[0_10px_24px_rgb(0_0_0/.3)]">
        {/* the fold where the label is sewn into the seam */}
        <div aria-hidden="true" className="h-3 border-b-[1.6px] border-dashed border-[#b9ad97] bg-[#e6dfcf]" />
        <div className="grid gap-8 p-8 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="grid content-start gap-3 text-[15px]">
            <span className="flex items-center gap-2 font-(family-name:--tx-font-patch) text-lg font-semibold">
              <SewingButton className="size-6 text-[#2b4a74]" />
              threadcn
            </span>
            <p className="font-(family-name:--tx-font-patch) font-semibold tracking-wide uppercase">100% open source · MIT license</p>
            <p>Stitched components for shadcn/ui.</p>
            <CareSymbols />
          </div>
          {columns.map((col) => (
            <div key={col.title} className="grid content-start gap-1.5 text-[15px]">
              <h2 className="font-(family-name:--tx-font-heading) text-base font-bold">{col.title}</h2>
              {col.links.map((link) => (
                <Link key={link.href} href={link.href} className="underline-offset-4 hover:underline">
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
