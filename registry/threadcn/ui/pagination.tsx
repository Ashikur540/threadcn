import type * as React from "react"
import { cn } from "cn"

import { buttonVariants } from "@/registry/threadcn/ui/button"
import { Stitch } from "@/registry/threadcn/ui/stitch"

// Same parts and API as shadcn's Pagination, wearing the Button look.
// Differs from shadcn:
// - the current page is the leather patch (selected = leather, like a checked
//   Checkbox) instead of the outline button;
// - page links are real links (role "link"), not links announced as buttons.

/**
 * Page links for a long list.
 *
 * @example
 * <Pagination>
 *   <PaginationContent>
 *     <PaginationItem><PaginationPrevious href="?page=1" /></PaginationItem>
 *     <PaginationItem><PaginationLink href="?page=2" isActive>2</PaginationLink></PaginationItem>
 *     <PaginationItem><PaginationNext href="?page=3" /></PaginationItem>
 *   </PaginationContent>
 * </Pagination>
 */
function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
  return <nav role="navigation" aria-label="pagination" data-slot="pagination" className={cn("mx-auto flex w-full justify-center", className)} {...props} />
}

function PaginationContent({ className, ...props }: React.ComponentProps<"ul">) {
  return <ul data-slot="pagination-content" className={cn("flex flex-wrap items-center gap-1.5", className)} {...props} />
}

function PaginationItem({ ...props }: React.ComponentProps<"li">) {
  return <li data-slot="pagination-item" {...props} />
}

type PaginationLinkProps = {
  isActive?: boolean
} & { size?: "default" | "sm" | "icon" | "icon-sm" } & React.ComponentProps<"a">

function PaginationLink({ className, isActive, size = "icon", children, ...props }: PaginationLinkProps) {
  const variant = isActive ? "leather" : "ghost"
  return (
    <a
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size }), "no-underline", className)}
      {...props}
    >
      <Stitch />
      {children}
    </a>
  )
}

function Chevron({ flip }: { flip?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={cn(flip && "rotate-180", "rtl:-scale-x-100")}>
      <path d="m15 6-6 6 6 6" />
    </svg>
  )
}

function PaginationPrevious({ className, text = "Previous", ...props }: React.ComponentProps<typeof PaginationLink> & { text?: string }) {
  return (
    <PaginationLink aria-label="Go to previous page" size="default" className={cn("px-3.5", className)} {...props}>
      <Chevron />
      <span className="hidden sm:block">{text}</span>
    </PaginationLink>
  )
}

function PaginationNext({ className, text = "Next", ...props }: React.ComponentProps<typeof PaginationLink> & { text?: string }) {
  return (
    <PaginationLink aria-label="Go to next page" size="default" className={cn("px-3.5", className)} {...props}>
      <span className="hidden sm:block">{text}</span>
      <Chevron flip />
    </PaginationLink>
  )
}

function PaginationEllipsis({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span data-slot="pagination-ellipsis" className={cn("flex size-11 items-center justify-center", className)} {...props}>
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden="true">
        <circle cx="5" cy="12" r="1.8" />
        <circle cx="12" cy="12" r="1.8" />
        <circle cx="19" cy="12" r="1.8" />
      </svg>
      <span className="sr-only">More pages</span>
    </span>
  )
}

export { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious }
