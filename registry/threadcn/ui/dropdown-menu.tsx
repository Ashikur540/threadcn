"use client"

import type * as React from "react"
import { Menu as DropdownMenuPrimitive } from "@base-ui/react/menu"
import { cn } from "cn"

import { Stitch } from "@/registry/threadcn/ui/stitch"

// Same parts and API as shadcn's Base UI Menu (DropdownMenu). Base UI handles the
// keyboard, typeahead, submenus and screen-reader roles. The look is the shared
// pocket (styles/pocket.css): a cream label marks the highlighted item, a
// thread tick a checked item, and a dot the picked radio item.

type WithClassName<T> = Omit<T, "className"> & { className?: string }

const item =
  "tx-pocket-item relative flex cursor-default items-center gap-2 rounded-lg px-2.5 py-2 text-sm leading-5 outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 data-[inset=true]:pl-8 [&_svg:not([data-slot=stitch])]:pointer-events-none [&_svg:not([data-slot=stitch])]:shrink-0 [&_svg:not([data-slot=stitch]):not([class*='size-'])]:size-4"

function DropdownMenu({ ...props }: DropdownMenuPrimitive.Root.Props) {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />
}

function DropdownMenuPortal({ ...props }: DropdownMenuPrimitive.Portal.Props) {
  return <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
}

function DropdownMenuTrigger({ ...props }: DropdownMenuPrimitive.Trigger.Props) {
  return <DropdownMenuPrimitive.Trigger data-slot="dropdown-menu-trigger" {...props} />
}

/** The open menu: a stitched denim pocket. */
function DropdownMenuContent({
  align = "start",
  alignOffset = 0,
  side = "bottom",
  sideOffset = 6,
  className,
  children,
  ...props
}: WithClassName<DropdownMenuPrimitive.Popup.Props> & Pick<DropdownMenuPrimitive.Positioner.Props, "align" | "alignOffset" | "side" | "sideOffset">) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Positioner className="isolate z-50 outline-none" align={align} alignOffset={alignOffset} side={side} sideOffset={sideOffset}>
        <DropdownMenuPrimitive.Popup
          data-slot="dropdown-menu-content"
          className={cn(
            "tx-pocket relative z-50 max-h-(--available-height) min-w-44 origin-(--transform-origin) overflow-x-hidden overflow-y-auto p-1.5",
            className,
          )}
          {...props}
        >
          <Stitch />
          {children}
        </DropdownMenuPrimitive.Popup>
      </DropdownMenuPrimitive.Positioner>
    </DropdownMenuPrimitive.Portal>
  )
}

function DropdownMenuGroup({ ...props }: DropdownMenuPrimitive.Group.Props) {
  return <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />
}

/** A small heading for a group. Place it inside a DropdownMenuGroup (Base UI requires it). */
function DropdownMenuLabel({ className, inset, ...props }: WithClassName<DropdownMenuPrimitive.GroupLabel.Props> & { inset?: boolean }) {
  return (
    <DropdownMenuPrimitive.GroupLabel
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn("tx-pocket-label px-2.5 pt-2 pb-1 text-xs font-semibold tracking-[.04em] uppercase data-[inset=true]:pl-8", className)}
      {...props}
    />
  )
}

/** One action. `variant="destructive"` turns it rust, for actions you can't undo. */
function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  children,
  ...props
}: WithClassName<DropdownMenuPrimitive.Item.Props> & { inset?: boolean; variant?: "default" | "destructive" }) {
  return (
    <DropdownMenuPrimitive.Item data-slot="dropdown-menu-item" data-inset={inset} data-variant={variant} className={cn(item, className)} {...props}>
      <Stitch />
      {children}
    </DropdownMenuPrimitive.Item>
  )
}

function DropdownMenuSub({ ...props }: DropdownMenuPrimitive.SubmenuRoot.Props) {
  return <DropdownMenuPrimitive.SubmenuRoot data-slot="dropdown-menu-sub" {...props} />
}

function DropdownMenuSubTrigger({ className, inset, children, ...props }: WithClassName<DropdownMenuPrimitive.SubmenuTrigger.Props> & { inset?: boolean }) {
  return (
    <DropdownMenuPrimitive.SubmenuTrigger data-slot="dropdown-menu-sub-trigger" data-inset={inset} className={cn(item, className)} {...props}>
      <Stitch />
      {children}
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="ml-auto rtl:rotate-180">
        <path d="m9 6 6 6-6 6" />
      </svg>
    </DropdownMenuPrimitive.SubmenuTrigger>
  )
}

function DropdownMenuSubContent({ align = "start", alignOffset = -6, side = "right", sideOffset = 2, className, ...props }: React.ComponentProps<typeof DropdownMenuContent>) {
  return (
    <DropdownMenuContent
      data-slot="dropdown-menu-sub-content"
      className={cn("w-auto", className)}
      align={align}
      alignOffset={alignOffset}
      side={side}
      sideOffset={sideOffset}
      {...props}
    />
  )
}

/** An item that toggles on and off. A thread tick shows when it's on. */
function DropdownMenuCheckboxItem({ className, children, checked, inset, ...props }: WithClassName<DropdownMenuPrimitive.CheckboxItem.Props> & { inset?: boolean }) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      data-inset={inset}
      className={cn(item, "pl-8", className)}
      checked={checked}
      {...props}
    >
      <Stitch />
      <DropdownMenuPrimitive.CheckboxItemIndicator data-slot="dropdown-menu-checkbox-item-indicator" className="tx-pocket-tick pointer-events-none absolute">
        {null}
      </DropdownMenuPrimitive.CheckboxItemIndicator>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  )
}

function DropdownMenuRadioGroup({ ...props }: DropdownMenuPrimitive.RadioGroup.Props) {
  return <DropdownMenuPrimitive.RadioGroup data-slot="dropdown-menu-radio-group" {...props} />
}

/** One choice in a radio group. A dot shows on the picked one. */
function DropdownMenuRadioItem({ className, children, inset, ...props }: WithClassName<DropdownMenuPrimitive.RadioItem.Props> & { inset?: boolean }) {
  return (
    <DropdownMenuPrimitive.RadioItem data-slot="dropdown-menu-radio-item" data-inset={inset} className={cn(item, "pl-8", className)} {...props}>
      <Stitch />
      <DropdownMenuPrimitive.RadioItemIndicator data-slot="dropdown-menu-radio-item-indicator" className="tx-pocket-dot pointer-events-none absolute">
        {null}
      </DropdownMenuPrimitive.RadioItemIndicator>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  )
}

function DropdownMenuSeparator({ className, ...props }: WithClassName<DropdownMenuPrimitive.Separator.Props>) {
  return <DropdownMenuPrimitive.Separator data-slot="dropdown-menu-separator" className={cn("tx-pocket-separator -mx-0.5 my-1.5 h-px", className)} {...props} />
}

/** A keyboard shortcut hint at the end of an item. */
function DropdownMenuShortcut({ className, ...props }: React.ComponentProps<"span">) {
  return <span data-slot="dropdown-menu-shortcut" className={cn("tx-pocket-shortcut ml-auto pl-4 text-xs tracking-widest", className)} {...props} />
}

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
}
