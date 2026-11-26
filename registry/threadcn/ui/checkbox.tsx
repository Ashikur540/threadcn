"use client"

import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox"
import { cn } from "cn"

import { Stitch } from "@/registry/threadcn/ui/stitch"

/**
 * A stitched cream box that turns to leather when checked.
 * Same API as shadcn's Checkbox. Mark an error with aria-invalid="true".
 * The look is in styles/checkbox.css.
 *
 * @example
 * <Checkbox id="gift" /> <Label htmlFor="gift">Gift wrap</Label>
 */
function Checkbox({ className, ...props }: Omit<CheckboxPrimitive.Root.Props, "className"> & { className?: string }) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn("tx-checkbox peer relative grid size-[26px] shrink-0 cursor-pointer place-items-center data-disabled:cursor-not-allowed", className)}
      {...props}
    >
      <Stitch />
      <CheckboxPrimitive.Indicator data-slot="checkbox-indicator" className="tx-checkbox-indicator" />
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
