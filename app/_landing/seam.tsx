"use client"

import { useState } from "react"

import { Badge } from "@/registry/threadcn/ui/badge"
import { Button } from "@/registry/threadcn/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/registry/threadcn/ui/card"
import { Label } from "@/registry/threadcn/ui/label"
import { Patch } from "@/registry/threadcn/ui/patch"
import { Switch } from "@/registry/threadcn/ui/switch"

function OrderCard({ id }: { id: string }) {
  return (
    <Card className="w-full max-w-sm text-center">
      <CardHeader className="justify-items-center">
        <CardTitle>Model 08 Straight</CardTitle>
        <CardDescription>Order #2041 · ships in 2 days</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex flex-wrap justify-center gap-2">
          <Badge>Raw denim</Badge>
          <Badge variant="secondary">W32 · L34</Badge>
        </div>
        <Label className="justify-center">
          <Switch id={`${id}-gift`} defaultChecked /> Gift wrap
        </Label>
      </CardContent>
      <CardFooter>
        <Button className="flex-1">Add to bag</Button>
        <Button variant="secondary" className="flex-1">Save</Button>
      </CardFooter>
    </Card>
  )
}

/**
 * The same card twice, once in each fabric, cut by a seam you can drag.
 * A real range input covers the whole frame, so dragging anywhere (or the
 * arrow keys) moves the seam. The cards under it are inert: here they are a
 * picture to compare, and the quilt above is where you try them.
 */
export function Seam() {
  const [cut, setCut] = useState(50)
  const half = "absolute inset-0 grid place-items-center p-6"

  return (
    <div className="relative h-[34rem] overflow-hidden rounded-2xl shadow-[0_18px_40px_rgb(0_0_0/.35)]" style={{ "--cut": `${cut}%` } as React.CSSProperties}>
      <div data-fabric="denim" inert className={`tx-fabric ${half}`}>
        <OrderCard id="denim" />
      </div>
      <div data-fabric="night" inert className={`tx-fabric ${half} [clip-path:inset(0_0_0_var(--cut))]`}>
        <OrderCard id="night" />
      </div>

      <input
        type="range"
        min={5}
        max={95}
        value={cut}
        onChange={(e) => setCut(Number(e.target.value))}
        aria-label="Move the seam between Denim and Quilted night"
        className="peer absolute inset-0 z-20 size-full cursor-ew-resize opacity-0"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-(--cut) z-10 w-2.5 -translate-x-1/2 bg-[#1a2b45]">
        <span className="absolute inset-y-0 -left-2 border-l-2 border-dashed border-[#f7b866]" />
        <span className="absolute inset-y-0 -right-2 border-l-2 border-dashed border-[#9aa3bd]" />
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute top-1/2 left-(--cut) z-10 grid size-14 -translate-1/2 place-items-center rounded-full bg-[#e1a73e] text-[#3a2a1a] shadow-[0_4px_0_#a8741f,0_8px_14px_rgb(0_0_0/.35)] outline-offset-4 outline-(--tx-ring) peer-focus-visible:outline-3">
        <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="m8 7-5 5 5 5M16 7l5 5-5 5" />
        </svg>
      </div>


      <Patch aria-hidden="true" className="pointer-events-none absolute bottom-4 left-4 z-10">Denim<span className="max-sm:hidden"> · light</span></Patch>
      <Patch aria-hidden="true" className="pointer-events-none absolute right-4 bottom-4 z-10">Quilted night<span className="max-sm:hidden"> · dark</span></Patch>
    </div>
  )
}
