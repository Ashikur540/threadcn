"use client"

import type * as React from "react"
import { Select as SelectPrimitive } from "@base-ui/react/select"
import { cn } from "cn"

import { Stitch } from "@/registry/threadcn/ui/stitch"

// Same parts and API as shadcn's Base UI Select. Base UI handles the keyboard,
// typeahead and screen-reader roles. The trigger wears the shared field look
// (styles/field.css); the list is in styles/select.css.

type WithClassName<T> = Omit<T, "className"> & { className?: string }

const Select = SelectPrimitive.Root

function SelectGroup({ className, ...props }: WithClassName<SelectPrimitive.Group.Props>) {
  return <SelectPrimitive.Group data-slot="select-group" className={cn("tx-select-group", className)} {...props} />
}

function SelectValue({ className, ...props }: WithClassName<SelectPrimitive.Value.Props>) {
  return <SelectPrimitive.Value data-slot="select-value" className={cn("tx-select-value truncate", className)} {...props} />
}

/** The closed field. Looks like an Input, with a chevron that flips when open. */
function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}: WithClassName<SelectPrimitive.Trigger.Props> & {
  size?: "sm" | "default"
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        "tx-field tx-select-trigger flex w-fit min-w-0 cursor-pointer items-center justify-between gap-2.5 text-left whitespace-nowrap data-[size=default]:min-h-11 data-[size=default]:px-3.5 data-[size=default]:py-2.5 data-[size=default]:text-[15px] data-[size=sm]:min-h-9 data-[size=sm]:px-3 data-[size=sm]:py-1.5 data-[size=sm]:text-sm",
        className,
      )}
      {...props}
    >
      {children}
      {/* Empty on purpose: the chevron is drawn in CSS, and Base UI would add a "▼". */}
      <SelectPrimitive.Icon data-slot="select-icon" className="tx-select-icon size-2 shrink-0">
        {null}
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

/**
 * The open list: a stitched denim pocket.
 *
 * Differs from shadcn: `alignItemWithTrigger` defaults to false, so the list
 * opens below the trigger instead of covering it.
 */
function SelectContent({
  className,
  children,
  side = "bottom",
  sideOffset = 6,
  align = "center",
  alignOffset = 0,
  alignItemWithTrigger = false,
  ...props
}: WithClassName<SelectPrimitive.Popup.Props> &
  Pick<SelectPrimitive.Positioner.Props, "align" | "alignOffset" | "side" | "sideOffset" | "alignItemWithTrigger">) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        alignItemWithTrigger={alignItemWithTrigger}
        className="isolate z-50"
      >
        {/* The popup doesn't scroll, the list inside it does, so the stitch stays put. */}
        <SelectPrimitive.Popup
          data-slot="select-content"
          className={cn(
            "tx-select-content relative flex max-h-(--available-height) w-(--anchor-width) min-w-40 origin-(--transform-origin) flex-col overflow-hidden p-2.5",
            className,
          )}
          {...props}
        >
          <Stitch />
          <SelectScrollUpButton />
          <SelectPrimitive.List className="min-h-0 overflow-y-auto">{children}</SelectPrimitive.List>
          <SelectScrollDownButton />
        </SelectPrimitive.Popup>
      </SelectPrimitive.Positioner>
    </SelectPrimitive.Portal>
  )
}

function SelectLabel({ className, ...props }: WithClassName<SelectPrimitive.GroupLabel.Props>) {
  return (
    <SelectPrimitive.GroupLabel
      data-slot="select-label"
      className={cn("tx-select-label px-2.5 pt-2 pb-1 text-xs font-semibold tracking-[.04em] uppercase", className)}
      {...props}
    />
  )
}

/** One option. The picked one gets a cross-stitch mark on the left. */
function SelectItem({ className, children, ...props }: WithClassName<SelectPrimitive.Item.Props>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "tx-select-item relative flex w-full cursor-default items-center rounded-lg py-2 pr-2.5 pl-8 text-sm leading-[1.35] outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <Stitch />
      {/* Empty on purpose: the cross-stitch is drawn in CSS, and Base UI would add a "✔️". */}
      <SelectPrimitive.ItemIndicator
        data-slot="select-item-indicator"
        className="tx-select-item-indicator absolute top-1/2 left-[11px] size-[11px] -translate-y-1/2"
      >
        {null}
      </SelectPrimitive.ItemIndicator>
      <SelectPrimitive.ItemText className="tx-select-item-text min-w-0">{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

function SelectSeparator({ className, ...props }: WithClassName<SelectPrimitive.Separator.Props>) {
  return <SelectPrimitive.Separator data-slot="select-separator" className={cn("tx-select-separator mx-2 my-1.5", className)} {...props} />
}

function SelectScrollUpButton({ className, ...props }: WithClassName<React.ComponentProps<typeof SelectPrimitive.ScrollUpArrow>>) {
  return (
    <SelectPrimitive.ScrollUpArrow
      data-slot="select-scroll-up-button"
      className={cn("tx-select-scroll tx-select-scroll-up flex h-6 w-full shrink-0 items-center justify-center", className)}
      {...props}
    />
  )
}

function SelectScrollDownButton({ className, ...props }: WithClassName<React.ComponentProps<typeof SelectPrimitive.ScrollDownArrow>>) {
  return (
    <SelectPrimitive.ScrollDownArrow
      data-slot="select-scroll-down-button"
      className={cn("tx-select-scroll flex h-6 w-full shrink-0 items-center justify-center", className)}
      {...props}
    />
  )
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}
