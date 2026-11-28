"use client"

import * as React from "react"

import { Button } from "@/registry/threadcn/ui/button"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/registry/threadcn/ui/drawer"

const repairs = [
  ["Knee patch", "Free"],
  ["Crotch reinforcement", "Free"],
  ["New button", "Free"],
  ["Pocket bag swap", "Free"],
  ["Belt loop fix", "Free"],
  ["Chain-stitch hem", "$15"],
  ["Taper the leg", "$30"],
  ["Leather patch swap", "$20"],
]

export default function DrawerSnapPoints() {
  // 0.5 = half the screen tall, 1 = as tall as the drawer gets.
  const [snapPoint, setSnapPoint] = React.useState<number | string | null>(0.5)
  const full = snapPoint === 1

  return (
    <Drawer showSwipeHandle snapPoints={[0.5, 1]} snapPoint={snapPoint} onSnapPointChange={setSnapPoint}>
      <DrawerTrigger render={<Button />}>Repair menu</DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto flex min-h-0 w-full max-w-md flex-1 flex-col">
          <DrawerHeader>
            <DrawerTitle>Repair menu</DrawerTitle>
            <DrawerDescription>Pull the drawer up to see every repair, or use the button.</DrawerDescription>
            <Button variant="outline" size="sm" className="mx-auto mt-2" onClick={() => setSnapPoint(full ? 0.5 : 1)}>
              {full ? "Show less" : "See all repairs"}
            </Button>
          </DrawerHeader>
          <ul className="grid min-h-0 flex-1 content-start gap-2 overflow-y-auto px-6 text-sm">
            {repairs.map(([name, price]) => (
              <li key={name} className="flex justify-between gap-4 border-b border-dashed border-current/25 py-2">
                <span>{name}</span>
                <span className="font-bold">{price}</span>
              </li>
            ))}
          </ul>
          <DrawerFooter>
            <DrawerClose render={<Button />}>Book a repair</DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
