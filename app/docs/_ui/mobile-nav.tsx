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
      <SheetContent side="left" className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Docs</SheetTitle>
        </SheetHeader>
        <DocsNav onNavigate={() => setOpen(false)} />
      </SheetContent>
    </Sheet>
  )
}
