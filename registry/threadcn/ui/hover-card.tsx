"use client"

import { PreviewCard as PreviewCardPrimitive } from "@base-ui/react/preview-card"
import { cn } from "cn"

import { Stitch } from "@/registry/threadcn/ui/stitch"

// Same parts and API as shadcn's Base UI HoverCard (Base UI calls it
// PreviewCard). It opens on hover or focus of a link. The look is the shared
// pocket (styles/pocket.css).

type WithClassName<T> = Omit<T, "className"> & { className?: string }

function HoverCard({ ...props }: PreviewCardPrimitive.Root.Props) {
  return <PreviewCardPrimitive.Root data-slot="hover-card" {...props} />
}

function HoverCardTrigger({ ...props }: PreviewCardPrimitive.Trigger.Props) {
  return <PreviewCardPrimitive.Trigger data-slot="hover-card-trigger" {...props} />
}

/**
 * A stitched pocket that previews a link while you hover it.
 *
 * @example
 * <HoverCard>
 *   <HoverCardTrigger href="/makers/indigo">@indigo</HoverCardTrigger>
 *   <HoverCardContent>Small-batch denim since 2019.</HoverCardContent>
 * </HoverCard>
 */
function HoverCardContent({
  className,
  children,
  side = "bottom",
  sideOffset = 6,
  align = "center",
  alignOffset = 4,
  ...props
}: WithClassName<PreviewCardPrimitive.Popup.Props> & Pick<PreviewCardPrimitive.Positioner.Props, "align" | "alignOffset" | "side" | "sideOffset">) {
  return (
    <PreviewCardPrimitive.Portal data-slot="hover-card-portal">
      <PreviewCardPrimitive.Positioner align={align} alignOffset={alignOffset} side={side} sideOffset={sideOffset} className="isolate z-50">
        <PreviewCardPrimitive.Popup
          data-slot="hover-card-content"
          className={cn("tx-pocket relative z-50 w-64 origin-(--transform-origin) p-[18px] text-sm", className)}
          {...props}
        >
          <Stitch />
          {children}
        </PreviewCardPrimitive.Popup>
      </PreviewCardPrimitive.Positioner>
    </PreviewCardPrimitive.Portal>
  )
}

export { HoverCard, HoverCardTrigger, HoverCardContent }
