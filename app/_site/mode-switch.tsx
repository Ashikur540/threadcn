"use client"

import { useEffect, useState } from "react"

import { Switch } from "@/registry/threadcn/ui/switch"

/** Switches the whole site between Denim (light) and Quilted night (dark), and remembers the choice. */
export function ModeSwitch() {
  const [dark, setDark] = useState(false)

  // read the mode the page started in (set by the script in layout.tsx)
  useEffect(() => setDark(document.documentElement.classList.contains("dark")), [])

  function change(next: boolean) {
    document.documentElement.classList.toggle("dark", next)
    try {
      localStorage.setItem("theme", next ? "dark" : "light")
    } catch {}
    setDark(next)
  }

  return (
    <label className="flex items-center gap-2 font-(family-name:--tx-font-patch) text-sm text-(--tx-muted-foreground)">
      <span className="max-md:sr-only">Denim</span>
      <Switch checked={dark} onCheckedChange={change} aria-label="Quilted night (dark mode)" />
      <span className="max-md:sr-only">Night</span>
    </label>
  )
}
