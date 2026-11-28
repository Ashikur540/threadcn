import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/registry/threadcn/ui/hover-card"

const link = "font-semibold underline decoration-dashed underline-offset-4"

export default function HoverCardDelays() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm">
      <HoverCard>
        <HoverCardTrigger href="#" className={link}>
          Default wait
        </HoverCardTrigger>
        <HoverCardContent>Opened after 600ms. Closes 300ms after the mouse leaves.</HoverCardContent>
      </HoverCard>
      <HoverCard>
        <HoverCardTrigger href="#" delay={150} closeDelay={100} className={link}>
          Quick
        </HoverCardTrigger>
        <HoverCardContent>Opened after 150ms. Closes 100ms after the mouse leaves.</HoverCardContent>
      </HoverCard>
    </div>
  )
}
