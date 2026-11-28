"use client"

import { useState } from "react"

import { Button } from "@/registry/threadcn/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/registry/threadcn/ui/dropdown-menu"

const washes = ["Raw", "Rinse", "Stone", "Black"]

export default function DropdownMenuRadios() {
  const [wash, setWash] = useState("Rinse")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>Wash: {wash}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup value={wash} onValueChange={setWash}>
          <DropdownMenuLabel>Wash</DropdownMenuLabel>
          {washes.map((w) => (
            <DropdownMenuRadioItem key={w} value={w}>
              {w}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
