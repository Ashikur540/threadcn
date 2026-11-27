import Link from "next/link"

import { repoUrl } from "./github"
import { SewingButton } from "./logo"

const columns = [
  { title: "Get started", links: [{ href: "/#install", label: "Install" }, { href: "/#components", label: "Components" }] },
  { title: "Project", links: [{ href: repoUrl, label: "GitHub" }, { href: `${repoUrl}/issues`, label: "Report an issue" }] },
]

/** The footer, sewn on like a clothing care label. */
export function SiteFooter() {
  return (
    <footer className="mx-auto w-full max-w-7xl px-4 pt-10 pb-16 md:px-8">
      <div className="relative grid gap-8 rounded-md bg-[#f4efe4] p-8 text-[#2d2a26] shadow-[0_10px_24px_rgb(0_0_0/.3)] outline-[1.6px] -outline-offset-[7px] outline-[#b9ad97] outline-dashed md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="grid content-start gap-2 text-[15px]">
          <span className="flex items-center gap-2 font-(family-name:--tx-font-patch) text-lg font-semibold">
            <SewingButton className="size-6 text-[#2b4a74]" />
            threadcn
          </span>
          <p>Stitched components for shadcn/ui. Free and open source under the MIT license.</p>
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
    </footer>
  )
}
