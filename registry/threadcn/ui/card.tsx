import type * as React from "react"
import { cn } from "cn"

import { Stitch } from "@/registry/threadcn/ui/stitch"

/**
 * A stitched piece of fabric. Same parts and API as shadcn's Card.
 * The look is in styles/card.css.
 *
 * @example
 * <Card>
 *   <CardHeader><CardTitle>Free repairs</CardTitle></CardHeader>
 *   <CardContent>Send them back any time.</CardContent>
 * </Card>
 */
function Card({ className, size = "default", children, ...props }: React.ComponentProps<"div"> & { size?: "default" | "sm" }) {
  return (
    <div
      data-slot="card"
      data-size={size}
      className={cn("tx-card relative flex flex-col", size === "sm" ? "gap-2.5 p-4" : "gap-3.5 p-[22px]", className)}
      {...props}
    >
      <Stitch />
      {children}
    </div>
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "tx-card-header grid auto-rows-min items-start gap-1 has-data-[slot=card-action]:grid-cols-[1fr_auto]",
        className,
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-title" className={cn("tx-card-title text-xl leading-tight font-bold", className)} {...props} />
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-description" className={cn("tx-card-description text-sm", className)} {...props} />
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn("tx-card-action col-start-2 row-span-2 row-start-1 self-start justify-self-end", className)}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-content" className={cn("tx-card-content text-sm", className)} {...props} />
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-footer" className={cn("tx-card-footer flex flex-wrap items-center gap-2.5", className)} {...props} />
}

export { Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent }
