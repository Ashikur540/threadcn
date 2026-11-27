"use client"

import { useState } from "react"

import { Button } from "@/registry/threadcn/ui/button"

// Each color sets the button's own CSS variables: patch, the edge under it, and the text.
const colors = [
  { name: "Gold", bg: "var(--tx-patch)", edge: "var(--tx-patch-edge)", fg: "var(--tx-patch-foreground)" },
  { name: "Rust", bg: "#c2553a", edge: "#7d3220", fg: "#fff4ea" },
  { name: "Moss", bg: "#5f7f43", edge: "#3a5128", fg: "#f3f7ea" },
  { name: "Plum", bg: "#8a5ea3", edge: "#563a67", fg: "#fbf3ff" },
]

/** Try a patch color on a real Button, the same way you would in your own app. */
export function PatchColor() {
  const [pick, setPick] = useState(colors[0])

  return (
    <div className="flex flex-wrap items-center gap-5">
      <div role="group" aria-label="Patch color" className="flex gap-2.5">
        {colors.map((c) => (
          <button
            key={c.name}
            type="button"
            aria-label={c.name}
            aria-pressed={pick.name === c.name}
            onClick={() => setPick(c)}
            className="size-9 cursor-pointer rounded-full border-2 border-white/70 outline-offset-3 outline-(--tx-ring) focus-visible:outline-3 aria-pressed:ring-3 aria-pressed:ring-white"
            style={{ background: c.bg }}
          />
        ))}
      </div>
      <Button style={{ "--_bg": pick.bg, "--_edge": pick.edge, "--_fg": pick.fg } as React.CSSProperties}>Add to bag</Button>
    </div>
  )
}
