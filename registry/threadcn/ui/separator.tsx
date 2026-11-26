"use client"

import { Separator as SeparatorPrimitive } from "@base-ui/react/separator"
import { cn } from "cn"

/**
 * A stitched line between two blocks. Same API as shadcn's Separator.
 * The dashed thread look is in styles/separator.css.
 *
 * @example
 * <Separator />
 * <Separator orientation="vertical" />
 */
function Separator({ className, orientation = "horizontal", ...props }: Omit<SeparatorPrimitive.Props, "className"> & { className?: string }) {
  return (
    <SeparatorPrimitive
      data-slot="separator"
      orientation={orientation}
      className={cn("tx-separator shrink-0 data-[orientation=horizontal]:w-full data-[orientation=vertical]:self-stretch", className)}
      {...props}
    />
  )
}

export { Separator }
