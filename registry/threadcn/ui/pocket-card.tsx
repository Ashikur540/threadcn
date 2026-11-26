import type * as React from "react"
import { cn } from "cn"

// A threadcn extra, not part of shadcn. Parts are named like Card's.
// The look is in styles/pocket-card.css.

/**
 * A jeans back pocket: double stitching, two copper rivets and an optional
 * hang tag. Good for a product.
 *
 * @example
 * <PocketCard>
 *   <PocketCardTag>W32 · L34</PocketCardTag>
 *   <PocketCardHeader>
 *     <PocketCardTitle>Model 08 Straight</PocketCardTitle>
 *     <PocketCardAction>$128</PocketCardAction>
 *   </PocketCardHeader>
 *   <PocketCardDescription>Deep indigo, unwashed.</PocketCardDescription>
 *   <PocketCardFooter><Button>Add to bag</Button></PocketCardFooter>
 * </PocketCard>
 */
function PocketCard({ className, children, ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="pocket-card" className={cn("tx-pocket-card relative grid gap-3.5 px-[26px] pt-8 pb-9", className)} {...props}>
      <span data-slot="pocket-card-rivet" aria-hidden="true" className="tx-pocket-card-rivet absolute top-3.5 left-3.5 size-[13px] rounded-full" />
      <span data-slot="pocket-card-rivet" aria-hidden="true" className="tx-pocket-card-rivet absolute top-3.5 right-3.5 size-[13px] rounded-full" />
      {children}
    </div>
  )
}

/** A cream tag hanging off the right edge, for a size or a short note. */
function PocketCardTag({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="pocket-card-tag"
      className={cn("tx-pocket-card-tag absolute top-[78px] -right-1.5 z-[2] py-1.5 pr-2.5 pl-[18px] text-xs leading-[1.2] font-semibold tabular-nums", className)}
      {...props}
    />
  )
}

function PocketCardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="pocket-card-header" className={cn("relative z-[1] flex items-baseline justify-between gap-2.5 pr-14", className)} {...props} />
}

function PocketCardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="pocket-card-title" className={cn("tx-pocket-card-title text-xl font-bold", className)} {...props} />
}

/** The right side of the header, like a price. */
function PocketCardAction({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="pocket-card-action" className={cn("tx-pocket-card-title shrink-0 text-[19px] font-bold tabular-nums", className)} {...props} />
}

function PocketCardDescription({ className, ...props }: React.ComponentProps<"p">) {
  return <p data-slot="pocket-card-description" className={cn("tx-pocket-card-description relative z-[1] pr-14 text-sm", className)} {...props} />
}

function PocketCardContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="pocket-card-content" className={cn("relative z-[1]", className)} {...props} />
}

function PocketCardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="pocket-card-footer" className={cn("relative z-[1] flex flex-wrap items-center gap-2.5", className)} {...props} />
}

export { PocketCard, PocketCardTag, PocketCardHeader, PocketCardTitle, PocketCardAction, PocketCardDescription, PocketCardContent, PocketCardFooter }
