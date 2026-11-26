"use client"

import type * as React from "react"
import { Toast as ToastPrimitive } from "@base-ui/react/toast"
import { cn } from "cn"

import { Button } from "@/registry/threadcn/ui/button"
import { Spinner } from "@/registry/threadcn/ui/spinner"
import { Stitch } from "@/registry/threadcn/ui/stitch"

// Same parts and API as shadcn's Base UI Toast. Base UI handles the queue,
// timers, swiping, stacking and screen-reader announcements. The stacking
// and swipe motion below is shadcn's; the look is in styles/toast.css.

type WithClassName<T> = Omit<T, "className"> & { className?: string }

/** Call from anywhere: toast.add({ title, description, type }). */
const toast = ToastPrimitive.createToastManager()

function ToastProvider({ ...props }: ToastPrimitive.Provider.Props) {
  return <ToastPrimitive.Provider {...props} />
}

function ToastPortal({ ...props }: ToastPrimitive.Portal.Props) {
  return <ToastPrimitive.Portal data-slot="toast-portal" {...props} />
}

function ToastViewport({ className, ...props }: WithClassName<ToastPrimitive.Viewport.Props>) {
  return (
    <ToastPrimitive.Viewport
      data-slot="toast-viewport"
      className={cn(
        "pointer-events-none fixed inset-x-4 bottom-4 z-50 mx-auto w-auto max-w-sm outline-none sm:right-4 sm:left-auto sm:mx-0 sm:w-full",
        className,
      )}
      {...props}
    />
  )
}

/** One stitched toast card. Stacks behind newer toasts and spreads out on hover. */
function Toast({ className, children, ...props }: WithClassName<ToastPrimitive.Root.Props>) {
  return (
    <ToastPrimitive.Root
      data-slot="toast"
      className={cn(
        "tx-toast pointer-events-auto absolute right-0 bottom-0 z-[calc(1000-var(--toast-index))] w-full origin-bottom will-change-transform select-none",
        "[--gap:0.75rem] [--height:var(--toast-frontmost-height,var(--toast-height))] [--offset-y:calc(var(--toast-offset-y)*-1+calc(var(--toast-index)*var(--gap)*-1)+var(--toast-swipe-movement-y))] [--peek:0.75rem] [--scale:calc(max(0,1-(var(--toast-index)*0.1)))] [--shrink:calc(1-var(--scale))]",
        "h-(--height) [transform:translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-swipe-movement-y)-(var(--toast-index)*var(--peek))-(var(--shrink)*var(--height))))_scale(var(--scale))]",
        "after:absolute after:top-full after:left-0 after:h-[calc(var(--gap)+1px)] after:w-full after:content-['']",
        "data-expanded:h-(--toast-height) data-expanded:[transform:translateX(var(--toast-swipe-movement-x))_translateY(var(--offset-y))]",
        "data-limited:opacity-0 data-starting-style:[transform:translateY(150%)]",
        "[&[data-ending-style]:not([data-limited]):not([data-swipe-direction])]:[transform:translateY(150%)]",
        "data-ending-style:data-[swipe-direction=down]:[transform:translateY(calc(var(--toast-swipe-movement-y)+150%))]",
        "data-ending-style:data-[swipe-direction=left]:[transform:translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))]",
        "data-ending-style:data-[swipe-direction=right]:[transform:translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))]",
        "data-ending-style:data-[swipe-direction=up]:[transform:translateY(calc(var(--toast-swipe-movement-y)-150%))]",
        "data-expanded:data-ending-style:data-[swipe-direction=down]:[transform:translateY(calc(var(--toast-swipe-movement-y)+150%))]",
        "data-expanded:data-ending-style:data-[swipe-direction=left]:[transform:translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))]",
        "data-expanded:data-ending-style:data-[swipe-direction=right]:[transform:translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))]",
        "data-expanded:data-ending-style:data-[swipe-direction=up]:[transform:translateY(calc(var(--toast-swipe-movement-y)-150%))]",
        className,
      )}
      {...props}
    >
      <Stitch />
      {children}
    </ToastPrimitive.Root>
  )
}

