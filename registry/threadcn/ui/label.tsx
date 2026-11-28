import type * as React from "react"
import { cn } from "cn"

/**
 * A field label. Same API as shadcn's Label. It has no textile look of its
 * own, so it needs no CSS file. It takes the text color of whatever it sits
 * on (light on denim, dark on a cream panel).
 *
 * It fades by itself next to a disabled field: right before it, right after
 * it, or inside a group marked data-disabled="true". Wrapped around a disabled
 * checkbox, radio or switch, only its text fades, so the control (which fades
 * on its own) isn't faded twice.
 *
 * @example
 * <Label htmlFor="email">Email</Label>
 */
function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      data-slot="label"
      className={cn(
        "tx-label flex items-center gap-2 text-[13px] font-semibold tracking-[.02em] select-none",
        "group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50",
        "peer-disabled:cursor-not-allowed peer-disabled:opacity-50 peer-data-disabled:cursor-not-allowed peer-data-disabled:opacity-50",
        "[&:has(+:disabled,+[data-disabled])]:opacity-50",
        "[&:has(:disabled,[data-disabled])]:cursor-not-allowed [&:has(:disabled,[data-disabled])]:text-current/50",
        className,
      )}
      {...props}
    />
  )
}

export { Label }
