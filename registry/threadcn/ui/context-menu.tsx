"use client"

import type * as React from "react"
import { ContextMenu as ContextMenuPrimitive } from "@base-ui/react/context-menu"
import { cn } from "cn"

import { Stitch } from "@/registry/threadcn/ui/stitch"

// Same parts and API as shadcn's Base UI ContextMenu. Base UI handles the
// keyboard, typeahead, submenus and screen-reader roles. The look is the shared
// pocket (styles/pocket.css): a cream label marks the highlighted item, a
// thread tick a checked item, and a dot the picked radio item.

type WithClassName<T> = Omit<T, "className"> & { className?: string }

const item =
  "tx-pocket-item relative flex cursor-default items-center gap-2 rounded-lg px-2.5 py-2 text-sm leading-5 outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 data-[inset=true]:pl-8 [&_svg:not([data-slot=stitch])]:pointer-events-none [&_svg:not([data-slot=stitch])]:shrink-0 [&_svg:not([data-slot=stitch]):not([class*='size-'])]:size-4"

function ContextMenu({ ...props }: ContextMenuPrimitive.Root.Props) {
  return <ContextMenuPrimitive.Root data-slot="context-menu" {...props} />
}

function ContextMenuPortal({ ...props }: ContextMenuPrimitive.Portal.Props) {
  return <ContextMenuPrimitive.Portal data-slot="context-menu-portal" {...props} />
}

/** The area you right-click (or long-press) to open the menu. */
function ContextMenuTrigger({ className, ...props }: WithClassName<ContextMenuPrimitive.Trigger.Props>) {
  return <ContextMenuPrimitive.Trigger data-slot="context-menu-trigger" className={cn("select-none", className)} {...props} />
}

/** The open menu: a stitched denim pocket. */
function ContextMenuContent({
  align = "start",
  alignOffset = 4,
  side = "right",
  sideOffset = 0,
  className,
  children,
  ...props
}: WithClassName<ContextMenuPrimitive.Popup.Props> & Pick<ContextMenuPrimitive.Positioner.Props, "align" | "alignOffset" | "side" | "sideOffset">) {
  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Positioner className="isolate z-50 outline-none" align={align} alignOffset={alignOffset} side={side} sideOffset={sideOffset}>
        <ContextMenuPrimitive.Popup
          data-slot="context-menu-content"
          className={cn(
            "tx-pocket relative z-50 max-h-(--available-height) min-w-44 origin-(--transform-origin) overflow-x-hidden overflow-y-auto p-1.5",
            className,
          )}
          {...props}
        >
          <Stitch />
          {children}
        </ContextMenuPrimitive.Popup>
      </ContextMenuPrimitive.Positioner>
    </ContextMenuPrimitive.Portal>
  )
}

function ContextMenuGroup({ ...props }: ContextMenuPrimitive.Group.Props) {
  return <ContextMenuPrimitive.Group data-slot="context-menu-group" {...props} />
}

/** A small heading for a group. Place it inside a ContextMenuGroup (Base UI requires it). */
function ContextMenuLabel({ className, inset, ...props }: WithClassName<ContextMenuPrimitive.GroupLabel.Props> & { inset?: boolean }) {
  return (
    <ContextMenuPrimitive.GroupLabel
      data-slot="context-menu-label"
      data-inset={inset}
      className={cn("tx-pocket-label px-2.5 pt-2 pb-1 text-xs font-semibold tracking-[.04em] uppercase data-[inset=true]:pl-8", className)}
      {...props}
    />
  )
}

/** One action. `variant="destructive"` turns it rust, for actions you can't undo. */
function ContextMenuItem({
  className,
  inset,
  variant = "default",
  children,
  ...props
}: WithClassName<ContextMenuPrimitive.Item.Props> & { inset?: boolean; variant?: "default" | "destructive" }) {
  return (
    <ContextMenuPrimitive.Item data-slot="context-menu-item" data-inset={inset} data-variant={variant} className={cn(item, className)} {...props}>
      <Stitch />
      {children}
    </ContextMenuPrimitive.Item>
  )
}

function ContextMenuSub({ ...props }: ContextMenuPrimitive.SubmenuRoot.Props) {
  return <ContextMenuPrimitive.SubmenuRoot data-slot="context-menu-sub" {...props} />
}

function ContextMenuSubTrigger({ className, inset, children, ...props }: WithClassName<ContextMenuPrimitive.SubmenuTrigger.Props> & { inset?: boolean }) {
  return (
    <ContextMenuPrimitive.SubmenuTrigger data-slot="context-menu-sub-trigger" data-inset={inset} className={cn(item, className)} {...props}>
      <Stitch />
      {children}
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="ml-auto rtl:rotate-180">
        <path d="m9 6 6 6-6 6" />
      </svg>
    </ContextMenuPrimitive.SubmenuTrigger>
  )
}

function ContextMenuSubContent({ align = "start", alignOffset = -6, side = "right", sideOffset = 2, className, ...props }: React.ComponentProps<typeof ContextMenuContent>) {
  return (
    <ContextMenuContent
      data-slot="context-menu-sub-content"
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
function ContextMenuCheckboxItem({ className, children, checked, inset, ...props }: WithClassName<ContextMenuPrimitive.CheckboxItem.Props> & { inset?: boolean }) {
  return (
    <ContextMenuPrimitive.CheckboxItem
      data-slot="context-menu-checkbox-item"
      data-inset={inset}
      className={cn(item, "pl-8", className)}
      checked={checked}
      {...props}
    >
      <Stitch />
      <ContextMenuPrimitive.CheckboxItemIndicator data-slot="context-menu-checkbox-item-indicator" className="tx-pocket-tick pointer-events-none absolute">
        {null}
      </ContextMenuPrimitive.CheckboxItemIndicator>
      {children}
    </ContextMenuPrimitive.CheckboxItem>
  )
}

function ContextMenuRadioGroup({ ...props }: ContextMenuPrimitive.RadioGroup.Props) {
  return <ContextMenuPrimitive.RadioGroup data-slot="context-menu-radio-group" {...props} />
}

/** One choice in a radio group. A dot shows on the picked one. */
function ContextMenuRadioItem({ className, children, inset, ...props }: WithClassName<ContextMenuPrimitive.RadioItem.Props> & { inset?: boolean }) {
  return (
    <ContextMenuPrimitive.RadioItem data-slot="context-menu-radio-item" data-inset={inset} className={cn(item, "pl-8", className)} {...props}>
      <Stitch />
      <ContextMenuPrimitive.RadioItemIndicator data-slot="context-menu-radio-item-indicator" className="tx-pocket-dot pointer-events-none absolute">
        {null}
      </ContextMenuPrimitive.RadioItemIndicator>
      {children}
    </ContextMenuPrimitive.RadioItem>
  )
}

function ContextMenuSeparator({ className, ...props }: WithClassName<ContextMenuPrimitive.Separator.Props>) {
  return <ContextMenuPrimitive.Separator data-slot="context-menu-separator" className={cn("tx-pocket-separator -mx-0.5 my-1.5 h-px", className)} {...props} />
}

/** A keyboard shortcut hint at the end of an item. */
function ContextMenuShortcut({ className, ...props }: React.ComponentProps<"span">) {
  return <span data-slot="context-menu-shortcut" className={cn("tx-pocket-shortcut ml-auto pl-4 text-xs tracking-widest", className)} {...props} />
}

export {
  ContextMenu,
  ContextMenuPortal,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuLabel,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
}
