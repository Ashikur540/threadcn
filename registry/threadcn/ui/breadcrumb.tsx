import type * as React from "react"
import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cn } from "cn"

// Same parts and API as shadcn's Breadcrumb. The look is in styles/breadcrumb.css.

/**
 * The trail of pages above a page title.
 *
 * @example
 * <Breadcrumb>
 *   <BreadcrumbList>
 *     <BreadcrumbItem><BreadcrumbLink href="/">Shop</BreadcrumbLink></BreadcrumbItem>
 *     <BreadcrumbSeparator />
 *     <BreadcrumbItem><BreadcrumbPage>Model 08</BreadcrumbPage></BreadcrumbItem>
 *   </BreadcrumbList>
 * </Breadcrumb>
 */
function Breadcrumb({ className, ...props }: React.ComponentProps<"nav">) {
  return <nav aria-label="breadcrumb" data-slot="breadcrumb" className={cn("tx-breadcrumb", className)} {...props} />
}

function BreadcrumbList({ className, ...props }: React.ComponentProps<"ol">) {
  return <ol data-slot="breadcrumb-list" className={cn("flex flex-wrap items-center gap-2 text-sm wrap-break-word", className)} {...props} />
}

function BreadcrumbItem({ className, ...props }: React.ComponentProps<"li">) {
  return <li data-slot="breadcrumb-item" className={cn("inline-flex items-center gap-1.5", className)} {...props} />
}

/** A link to an earlier page. Use `render` for your router's Link. */
function BreadcrumbLink({ className, render, ...props }: useRender.ComponentProps<"a">) {
  return useRender({
    defaultTagName: "a",
    props: mergeProps<"a">({ className: cn("tx-breadcrumb-link rounded-sm", className) }, props),
    render,
    state: { slot: "breadcrumb-link" },
  })
}

/** The page you are on. */
function BreadcrumbPage({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("tx-breadcrumb-page font-semibold", className)}
      {...props}
    />
  )
}

/** A small thread chevron between items. */
function BreadcrumbSeparator({ children, className, ...props }: React.ComponentProps<"li">) {
  return (
    <li data-slot="breadcrumb-separator" role="presentation" aria-hidden="true" className={cn("tx-breadcrumb-separator [&>svg]:size-3.5", className)} {...props}>
      {children ?? (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="rtl:rotate-180">
          <path d="m9 6 6 6-6 6" />
        </svg>
      )}
    </li>
  )
}

/** Stands in for hidden middle items. */
function BreadcrumbEllipsis({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span data-slot="breadcrumb-ellipsis" role="presentation" aria-hidden="true" className={cn("flex size-6 items-center justify-center", className)} {...props}>
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
        <circle cx="5" cy="12" r="1.8" />
        <circle cx="12" cy="12" r="1.8" />
        <circle cx="19" cy="12" r="1.8" />
      </svg>
      <span className="sr-only">More</span>
    </span>
  )
}

export { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator, BreadcrumbEllipsis }
