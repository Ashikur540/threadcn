"use client"

import { Tooltip as TooltipPrimitive } from "@base-ui/react/tooltip"
import { cn } from "cn"

import { Stitch } from "@/registry/threadcn/ui/stitch"

// Same parts and API as shadcn's Base UI Tooltip. Base UI handles hover,
// focus, delays and screen-reader wiring. The look is in styles/tooltip.css.

/** Wrap your app (or a section) once, so tooltips share one open delay. */
function TooltipProvider({ delay = 0, ...props }: TooltipPrimitive.Provider.Props) {
  return <TooltipPrimitive.Provider data-slot="tooltip-provider" delay={delay} {...props} />
}

function Tooltip({ ...props }: TooltipPrimitive.Root.Props) {
  return <TooltipPrimitive.Root data-slot="tooltip" {...props} />
}

function TooltipTrigger({ ...props }: TooltipPrimitive.Trigger.Props) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />
}

/**
 * A small stitched leather tag with a pointer.
 *
 * @example
 * <Tooltip>
 *   <TooltipTrigger render={<Button size="icon" aria-label="Care" />}>?</TooltipTrigger>
 *   <TooltipContent>Wash inside out, cold</TooltipContent>
 * </Tooltip>
 */
function TooltipContent({
  className,
  side = "top",
  sideOffset = 8,
  align = "center",
  alignOffset = 0,
  children,
  ...props
}: Omit<TooltipPrimitive.Popup.Props, "className"> & { className?: string } & Pick<
    TooltipPrimitive.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset"
  >) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Positioner align={align} alignOffset={alignOffset} side={side} sideOffset={sideOffset} className="isolate z-50">
        <TooltipPrimitive.Popup
          data-slot="tooltip-content"
          className={cn(
            "tx-tooltip relative z-50 w-fit max-w-[220px] origin-(--transform-origin) px-[13px] py-[7px] text-[13px] leading-[1.35]",
            className,
          )}
          {...props}
        >
          <Stitch />
          {children}
          <TooltipPrimitive.Arrow className="tx-tooltip-arrow size-2.5" />
        </TooltipPrimitive.Popup>
      </TooltipPrimitive.Positioner>
    </TooltipPrimitive.Portal>
  )
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
