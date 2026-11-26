"use client"

import { Collapsible as CollapsiblePrimitive } from "@base-ui/react/collapsible"

/**
 * A trigger that shows and hides a panel. Same API as shadcn's Collapsible.
 * It has no look of its own: style the trigger and panel however you like
 * (for example render the trigger as a <Button>).
 *
 * @example
 * <Collapsible>
 *   <CollapsibleTrigger render={<Button variant="ghost" />}>Care details</CollapsibleTrigger>
 *   <CollapsibleContent>Wash cold, inside out.</CollapsibleContent>
 * </Collapsible>
 */
function Collapsible({ ...props }: CollapsiblePrimitive.Root.Props) {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />
}

function CollapsibleTrigger({ ...props }: CollapsiblePrimitive.Trigger.Props) {
  return <CollapsiblePrimitive.Trigger data-slot="collapsible-trigger" {...props} />
}

function CollapsibleContent({ ...props }: CollapsiblePrimitive.Panel.Props) {
  return <CollapsiblePrimitive.Panel data-slot="collapsible-content" {...props} />
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
