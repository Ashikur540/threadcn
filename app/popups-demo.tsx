"use client"

import { Button } from "@/registry/threadcn/ui/button"
import { Label } from "@/registry/threadcn/ui/label"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue } from "@/registry/threadcn/ui/select"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/registry/threadcn/ui/tooltip"

const delivery = [
  { label: "Standard, 5 to 7 days", value: "standard" },
  { label: "Express", value: "express" },
  { label: "Pickup in store", value: "pickup" },
  { label: "Bicycle courier", value: "courier" },
]

const countries = ["Australia", "Bangladesh", "Belgium", "Brazil", "Canada", "Denmark", "Egypt", "Finland", "France", "Germany", "India", "Ireland", "Italy", "Japan", "Kenya", "Mexico", "Nepal", "Norway", "Portugal", "Spain", "Sweden"]

export function PopupsDemo() {
  return (
    <TooltipProvider>
      <div className="flex flex-wrap items-end gap-8">
        <div className="grid w-64 gap-1.5">
          <Label htmlFor="delivery">Delivery</Label>
          <Select items={delivery} defaultValue="express">
            <SelectTrigger id="delivery" className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>To your door</SelectLabel>
                <SelectItem value="standard">Standard, 5 to 7 days</SelectItem>
                <SelectItem value="express">Express</SelectItem>
                <SelectItem value="courier">Bicycle courier</SelectItem>
              </SelectGroup>
              <SelectSeparator />
              <SelectItem value="pickup">Pickup in store</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Select items={delivery}>
          <SelectTrigger size="sm" aria-label="Delivery (small)">
            <SelectValue placeholder="Choose delivery" />
          </SelectTrigger>
          <SelectContent>
            {delivery.map((d) => (
              <SelectItem key={d.value} value={d.value}>
                {d.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select items={countries.map((c) => ({ label: c, value: c }))}>
          <SelectTrigger aria-label="Country" className="w-56">
            <SelectValue placeholder="Ship to country" />
          </SelectTrigger>
          <SelectContent className="max-h-72">
            {countries.map((c) => (
              <SelectItem key={c} value={c}>
                {c}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Tooltip>
          <TooltipTrigger render={<Button variant="secondary" />}>Care tips</TooltipTrigger>
          <TooltipContent>Wash inside out, cold. Hang to dry.</TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  )
}
