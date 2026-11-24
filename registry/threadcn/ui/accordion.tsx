"use client"

import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion"
import { cn } from "cn"

// Same parts and API as shadcn's Base UI Accordion. Base UI handles the
// keyboard, open state and screen-reader wiring. The look is in styles/accordion.css.

type WithClassName<T> = Omit<T, "className"> & { className?: string }

/**
 * Stacked questions that open one answer at a time (pass `multiple` for more).
 *
 * @example
 * <Accordion>
 *   <AccordionItem value="fit">
 *     <AccordionTrigger>How does it fit?</AccordionTrigger>
 *     <AccordionContent>True to size.</AccordionContent>
 *   </AccordionItem>
 * </Accordion>
 */
function Accordion({ className, ...props }: WithClassName<AccordionPrimitive.Root.Props>) {
  return <AccordionPrimitive.Root data-slot="accordion" className={cn("tx-accordion flex w-full flex-col", className)} {...props} />
}

function AccordionItem({ className, ...props }: WithClassName<AccordionPrimitive.Item.Props>) {
  return <AccordionPrimitive.Item data-slot="accordion-item" className={cn("tx-accordion-item", className)} {...props} />
}

function AccordionTrigger({ className, children, ...props }: WithClassName<AccordionPrimitive.Trigger.Props>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "tx-accordion-trigger relative flex flex-1 cursor-pointer items-start justify-between gap-4 rounded-md py-4 text-left text-[15px] font-semibold aria-disabled:cursor-not-allowed aria-disabled:opacity-50",
          className,
        )}
        {...props}
      >
        {children}
        <span data-slot="accordion-trigger-icon" aria-hidden="true" className="tx-accordion-icon mt-1.5 size-2 shrink-0" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

/** The answer. It slides open to its own height (no sliding under reduced motion). */
function AccordionContent({ className, children, ...props }: WithClassName<AccordionPrimitive.Panel.Props>) {
  return (
    <AccordionPrimitive.Panel data-slot="accordion-content" className="tx-accordion-content overflow-hidden text-sm" {...props}>
      <div className={cn("pb-4 [&_a]:underline [&_a]:underline-offset-3 [&_p:not(:last-child)]:mb-4", className)}>{children}</div>
    </AccordionPrimitive.Panel>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