function ToastContent({ className, ...props }: WithClassName<ToastPrimitive.Content.Props>) {
  return (
    <ToastPrimitive.Content
      data-slot="toast-content"
      className={cn(
        "tx-toast-content relative flex h-full items-center gap-3 overflow-hidden px-[18px] py-4 data-behind:opacity-0 data-expanded:opacity-100",
        className,
      )}
      {...props}
    />
  )
}

function ToastTitle({ className, ...props }: WithClassName<ToastPrimitive.Title.Props>) {
  return <ToastPrimitive.Title data-slot="toast-title" className={cn("tx-toast-title text-sm font-bold", className)} {...props} />
}

function ToastDescription({ className, ...props }: WithClassName<ToastPrimitive.Description.Props>) {
  return <ToastPrimitive.Description data-slot="toast-description" className={cn("tx-toast-description text-sm", className)} {...props} />
}

function ToastAction({ className, render = <Button variant="secondary" size="sm" />, ...props }: WithClassName<ToastPrimitive.Action.Props>) {
  return <ToastPrimitive.Action data-slot="toast-action" render={render} className={cn("shrink-0", className)} {...props} />
}

function ToastClose({ className, children, render = <Button variant="ghost" size="icon-xs" shape="round" />, ...props }: WithClassName<ToastPrimitive.Close.Props>) {
  return (
    <ToastPrimitive.Close data-slot="toast-close" aria-label="Close toast" render={render} className={cn("shrink-0", className)} {...props}>
      {children ?? (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      )}
    </ToastPrimitive.Close>
  )
}

const ICON_PATHS: Record<string, React.ReactNode> = {
  success: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  info: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5M12 7.5v.01" />
    </>
  ),
  warning: (
    <>
      <path d="M12 3 2.5 20h19Z" />
      <path d="M12 10v4M12 17v.01" />
    </>
  ),
  error: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m9 9 6 6M15 9l-6 6" />
    </>
  ),
}

/** The small mark at the start of a toast, chosen by its `type`. */
function ToastIcon({ type }: { type: string | undefined }) {
  if (type === "loading") return <Spinner data-slot="toast-icon" className="size-[18px]" />
  const paths = type ? ICON_PATHS[type] : undefined
  if (!paths) return null
  return (
    <svg
      data-slot="toast-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="tx-toast-icon size-[18px] shrink-0"
    >
      {paths}
    </svg>
  )
}

function ToastList() {
  const { toasts } = ToastPrimitive.useToastManager()
  return toasts.map((item) => (
    <Toast key={item.id} toast={item}>
      <ToastContent>
        <ToastIcon type={item.type} />
        <div className="flex min-w-0 flex-1 flex-col gap-1">
          <ToastTitle />
          <ToastDescription />
        </div>
        <ToastAction />
        <ToastClose />
      </ToastContent>
    </Toast>
  ))
}

/**
 * Put this once near the root of your app. Then call toast.add() anywhere.
 *
 * @example
 * <Toaster />
 * toast.add({ title: "Added to bag", description: "Model 08, W32 L34", type: "success" })
 */
function Toaster({ children, toastManager = toast, ...props }: ToastPrimitive.Provider.Props) {
  return (
    <ToastProvider toastManager={toastManager} {...props}>
      {children}
      <ToastPortal>
        <ToastViewport>
          <ToastList />
        </ToastViewport>
      </ToastPortal>
    </ToastProvider>
  )
}

const createToastManager = ToastPrimitive.createToastManager
const useToastManager = ToastPrimitive.useToastManager

export {
  Toaster,
  Toast,
  ToastAction,
  ToastClose,
  ToastContent,
  ToastDescription,
  ToastPortal,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  createToastManager,
  toast,
  useToastManager,
}
