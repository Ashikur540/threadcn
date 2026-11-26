"use client"

import type * as React from "react"
import { Dialog as SheetPrimitive } from "@base-ui/react/dialog"
import { cn } from "cn"

import { Button } from "@/registry/threadcn/ui/button"
import { Stitch } from "@/registry/threadcn/ui/stitch"

// Same parts and API as shadcn's Base UI Sheet: a dialog that slides in from
// a side. It wears the shared modal look (styles/modal.css); the slide is in
// styles/sheet.css. Differs from shadcn: it floats 12px off the screen edge,
// so its stitched corners stay round.

type WithClassName<T> = Omit<T, "className"> & { className?: string }

function Sheet({ ...props }: SheetPrimitive.Root.Props) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />
}

function SheetTrigger({ ...props }: SheetPrimitive.Trigger.Props) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />
}

function SheetClose({ ...props }: SheetPrimitive.Close.Props) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />
}

function SheetPortal({ ...props }: SheetPrimitive.Portal.Props) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />
}

function SheetOverlay({ className, ...props }: WithClassName<SheetPrimitive.Backdrop.Props>) {
  return <SheetPrimitive.Backdrop data-slot="sheet-overlay" className={cn("tx-modal-overlay fixed inset-0 z-50", className)} {...props} />
}

/**
 * The sliding panel. `side` picks the edge it comes from (default "right").
 *
 * @example
 * <Sheet>
 *   <SheetTrigger render={<Button variant="outline" />}>Filters</SheetTrigger>
 *   <SheetContent side="left">
 *     <SheetHeader><SheetTitle>Filters</SheetTitle></SheetHeader>
 *   </SheetContent>
 * </Sheet>
 */
function SheetContent({
  className,
  children,
  side = "right",
  showCloseButton = true,
  ...props
}: WithClassName<SheetPrimitive.Popup.Props> & {
  side?: "top" | "right" | "bottom" | "left"
  /** Show the close X in the top corner. Default: true. */
  showCloseButton?: boolean
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Popup
        data-slot="sheet-content"
        data-side={side}
        className={cn(
          "tx-modal tx-sheet fixed z-50 flex flex-col gap-4 overflow-y-auto p-6",
          "data-[side=left]:inset-y-3 data-[side=left]:left-3 data-[side=left]:w-[calc(100%-1.5rem)] data-[side=left]:sm:max-w-sm",
          "data-[side=right]:inset-y-3 data-[side=right]:right-3 data-[side=right]:w-[calc(100%-1.5rem)] data-[side=right]:sm:max-w-sm",
          "data-[side=top]:inset-x-3 data-[side=top]:top-3 data-[side=top]:max-h-[85dvh]",
          "data-[side=bottom]:inset-x-3 data-[side=bottom]:bottom-3 data-[side=bottom]:max-h-[85dvh]",
          className,
        )}
        {...props}
      >
        <Stitch />
        {children}
        {showCloseButton && (
          <SheetPrimitive.Close data-slot="sheet-close" render={<Button variant="ghost" size="icon-sm" shape="round" className="absolute top-3 right-3" />}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
            <span className="sr-only">Close</span>
          </SheetPrimitive.Close>
        )}
      </SheetPrimitive.Popup>
    </SheetPortal>
  )
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="sheet-header" className={cn("flex flex-col gap-1 pr-8", className)} {...props} />
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="sheet-footer" className={cn("mt-auto flex flex-col gap-2.5", className)} {...props} />
}

function SheetTitle({ className, ...props }: WithClassName<SheetPrimitive.Title.Props>) {
  return <SheetPrimitive.Title data-slot="sheet-title" className={cn("tx-modal-title text-[21px] leading-tight font-bold", className)} {...props} />
}

function SheetDescription({ className, ...props }: WithClassName<SheetPrimitive.Description.Props>) {
  return <SheetPrimitive.Description data-slot="sheet-description" className={cn("tx-modal-description text-sm", className)} {...props} />
}

export { Sheet, SheetTrigger, SheetClose, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription }
