import type * as React from "react"
import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

import { Stitch } from "@/registry/threadcn/ui/stitch"

/**
 * Patch classes. Layout is Tailwind here; the look (leather, stitch) is in
 * styles/patch.css, keyed on the tx-patch-* classes.
 */
const patchVariants = cva("tx-patch relative inline-flex max-w-full items-center gap-2.5 no-underline", {
  variants: {
    variant: {
      default: "rounded-[7px] px-4 py-2 text-[15px] font-bold tracking-[.07em] uppercase",
      round: "tx-patch-round rounded-[50px_14px_14px_50px] py-[7px] pr-[18px] pl-[7px] text-sm font-semibold",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

/**
 * A sewn-on brand patch. threadcn only, not part of shadcn.
 *
 * `default` is a leather label for a logo or brand name. `round` is a denim
 * patch with a <PatchDot> on the left, for a number or an icon.
 * Use `render` to make it a link.
 *
 * @example
 * <Patch render={<a href="/" />}>Indigo Supply</Patch>
 * <Patch variant="round"><PatchDot>42</PatchDot>Orders this week</Patch>
 */
function Patch({
  className,
  variant = "default",
  render,
  children,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof patchVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(patchVariants({ variant }), className),
        children: (
          <>
            <Stitch />
            {children}
          </>
        ),
      },
      props,
    ),
    render,
    state: {
      slot: "patch",
      variant,
    },
  })
}

/** The cream circle at the start of a round Patch. Holds a short number or an icon. */
function PatchDot({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="patch-dot"
      className={cn(
        "grid size-10 shrink-0 place-items-center rounded-full bg-(--tx-field) text-base font-bold text-(--tx-field-foreground) tabular-nums",
        className,
      )}
      {...props}
    />
  )
}

export { Patch, PatchDot, patchVariants }
