import type * as React from "react"
import { cn } from "cn"

/**
 * The stitch line drawn inside a part's edge.
 * It is decoration only, so screen readers skip it. Its color, distance from
 * the edge, corner radius and width come from the parent's CSS
 * (--_stitch, --_inset, --_radius, --_thread).
 */
function Stitch({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg data-slot="stitch" aria-hidden="true" focusable="false" className={cn("tx-stitch", className)} {...props}>
      <rect />
    </svg>
  )
}

export { Stitch }
