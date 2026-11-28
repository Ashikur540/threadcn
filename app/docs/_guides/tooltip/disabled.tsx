import { Button } from "@/registry/threadcn/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/registry/threadcn/ui/tooltip"

export default function TooltipDisabled() {
  return (
    <Tooltip>
      <TooltipTrigger render={<Button disabled focusableWhenDisabled />}>Book a repair</TooltipTrigger>
      <TooltipContent>Repairs are full this week. Try again on Monday.</TooltipContent>
    </Tooltip>
  )
}
