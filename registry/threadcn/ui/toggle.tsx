"use client"

import { Toggle as TogglePrimitive } from "@base-ui/react/toggle"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

import { Stitch } from "@/registry/threadcn/ui/stitch"

/**
 * Toggle classes. Layout is Tailwind here; the look (fabric, leather patch
 * when on) is in styles/toggle.css, keyed on the tx-toggle-* classes.
 */
const toggleVariants = cva(
  "tx-toggle relative inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 font-semibold whitespace-nowrap select-none data-disabled:cursor-not-allowed [&_svg:not([data-slot=stitch])]:pointer-events-none [&_svg:not([data-slot=stitch])]:shrink-0 [&_svg:not([data-slot=stitch]):not([class*='size-'])]:size-[18px]",
  {
    variants: {
      variant: {
        default: "",
        outline: "tx-toggle-outline",
      },
      size: {
        default: "min-h-10 min-w-10 px-3 text-sm",
        sm: "tx-toggle-sm min-h-8 min-w-8 px-2.5 text-[13px]",
        lg: "min-h-11 min-w-11 px-4 text-[15px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

/**
 * A button that stays on or off. Same API as shadcn's Toggle.
 * Off it is plain fabric; on, a leather patch is sewn on (like a checked Checkbox).
 *
 * @example
 * <Toggle aria-label="Show sold out"><EyeIcon /></Toggle>
 */
function Toggle({
  className,
  variant = "default",
  size = "default",
  children,
  ...props
}: Omit<TogglePrimitive.Props, "className"> & VariantProps<typeof toggleVariants> & { className?: string }) {
  return (
    <TogglePrimitive data-slot="toggle" className={cn(toggleVariants({ variant, size }), className)} {...props}>
      <Stitch />
      {children}
    </TogglePrimitive>
  )
}

export { Toggle, toggleVariants }
