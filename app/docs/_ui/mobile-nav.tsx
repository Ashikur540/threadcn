"use client"

import { useState } from "react"

import { Button } from "@/registry/threadcn/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/registry/threadcn/ui/sheet"

import { DocsNav } from "./nav"

/** On phones and tablets the docs menu lives in a sheet that slides in from the left. */
export function MobileNav() {
  const [open, setOpen] = useState(false)
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger render={<Button variant="secondary" size="sm" />}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        Docs menu
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Docs</SheetTitle>
        </SheetHeader>
        {/* Only the menu scrolls, inside the sheet's stitch. */}
        <div className="-mx-1 min-h-0 flex-1 overflow-y-auto px-1 py-3 [mask-image:linear-gradient(transparent,black_20px,black_calc(100%-20px),transparent)]">
          <DocsNav onNavigate={() => setOpen(false)} />
        </div>
      </SheetContent>
    </Sheet>
  )
}
