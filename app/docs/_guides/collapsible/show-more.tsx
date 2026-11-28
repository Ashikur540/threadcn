import { Button } from "@/registry/threadcn/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/registry/threadcn/ui/collapsible"

function Chevron() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

export default function CollapsibleShowMore() {
  return (
    <Collapsible className="grid w-full max-w-sm gap-3 text-sm">
      <p className="text-base font-semibold">Model 08 Straight</p>
      <p>Raw selvedge denim from Indigo Supply, 14 oz, with a button fly and copper rivets.</p>
      <CollapsibleContent className="grid gap-3">
        <p>The fabric is woven on old shuttle looms, so the edge of each leg is a clean, finished selvedge line.</p>
        <p>They start stiff and dark. After a few months of wear they soften and fade where you move most.</p>
      </CollapsibleContent>
      <CollapsibleTrigger
        render={<Button variant="ghost" size="sm" />}
        className="justify-self-start [&[data-panel-open]>svg]:rotate-180"
      >
        <span className="in-data-panel-open:hidden">Show more</span>
        <span className="hidden in-data-panel-open:inline">Show less</span>
        <Chevron />
      </CollapsibleTrigger>
    </Collapsible>
  )
}
