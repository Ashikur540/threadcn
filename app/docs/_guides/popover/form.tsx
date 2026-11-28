"use client"

import { useState } from "react"

import { Button } from "@/registry/threadcn/ui/button"
import { Input } from "@/registry/threadcn/ui/input"
import { Label } from "@/registry/threadcn/ui/label"
import { Popover, PopoverContent, PopoverDescription, PopoverHeader, PopoverTitle, PopoverTrigger } from "@/registry/threadcn/ui/popover"

export default function PopoverForm() {
  const [waist, setWaist] = useState("32")

  return (
    <Popover>
      <PopoverTrigger render={<Button variant="secondary" />}>Waist {waist}</PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>Set the waist</PopoverTitle>
          <PopoverDescription>Model 08 comes in waist 28 to 40.</PopoverDescription>
        </PopoverHeader>
        <div className="grid gap-1.5">
          <Label htmlFor="popover-form-waist">Waist (inches)</Label>
          <Input id="popover-form-waist" type="number" min={28} max={40} value={waist} onChange={(e) => setWaist(e.target.value)} />
        </div>
      </PopoverContent>
    </Popover>
  )
}
