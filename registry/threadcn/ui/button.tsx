import { cva, type VariantProps } from "class-variance-authority"

import type { Button as ButtonPrimitive } from "@base-ui/react/button"

// This file stays server-safe (no "use client"), so buttonVariants() can be
// called in server components, e.g. <Link className={buttonVariants()} />.
// The Button component itself lives in button-client.tsx: it must be a client
// component, or render={<Button />} in a server component would be rendered
// early and lose the trigger's text. You import both from this file.

/**
 * Button classes. Layout (size, padding) is Tailwind here; the textile look
 * (colors, stitch, press) is in styles/button.css, keyed on the tx-button-* classes.
 */
const buttonVariants = cva(
  "tx-button relative inline-flex max-w-full shrink-0 cursor-pointer items-center justify-center gap-2 text-center leading-tight font-semibold select-none disabled:cursor-not-allowed [&_svg:not([data-slot=stitch])]:pointer-events-none [&_svg:not([data-slot=stitch])]:shrink-0 [&_svg:not([data-slot=stitch]):not([class*='size-'])]:size-5",
  {
    variants: {
      variant: {
        default: "",
        secondary: "tx-button-secondary",
        destructive: "tx-button-destructive",
        leather: "tx-button-leather",
        outline: "tx-button-outline",
        ghost: "tx-button-ghost",
        link: "tx-button-link",
      },
      size: {
        default: "min-h-11 px-[22px] py-2.5 text-[15px]",
        xs: "tx-button-sm min-h-8 px-2.5 py-1 text-xs",
        sm: "tx-button-sm min-h-9 px-3.5 py-1.5 text-[13px]",
        lg: "min-h-13 px-[30px] py-3.5 text-[17px]",
        icon: "size-11 p-0",
        "icon-xs": "tx-button-sm size-8 p-0",
        "icon-sm": "tx-button-sm size-9 p-0",
        "icon-lg": "size-13 p-0",
      },
      shape: {
        default: "",
        round: "tx-button-round",
      },
    },
    // A link is plain text, so it drops the patch padding at every size.
    compoundVariants: [{ variant: "link", class: "min-h-0 px-0 py-0.5" }],
    defaultVariants: {
      variant: "default",
      size: "default",
      shape: "default",
    },
  },
)

type ButtonProps = Omit<ButtonPrimitive.Props, "className"> &
  VariantProps<typeof buttonVariants> & {
    className?: string
  }

export { Button } from "@/registry/threadcn/ui/button-client"
export { buttonVariants, type ButtonProps }
