"use client"

import { useState } from "react"

import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/registry/threadcn/ui/context-menu"

export default function ContextMenuCheckboxesRadios() {
  const [wash, setWash] = useState("cold")

  return (
    <ContextMenu>
      <ContextMenuTrigger className="grid h-32 w-full max-w-sm place-items-center rounded-xl border-2 border-dashed border-(--tx-thread) p-4 text-center text-sm">
        <span>
          <strong className="block">Wash settings: {wash}</strong>
          Right-click here, or long-press on a touch screen
        </span>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuGroup>
          <ContextMenuLabel>Care</ContextMenuLabel>
          <ContextMenuCheckboxItem defaultChecked>Inside out</ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem>Hang to dry</ContextMenuCheckboxItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuRadioGroup value={wash} onValueChange={setWash}>
          <ContextMenuLabel>Water</ContextMenuLabel>
          <ContextMenuRadioItem value="cold">Cold</ContextMenuRadioItem>
          <ContextMenuRadioItem value="warm">Warm</ContextMenuRadioItem>
          <ContextMenuRadioItem value="hand wash">Hand wash</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}
