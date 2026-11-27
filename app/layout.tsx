import type { Metadata } from "next"
import { Fredoka, Instrument_Sans, Zilla_Slab } from "next/font/google"

import { siteUrl } from "@/site"

import { components } from "./_site/catalog"
import { SiteFooter } from "./_site/site-footer"
import { SiteHeader } from "./_site/site-header"
import "./globals.css"

const sans = Instrument_Sans({ subsets: ["latin"], variable: "--font-sans" })
const patch = Fredoka({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-patch" })
const heading = Zilla_Slab({ subsets: ["latin"], weight: ["500", "700"], variable: "--font-heading" })

export const metadata: Metadata = {
  title: "threadcn: shadcn/ui, stitched",
  description: `${components.length} stitched, fabric-style components for shadcn/ui. Same names and props, Base UI underneath, Tailwind v4 on top.`,
  metadataBase: new URL(siteUrl),
}

// Picks the mode before the page paints, so there is no flash of the wrong one:
// the saved choice first, otherwise the visitor's system setting.
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.add("dark")}catch(e){}`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${patch.variable} ${heading.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="tx-fabric flex min-h-dvh flex-col antialiased">
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  )
}
