import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

import { Stitch } from "@/registry/threadcn/ui/stitch"

/**
 * Badge classes. Layout is Tailwind here; the look (colors, stitch) is in
 * styles/badge.css, keyed on the tx-badge-* classes.
 */
const badgeVariants = cva(
  "tx-badge relative inline-flex w-fit max-w-full shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full px-[13px] py-[5px] text-[13px] leading-[1.3] font-semibold whitespace-nowrap [&>svg:not([data-slot=stitch])]:pointer-events-none [&>svg:not([data-slot=stitch]):not([class*='size-'])]:size-3.5",
  {
    variants: {
      variant: {
        default: "",
        secondary: "tx-badge-secondary",
        destructive: "tx-badge-destructive",
        outline: "tx-badge-outline",
        ghost: "tx-badge-ghost",
        link: "tx-badge-link",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

/**
 * A small woven label. Same API as shadcn's Badge, including `render` to
 * turn it into a link.
 *
 * @example
 * <Badge variant="secondary">Raw denim</Badge>
 * <Badge render={<a href="/sale" />}>Sale</Badge>
 */
function Badge({
  className,
  variant = "default",
  render,
  children,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({ variant }), className),
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
      slot: "badge",
      variant,
    },
  })
}

export { Badge, badgeVariants }
