"use client"

import { useState } from "react"

import { Slider } from "@/registry/threadcn/ui/slider"

export default function SliderRange() {
  const [price, setPrice] = useState([40, 140])

  return (
    <div className="grid w-full max-w-xs gap-3">
      <div className="flex justify-between text-sm font-semibold">
        <span>Price</span>
        <span>
          ${price[0]} to ${price[1]}
        </span>
      </div>
      <Slider
        value={price}
        onValueChange={(value) => setPrice(value as number[])}
        max={200}
        step={5}
        format={{ style: "currency", currency: "USD", maximumFractionDigits: 0 }}
        aria-label="Price"
      />
    </div>
  )
}
