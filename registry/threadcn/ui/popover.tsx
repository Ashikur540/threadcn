"use client"

import type * as React from "react"
import { Popover as PopoverPrimitive } from "@base-ui/react/popover"
import { cn } from "cn"

import { Stitch } from "@/registry/threadcn/ui/stitch"

// Same parts and API as shadcn's Base UI Popover. Base UI handles opening,
// focus and screen-reader wiring. The look is the shared pocket (styles/pocket.css).

type WithClassName<T> = Omit<T, "className"> & { className?: string }

function Popover({ ...props }: PopoverPrimitive.Root.Props) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />
}

function PopoverTrigger({ ...props }: PopoverPrimitive.Trigger.Props) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />
}

/**
 * A small stitched pocket that opens next to its trigger.
 *
 * @example
 * <Popover>
 *   <PopoverTrigger render={<Button variant="outline" />}>Size help</PopoverTrigger>
 *   <PopoverContent>Measure a pair you love, flat, across the waist.</PopoverContent>
 * </Popover>
 */
function PopoverContent({
  className,
  children,
  align = "center",
  alignOffset = 0,
  side = "bottom",
  sideOffset = 6,
  ...props
}: WithClassName<PopoverPrimitive.Popup.Props> & Pick<PopoverPrimitive.Positioner.Props, "align" | "alignOffset" | "side" | "sideOffset">) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Positioner align={align} alignOffset={alignOffset} side={side} sideOffset={sideOffset} className="isolate z-50">
        <PopoverPrimitive.Popup
          data-slot="popover-content"
          className={cn("tx-pocket relative z-50 grid w-72 origin-(--transform-origin) gap-2.5 p-[18px] text-sm", className)}
          {...props}
        >
          <Stitch />
          {children}
        </PopoverPrimitive.Popup>
      </PopoverPrimitive.Positioner>
    </PopoverPrimitive.Portal>
  )
}

function PopoverHeader({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="popover-header" className={cn("flex flex-col gap-1", className)} {...props} />
}

function PopoverTitle({ className, ...props }: WithClassName<PopoverPrimitive.Title.Props>) {
  return <PopoverPrimitive.Title data-slot="popover-title" className={cn("font-(family-name:--tx-font-heading) text-base font-bold", className)} {...props} />
}

function PopoverDescription({ className, ...props }: WithClassName<PopoverPrimitive.Description.Props>) {
  return <PopoverPrimitive.Description data-slot="popover-description" className={cn("text-(--tx-muted-foreground)", className)} {...props} />
}

export { Popover, PopoverContent, PopoverDescription, PopoverHeader, PopoverTitle, PopoverTrigger }
