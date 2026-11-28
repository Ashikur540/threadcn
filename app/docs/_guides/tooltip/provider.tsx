import { Button } from "@/registry/threadcn/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/registry/threadcn/ui/tooltip"

function Icon({ d }: { d: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  )
}

const tools = [
  { label: "Wash cold", d: "M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7Z" },
  { label: "Turn inside out", d: "M3 12a9 9 0 1 0 3-6.7L3 8M3 3v5h5" },
  { label: "Hang to dry", d: "M10 6a2 2 0 1 1 2 2v2l-8.4 6.7a1 1 0 0 0 .6 1.8h15.6a1 1 0 0 0 .6-1.8L12 10" },
  { label: "Do not bleach", d: "M4 4l16 16M20 4 4 20" },
]

export default function TooltipWithProvider() {
  return (
    <TooltipProvider delay={500}>
      <div className="flex items-center justify-center gap-2">
        {tools.map((tool) => (
          <Tooltip key={tool.label}>
            <TooltipTrigger render={<Button variant="ghost" size="icon" aria-label={tool.label} />}>
              <Icon d={tool.d} />
            </TooltipTrigger>
            <TooltipContent>{tool.label}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  )
}
