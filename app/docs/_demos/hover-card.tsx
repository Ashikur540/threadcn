import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/registry/threadcn/ui/hover-card"

export default function HoverCardDemo() {
  return (
    <p className="text-sm">
      Made by{" "}
      <HoverCard>
        <HoverCardTrigger href="#" className="font-semibold underline decoration-dashed underline-offset-4">
          @indigo
        </HoverCardTrigger>
        <HoverCardContent>
          <p className="font-(family-name:--tx-font-heading) text-base font-bold">Indigo Supply</p>
          <p className="mt-1 text-(--tx-muted-foreground)">Small-batch selvedge denim since 2019. Free repairs, forever.</p>
        </HoverCardContent>
      </HoverCard>
    </p>
  )
}
