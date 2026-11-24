import type * as React from "react"
import { cn } from "cn"

/**
 * A placeholder while content loads: a piece of fabric basted in place,
 * gently pulsing. Same API as shadcn's Skeleton. It takes its tint from the
 * text color around it, so it shows on denim, on cards and on cream.
 * The pulse only runs when the user allows motion.
 *
 * @example
 * <Skeleton className="h-4 w-40" />
 */
function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="skeleton" className={cn("tx-skeleton rounded-[10px] motion-safe:animate-pulse", className)} {...props} />
}

export { Skeleton }
