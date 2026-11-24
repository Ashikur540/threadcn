"use client"

import * as React from "react"
import { Toggle as TogglePrimitive } from "@base-ui/react/toggle"
import { ToggleGroup as ToggleGroupPrimitive } from "@base-ui/react/toggle-group"
import { type VariantProps } from "class-variance-authority"
import { cn } from "cn"

import { Stitch } from "@/registry/threadcn/ui/stitch"
import { toggleVariants } from "@/registry/threadcn/ui/toggle"

// Same parts and API as shadcn's Base UI ToggleGroup. Items wear the Toggle
// look (styles/toggle.css); the group only shares variant, size and spacing.

type GroupOptions = VariantProps<typeof toggleVariants> & {
  spacing?: number
  orientation?: "horizontal" | "vertical"
}

const ToggleGroupContext = React.createContext<GroupOptions>({
  size: "default",
  variant: "default",
  spacing: 2,
  orientation: "horizontal",
})

/**
 * A row of toggles. Pass `multiple` to allow more than one on.
 * `spacing` is the gap in Tailwind units (0 joins the items).
 *
 * @example
 * <ToggleGroup variant="outline" defaultValue={["regular"]}>
 *   <ToggleGroupItem value="slim">Slim</ToggleGroupItem>
 *   <ToggleGroupItem value="regular">Regular</ToggleGroupItem>
 * </ToggleGroup>
 */
function ToggleGroup({
  className,
  variant,
  size,
  spacing = 2,
  orientation = "horizontal",
  children,
  ...props
}: Omit<ToggleGroupPrimitive.Props, "className"> & GroupOptions & { className?: string }) {
  return (
    <ToggleGroupPrimitive
      data-slot="toggle-group"
      data-variant={variant}
      data-size={size}
      data-spacing={spacing}
      data-orientation={orientation}
      orientation={orientation}
      style={{ "--gap": spacing } as React.CSSProperties}
      className={cn(
        "tx-toggle-group flex w-fit flex-row items-center gap-[--spacing(var(--gap))] data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-stretch",
        className,
      )}
      {...props}
    >
      <ToggleGroupContext.Provider value={{ variant, size, spacing, orientation }}>{children}</ToggleGroupContext.Provider>
    </ToggleGroupPrimitive>
  )
}

function ToggleGroupItem({
  className,
  children,
  variant = "default",
  size = "default",
  ...props
}: Omit<TogglePrimitive.Props, "className"> & VariantProps<typeof toggleVariants> & { className?: string }) {
  const context = React.useContext(ToggleGroupContext)
  return (
    <TogglePrimitive
      data-slot="toggle-group-item"
      data-variant={context.variant || variant}
      data-size={context.size || size}
      data-spacing={context.spacing}
      className={cn(
        "focus-visible:z-10",
        toggleVariants({ variant: context.variant || variant, size: context.size || size }),
        className,
      )}
      {...props}
    >
      <Stitch />
      {children}
    </TogglePrimitive>
  )
}

export { ToggleGroup, ToggleGroupItem }
