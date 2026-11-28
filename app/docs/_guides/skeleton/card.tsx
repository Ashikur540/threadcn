import { Card } from "@/registry/threadcn/ui/card"
import { Skeleton } from "@/registry/threadcn/ui/skeleton"

export default function SkeletonCard() {
  return (
    <Card className="w-full max-w-sm">
      <span className="sr-only">Loading review</span>
      <div className="flex items-center gap-3">
        <Skeleton className="size-11 shrink-0 rounded-full" />
        <div className="grid flex-1 gap-2">
          <Skeleton className="h-4 w-2/5" />
          <Skeleton className="h-3 w-1/4" />
        </div>
      </div>
      <div className="grid gap-2">
        <Skeleton className="h-3.5 w-full" />
        <Skeleton className="h-3.5 w-full" />
        <Skeleton className="h-3.5 w-3/5" />
      </div>
    </Card>
  )
}
