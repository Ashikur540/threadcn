"use client"

import { Radio as RadioPrimitive } from "@base-ui/react/radio"
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group"
import { cn } from "cn"

import { Stitch } from "@/registry/threadcn/ui/stitch"

/**
 * A set of options where only one can be picked. Same API as shadcn's RadioGroup.
 * Arrow keys move between items (Base UI). The look is in styles/radio-group.css.
 *
 * @example
 * <RadioGroup defaultValue="regular">
 *   <RadioGroupItem value="slim" id="slim" /> <Label htmlFor="slim">Slim</Label>
 * </RadioGroup>
 */
function RadioGroup({ className, ...props }: Omit<RadioGroupPrimitive.Props, "className"> & { className?: string }) {
  return <RadioGroupPrimitive data-slot="radio-group" className={cn("tx-radio-group grid gap-3", className)} {...props} />
}

/** One stitched round option. Turns to leather with a cream dot when picked. */
function RadioGroupItem({ className, ...props }: Omit<RadioPrimitive.Root.Props, "className"> & { className?: string }) {
  return (
    <RadioPrimitive.Root
      data-slot="radio-group-item"
      className={cn("tx-radio-group-item peer relative grid size-[26px] shrink-0 cursor-pointer place-items-center rounded-full data-disabled:cursor-not-allowed", className)}
      {...props}
    >
      <Stitch />
      <RadioPrimitive.Indicator data-slot="radio-group-indicator" className="tx-radio-group-indicator size-2 rounded-full" />
    </RadioPrimitive.Root>
  )
}

export { RadioGroup, RadioGroupItem }
