"use client"

import type * as React from "react"
import { AlertDialog as AlertDialogPrimitive } from "@base-ui/react/alert-dialog"
import { cn } from "cn"

import { Button } from "@/registry/threadcn/ui/button"
import { Stitch } from "@/registry/threadcn/ui/stitch"

// Same parts and API as shadcn's Base UI AlertDialog: a dialog that must be
// answered (no close X, no closing by clicking outside). Base UI handles focus
// and screen-reader roles. The look is in styles/modal.css, shared with Dialog.

type WithClassName<T> = Omit<T, "className"> & { className?: string }

function AlertDialog({ ...props }: AlertDialogPrimitive.Root.Props) {
  return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />
}

function AlertDialogTrigger({ ...props }: AlertDialogPrimitive.Trigger.Props) {
  return <AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} />
}

function AlertDialogPortal({ ...props }: AlertDialogPrimitive.Portal.Props) {
  return <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />
}

function AlertDialogOverlay({ className, ...props }: WithClassName<AlertDialogPrimitive.Backdrop.Props>) {
  return <AlertDialogPrimitive.Backdrop data-slot="alert-dialog-overlay" className={cn("tx-modal-overlay fixed inset-0 isolate z-50", className)} {...props} />
}

/** The question box. `size="sm"` makes a narrow box with two equal buttons. */
function AlertDialogContent({
  className,
  size = "default",
  children,
  ...props
}: WithClassName<AlertDialogPrimitive.Popup.Props> & {
  size?: "default" | "sm"
}) {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Popup
        data-slot="alert-dialog-content"
        data-size={size}
        className={cn(
          "tx-modal group/alert-dialog-content fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-3.5 p-6 data-[size=default]:sm:max-w-md data-[size=sm]:max-w-xs",
          className,
        )}
        {...props}
      >
        <Stitch />
        {children}
      </AlertDialogPrimitive.Popup>
    </AlertDialogPortal>
  )
}

function AlertDialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="alert-dialog-header" className={cn("flex flex-col gap-1", className)} {...props} />
}

function AlertDialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2.5 group-data-[size=sm]/alert-dialog-content:grid group-data-[size=sm]/alert-dialog-content:grid-cols-2 sm:flex-row sm:justify-end",
        className,
      )}
      {...props}
    />
  )
}

/** A cream circle above the title, for an icon. */
function AlertDialogMedia({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-media"
      className={cn(
        "grid size-12 place-items-center rounded-full bg-(--tx-field) text-(--tx-field-foreground) [&_svg:not([class*='size-'])]:size-6",
        className,
      )}
      {...props}
    />
  )
}

function AlertDialogTitle({ className, ...props }: WithClassName<AlertDialogPrimitive.Title.Props>) {
  return <AlertDialogPrimitive.Title data-slot="alert-dialog-title" className={cn("tx-modal-title text-[21px] leading-tight font-bold", className)} {...props} />
}

function AlertDialogDescription({ className, ...props }: WithClassName<AlertDialogPrimitive.Description.Props>) {
  return <AlertDialogPrimitive.Description data-slot="alert-dialog-description" className={cn("tx-modal-description text-sm", className)} {...props} />
}

/** The confirming button. Takes Button's props, e.g. variant="destructive". */
function AlertDialogAction({ className, ...props }: React.ComponentProps<typeof Button>) {
  return <Button data-slot="alert-dialog-action" className={className} {...props} />
}

/**
 * The button that backs out. Differs from shadcn: it defaults to the
 * secondary (dark denim) variant, like Dialog's Cancel, instead of outline.
 */
function AlertDialogCancel({
  className,
  variant = "secondary",
  size = "default",
  ...props
}: AlertDialogPrimitive.Close.Props & Pick<React.ComponentProps<typeof Button>, "variant" | "size">) {
  return <AlertDialogPrimitive.Close data-slot="alert-dialog-cancel" className={className} render={<Button variant={variant} size={size} />} {...props} />
}

export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
}
