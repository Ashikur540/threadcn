"use client"

import { ScrollArea as ScrollAreaPrimitive } from "@base-ui/react/scroll-area"
import { cn } from "cn"

// Same parts and API as shadcn's Base UI ScrollArea. Base UI keeps native
// scrolling (wheel, touch, keyboard) and draws a custom scrollbar.
// The look is in styles/scroll-area.css.

type WithClassName<T> = Omit<T, "className"> & { className?: string }

/**
 * A box that scrolls with a thin thread-colored scrollbar.
 *
 * @example
 * <ScrollArea className="h-64"><LongCareGuide /></ScrollArea>
 */
function ScrollArea({ className, children, ...props }: WithClassName<ScrollAreaPrimitive.Root.Props>) {
  return (
    <ScrollAreaPrimitive.Root data-slot="scroll-area" className={cn("relative overflow-hidden", className)} {...props}>
      <ScrollAreaPrimitive.Viewport data-slot="scroll-area-viewport" className="tx-scroll-area-viewport size-full rounded-[inherit]">
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  )
}

function ScrollBar({ className, orientation = "vertical", ...props }: WithClassName<ScrollAreaPrimitive.Scrollbar.Props>) {
  return (
    <ScrollAreaPrimitive.Scrollbar
      data-slot="scroll-area-scrollbar"
      data-orientation={orientation}
      orientation={orientation}
      className={cn(
        "tx-scroll-area-scrollbar flex touch-none p-0.5 select-none data-[orientation=horizontal]:h-2.5 data-[orientation=horizontal]:flex-col data-[orientation=vertical]:w-2.5",
        className,
      )}
      {...props}
    >
      <ScrollAreaPrimitive.Thumb data-slot="scroll-area-thumb" className="tx-scroll-area-thumb relative flex-1 rounded-full" />
    </ScrollAreaPrimitive.Scrollbar>
  )
}

export { ScrollArea, ScrollBar }
