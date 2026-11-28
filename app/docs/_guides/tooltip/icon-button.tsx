import { Button } from "@/registry/threadcn/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/registry/threadcn/ui/tooltip"

function Droplet() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7Z" />
    </svg>
  )
}

export default function TooltipIconButton() {
  return (
    <Tooltip>
      <TooltipTrigger render={<Button variant="secondary" size="icon" aria-label="Wash settings" />}>
        <Droplet />
      </TooltipTrigger>
      <TooltipContent>Wash settings</TooltipContent>
    </Tooltip>
  )
}
