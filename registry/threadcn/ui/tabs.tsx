"use client"

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

import { Stitch } from "@/registry/threadcn/ui/stitch"

// Same parts and API as shadcn's Base UI Tabs. Base UI handles arrow keys and
// screen-reader roles. The look is in styles/tabs.css.

type WithClassName<T> = Omit<T, "className"> & { className?: string }

/**
 * Sewn-on label tabs. The active tab is stitched onto its panel.
 *
 * @example
 * <Tabs defaultValue="details">
 *   <TabsList variant="leather">
 *     <TabsTrigger value="details">Details</TabsTrigger>
 *     <TabsTrigger value="care">Care</TabsTrigger>
 *   </TabsList>
 *   <TabsContent value="details">Raw selvedge denim.</TabsContent>
 *   <TabsContent value="care">Wash inside out.</TabsContent>
 * </Tabs>
 */
function Tabs({ className, orientation = "horizontal", ...props }: WithClassName<TabsPrimitive.Root.Props>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-orientation={orientation}
      orientation={orientation}
      className={cn("tx-tabs flex data-[orientation=horizontal]:flex-col data-[orientation=vertical]:gap-3", className)}
      {...props}
    />
  )
}

const tabsListVariants = cva(
  "tx-tabs-list relative z-[1] flex flex-wrap gap-2 data-[orientation=horizontal]:items-end data-[orientation=horizontal]:px-2.5 data-[orientation=vertical]:flex-col",
  {
    variants: {
      // default: sewn-on tabs with a soft thread seam
      // line:    flat tabs with a thread underline (shadcn's "line")
      // leather: the active tab is a leather strap folded over the panel
      variant: {
        default: "",
        line: "tx-tabs-list-line",
        leather: "tx-tabs-list-leather",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

function TabsList({ className, variant = "default", ...props }: WithClassName<TabsPrimitive.List.Props> & VariantProps<typeof tabsListVariants>) {
  return <TabsPrimitive.List data-slot="tabs-list" data-variant={variant} className={cn(tabsListVariants({ variant }), className)} {...props} />
}

function TabsTrigger({ className, children, ...props }: WithClassName<TabsPrimitive.Tab.Props>) {
  return (
    <TabsPrimitive.Tab
      data-slot="tabs-trigger"
      className={cn(
        "tx-tabs-trigger relative inline-flex cursor-pointer items-center justify-center gap-1.5 px-[18px] py-2.5 text-sm font-semibold whitespace-nowrap data-disabled:cursor-not-allowed [&_svg:not([data-slot=stitch])]:pointer-events-none [&_svg:not([data-slot=stitch])]:shrink-0",
        className,
      )}
      {...props}
    >
      <Stitch />
      {children}
    </TabsPrimitive.Tab>
  )
}

function TabsContent({ className, children, ...props }: WithClassName<TabsPrimitive.Panel.Props>) {
  return (
    <TabsPrimitive.Panel data-slot="tabs-content" className={cn("tx-tabs-content relative flex-1 p-[18px] text-sm", className)} {...props}>
      <Stitch />
      {children}
    </TabsPrimitive.Panel>
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants }
