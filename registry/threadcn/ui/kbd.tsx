import type * as React from "react"
import { cn } from "cn"

/**
 * A keyboard key, as a small cream key cap. Same API as shadcn's Kbd.
 * The look is in styles/kbd.css.
 *
 * @example
 * <KbdGroup><Kbd>⌘</Kbd><Kbd>K</Kbd></KbdGroup>
 */
function Kbd({ className, ...props }: React.ComponentProps<"kbd">) {
  return (
    <kbd
      data-slot="kbd"
      className={cn(
        "tx-kbd pointer-events-none inline-flex h-[22px] min-w-[22px] items-center justify-center gap-1 rounded-md px-1.5 text-xs font-semibold select-none [&_svg:not([class*='size-'])]:size-3",
        className,
      )}
      {...props}
    />
  )
}

function KbdGroup({ className, ...props }: React.ComponentProps<"kbd">) {
  return <kbd data-slot="kbd-group" className={cn("inline-flex items-center gap-1", className)} {...props} />
}

export { Kbd, KbdGroup }
