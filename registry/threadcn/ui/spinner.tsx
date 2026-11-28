import type * as React from "react"
import { cn } from "cn"

/**
 * A ring of stitches that turns while something loads. Same API as shadcn's
 * Spinner. It uses the text color around it. The turning only runs when the
 * user allows motion; otherwise the ring stays still.
 *
 * @example
 * <Button disabled><Spinner aria-hidden="true" /> Saving</Button>
 *
 * Next to words, add aria-hidden so screen readers don't hear "Loading" on top of them.
 */
function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      data-slot="spinner"
      role="status"
      aria-label="Loading"
      viewBox="0 0 24 24"
      fill="none"
      className={cn("tx-spinner size-4 shrink-0 motion-safe:animate-spin", className)}
      {...props}
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

export { Spinner }
