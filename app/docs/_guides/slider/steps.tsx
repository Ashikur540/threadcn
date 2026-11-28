"use client"

import { useState } from "react"

import { Slider } from "@/registry/threadcn/ui/slider"

export default function SliderSteps() {
  const [temperature, setTemperature] = useState(30)

  return (
    <div className="grid w-full max-w-xs gap-3">
      <div className="flex justify-between text-sm font-semibold">
        <span>Wash temperature</span>
        <span>{temperature}°C</span>
      </div>
      <Slider
        value={temperature}
        onValueChange={(value) => setTemperature(value as number)}
        min={20}
        max={60}
        step={10}
        aria-label="Wash temperature"
      />
      <div className="flex justify-between text-xs opacity-80" aria-hidden="true">
        <span>Cold</span>
        <span>Hot</span>
      </div>
    </div>
  )
}
