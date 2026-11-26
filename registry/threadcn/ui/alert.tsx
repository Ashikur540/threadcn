import type * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

import { Stitch } from "@/registry/threadcn/ui/stitch"

/** Alert classes. Layout is Tailwind here; the care-label look is in styles/alert.css. */
const alertVariants = cva(
  "tx-alert relative grid w-full gap-y-1 px-4 py-3.5 text-sm has-[>svg]:grid-cols-[auto_1fr] has-[>svg]:gap-x-3 has-data-[slot=alert-action]:pr-28 [&>svg]:row-span-2 [&>svg]:translate-y-0.5 [&>svg:not([data-slot=stitch])]:size-[18px]",
  {
    variants: {
      variant: {
        default: "",
        destructive: "tx-alert-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

/**
 * A notice sewn on like a garment care label. Same API as shadcn's Alert.
 * `destructive` is a rust patch, for errors.
 *
 * @example
 * <Alert>
 *   <InfoIcon />
 *   <AlertTitle>Free repairs</AlertTitle>
 *   <AlertDescription>Send them back any time.</AlertDescription>
 * </Alert>
 */
function Alert({ className, variant = "default", children, ...props }: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div data-slot="alert" data-variant={variant} role="alert" className={cn(alertVariants({ variant }), className)} {...props}>
      <Stitch />
      {children}
    </div>
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn("tx-alert-title font-bold [&_a]:underline [&_a]:underline-offset-3", className)}
      {...props}
    />
  )
}

function AlertDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn("tx-alert-description [&_a]:underline [&_a]:underline-offset-3", className)}
      {...props}
    />
  )
}

/** A button or link in the top-right corner of the label. */
function AlertAction({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="alert-action" className={cn("tx-alert-action absolute top-2.5 right-3", className)} {...props} />
}

export { Alert, AlertTitle, AlertDescription, AlertAction }
