"use client"

import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cn } from "cn"

import { buttonVariants, type ButtonProps } from "@/registry/threadcn/ui/button"
import { Stitch } from "@/registry/threadcn/ui/stitch"

// The Button component. Import it from "button", not from this file:
// button.tsx re-exports it next to buttonVariants.

/**
 * A sewn-on patch that sinks when pressed. Same API as shadcn's Button.
 *
 * threadcn extras: the `leather` variant, and `shape="round"` for circular
 * icon buttons.
 *
 * @example
 * <Button variant="secondary">Book a repair</Button>
 * <Button size="icon" shape="round" aria-label="Save"><HeartIcon /></Button>
 */
function Button({ className, variant = "default", size = "default", shape = "default", children, ...props }: ButtonProps) {
  return (
    <ButtonPrimitive
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, shape }), className)}
      {...props}
    >
      <Stitch />
      {children}
    </ButtonPrimitive>
  )
}

export { Button }
