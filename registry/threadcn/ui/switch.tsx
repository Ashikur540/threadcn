"use client"

import { Switch as SwitchPrimitive } from "@base-ui/react/switch"
import { cn } from "cn"

import { Stitch } from "@/registry/threadcn/ui/stitch"

/**
 * A fabric strap with a sewing-button thumb that rolls as it slides.
 * Same API as shadcn's Switch, including size="sm". The look is in styles/switch.css.
 *
 * @example
 * <Switch id="express" /> <Label htmlFor="express">Express shipping</Label>
 */
function Switch({
  className,
  size = "default",
  ...props
}: Omit<SwitchPrimitive.Root.Props, "className"> & {
  className?: string
  size?: "sm" | "default"
}) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      data-size={size}
      className={cn("tx-switch peer relative inline-flex shrink-0 cursor-pointer items-center rounded-full data-disabled:cursor-not-allowed", className)}
      {...props}
    >
      <Stitch />
      <SwitchPrimitive.Thumb data-slot="switch-thumb" className="tx-switch-thumb pointer-events-none absolute rounded-full" />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
