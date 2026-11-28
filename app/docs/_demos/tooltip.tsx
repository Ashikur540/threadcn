import { Button } from "@/registry/threadcn/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/registry/threadcn/ui/tooltip"

export default function TooltipDemo() {
  return (
    <Tooltip>
      <TooltipTrigger render={<Button variant="secondary" />}>Care tips</TooltipTrigger>
      <TooltipContent>Wash inside out, cold. Hang to dry.</TooltipContent>
    </Tooltip>
  )
}
