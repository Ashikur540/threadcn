import { Avatar, AvatarFallback } from "@/registry/threadcn/ui/avatar"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/registry/threadcn/ui/hover-card"

export default function HoverCardProfile() {
  return (
    <p className="text-sm">
      Model 08 is sewn by{" "}
      <HoverCard>
        <HoverCardTrigger href="#" className="font-semibold underline decoration-dashed underline-offset-4">
          @indigo.supply
        </HoverCardTrigger>
        <HoverCardContent className="grid gap-3">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarFallback>IS</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-(family-name:--tx-font-heading) text-base font-bold">Indigo Supply</p>
              <p className="text-(--tx-muted-foreground)">@indigo.supply</p>
            </div>
          </div>
          <p>Small-batch selvedge denim from one workshop. Free repairs for the life of your jeans.</p>
          <p className="text-xs text-(--tx-muted-foreground)">Sewing since 2019 · 12 makers</p>
        </HoverCardContent>
      </HoverCard>
    </p>
  )
}
