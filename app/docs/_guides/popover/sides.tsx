import { Button } from "@/registry/threadcn/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/registry/threadcn/ui/popover"

const sides = ["top", "right", "bottom", "left"] as const

export default function PopoverSides() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {sides.map((side) => (
        <Popover key={side}>
          <PopoverTrigger render={<Button variant="outline" size="sm" />}>{side}</PopoverTrigger>
          <PopoverContent side={side} className="w-56">
            Opens on the {side}. If there is no room there, it moves to a side that fits.
          </PopoverContent>
        </Popover>
      ))}
    </div>
  )
}
