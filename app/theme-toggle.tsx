"use client"

import { useEffect, useState } from "react"

import { Button } from "@/registry/threadcn/ui/button"

export function ThemeToggle() {
  const [dark, setDark] = useState(false)

  // read the mode the page started in (set by the script in layout.tsx)
  useEffect(() => setDark(document.documentElement.classList.contains("dark")), [])

  function toggle() {
    const next = !dark
    document.documentElement.classList.toggle("dark", next)
    try {
      localStorage.setItem("theme", next ? "dark" : "light")
    } catch {}
    setDark(next)
  }

  return (
    <Button variant="outline" size="sm" aria-pressed={dark} onClick={toggle}>
      {dark ? "Quilted night (dark)" : "Denim (light)"}
    </Button>
  )
}
