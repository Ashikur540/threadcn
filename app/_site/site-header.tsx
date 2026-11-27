import Link from "next/link"

import { GitHubIcon, repoUrl } from "./github"
import { Logo } from "./logo"
import { ModeSwitch } from "./mode-switch"

const nav = [
  { href: "/#components", label: "Components" },
  { href: "/#install", label: "Install" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b-[1.8px] border-dashed border-(--tx-thread)/60 bg-(--tx-fabric)/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-4 md:px-8">
        <Link href="/" aria-label="threadcn home" className="rounded-md">
          <Logo />
        </Link>
        <nav aria-label="Main" className="flex gap-5 max-sm:hidden">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-[15px] font-medium hover:text-(--tx-thread)">
              {item.label}
            </Link>
          ))}
        </nav>
        <span className="flex-1" />
        <a href={repoUrl} className="flex items-center gap-2 text-[15px] font-semibold hover:text-(--tx-thread)">
          <GitHubIcon className="size-5" />
          <span className="max-sm:sr-only">GitHub</span>
        </a>
        <ModeSwitch />
      </div>
    </header>
  )
}
