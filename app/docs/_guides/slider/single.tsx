"use client"

import { useState } from "react"

import { Slider } from "@/registry/threadcn/ui/slider"

export default function SliderSingle() {
  const [rise, setRise] = useState(10)

  return (
    <div className="grid w-full max-w-xs gap-3">
      <div className="flex justify-between text-sm font-semibold">
        <span>Front rise</span>
        <span>{rise} in</span>
      </div>
      <Slider value={rise} onValueChange={(value) => setRise(value as number)} min={8} max={13} step={0.5} aria-label="Front rise" />
    </div>
  )
}
