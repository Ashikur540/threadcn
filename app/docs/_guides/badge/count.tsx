import { Badge } from "@/registry/threadcn/ui/badge"

export default function BadgeCount() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6">
      <span className="flex items-center gap-2 font-semibold">
        Bag
        <Badge className="min-w-7 px-2 tabular-nums">
          3<span className="sr-only"> items</span>
        </Badge>
      </span>
      <span className="flex items-center gap-2 font-semibold">
        Repairs
        <Badge variant="secondary" className="min-w-7 px-2 tabular-nums">
          12<span className="sr-only"> open</span>
        </Badge>
      </span>
      <span className="flex items-center gap-2 font-semibold">
        Messages
        <Badge variant="destructive" className="min-w-7 px-2 tabular-nums">
          99+<span className="sr-only"> unread</span>
        </Badge>
      </span>
    </div>
  )
}
