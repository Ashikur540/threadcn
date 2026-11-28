import { Skeleton } from "@/registry/threadcn/ui/skeleton"

export default function SkeletonList() {
  return (
    <div className="grid w-full max-w-md gap-5">
      <span className="sr-only">Loading your orders</span>
      {[0, 1, 2].map((row) => (
        <div key={row} className="flex items-center gap-4">
          <Skeleton className="size-12 shrink-0" />
          <div className="grid flex-1 gap-2">
            <Skeleton className="h-4 w-3/5" />
            <Skeleton className="h-3 w-2/5" />
          </div>
          <Skeleton className="h-4 w-12 shrink-0" />
        </div>
      ))}
    </div>
  )
}
