"use client"

import type * as React from "react"
import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar"
import { cn } from "cn"

import { Stitch } from "@/registry/threadcn/ui/stitch"

// Same parts and API as shadcn's Base UI Avatar. Base UI shows the fallback
// until the image has loaded (or if it fails). The look is in styles/avatar.css.

type WithClassName<T> = Omit<T, "className"> & { className?: string }

/**
 * A round photo with a stitched ring. Without a photo it shows initials on
 * cream canvas.
 *
 * @example
 * <Avatar>
 *   <AvatarImage src="/rafi.jpg" alt="Rafi" />
 *   <AvatarFallback>RA</AvatarFallback>
 * </Avatar>
 */
function Avatar({
  className,
  size = "default",
  children,
  ...props
}: WithClassName<AvatarPrimitive.Root.Props> & {
  size?: "default" | "sm" | "lg"
}) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      data-size={size}
      className={cn("tx-avatar group/avatar relative flex shrink-0 rounded-full select-none data-[size=default]:size-10 data-[size=lg]:size-14 data-[size=sm]:size-8", className)}
      {...props}
    >
      {children}
      {/* Last, so the ring is drawn over the photo. */}
      <Stitch />
    </AvatarPrimitive.Root>
  )
}

function AvatarImage({ className, ...props }: WithClassName<AvatarPrimitive.Image.Props>) {
  return <AvatarPrimitive.Image data-slot="avatar-image" className={cn("aspect-square size-full rounded-full object-cover", className)} {...props} />
}

function AvatarFallback({ className, ...props }: WithClassName<AvatarPrimitive.Fallback.Props>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn("tx-avatar-fallback flex size-full items-center justify-center rounded-full text-sm font-bold group-data-[size=lg]/avatar:text-base group-data-[size=sm]/avatar:text-xs", className)}
      {...props}
    />
  )
}

/** A small gold dot on the edge, e.g. "online". */
function AvatarBadge({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="avatar-badge"
      className={cn(
        "tx-avatar-badge absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full select-none group-data-[size=default]/avatar:size-3 group-data-[size=lg]/avatar:size-3.5 group-data-[size=sm]/avatar:size-2.5",
        className,
      )}
      {...props}
    />
  )
}

/** Avatars that overlap, each cut out from the fabric behind it. */
function AvatarGroup({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="avatar-group" className={cn("tx-avatar-group flex -space-x-2.5", className)} {...props} />
}

/** "+3": how many more people are in the group. */
function AvatarGroupCount({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-group-count"
      className={cn("tx-avatar-group-count relative flex size-10 shrink-0 items-center justify-center rounded-full text-sm font-bold", className)}
      {...props}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback, AvatarGroup, AvatarGroupCount, AvatarBadge }
