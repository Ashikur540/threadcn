import { Button } from "@/registry/threadcn/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/registry/threadcn/ui/collapsible"

export default function CollapsibleDemo() {
  return (
    <Collapsible className="w-full max-w-sm">
      <CollapsibleTrigger render={<Button variant="outline" size="sm" />}>Show care details</CollapsibleTrigger>
      <CollapsibleContent className="pt-3 text-sm">Wash cold, inside out. Hang to dry. Never tumble dry.</CollapsibleContent>
    </Collapsible>
  )
}
