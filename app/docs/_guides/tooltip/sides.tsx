import { Button } from "@/registry/threadcn/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/registry/threadcn/ui/tooltip"

const sides = ["top", "right", "bottom", "left"] as const

export default function TooltipSides() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {sides.map((side) => (
        <Tooltip key={side}>
          <TooltipTrigger render={<Button variant="outline" size="sm" />}>{side}</TooltipTrigger>
          <TooltipContent side={side}>Wash cold, on the {side}</TooltipContent>
        </Tooltip>
      ))}
    </div>
  )
}
