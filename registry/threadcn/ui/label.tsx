import type * as React from "react"
import { cn } from "cn"

/**
 * A field label. Same API as shadcn's Label. It has no textile look of its
 * own, so it needs no CSS file. It takes the text color of whatever it sits
 * on (light on denim, dark on a cream panel).
 *
 * @example
 * <Label htmlFor="email">Email</Label>
 */
function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      data-slot="label"
      className={cn(
        "tx-label flex items-center gap-2 text-[13px] font-semibold tracking-[.02em] select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className,
      )}
      {...props}
    />
  )
}

export { Label }
