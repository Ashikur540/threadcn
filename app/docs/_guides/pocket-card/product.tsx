import { Button } from "@/registry/threadcn/ui/button"
import {
  PocketCard,
  PocketCardAction,
  PocketCardContent,
  PocketCardDescription,
  PocketCardFooter,
  PocketCardHeader,
  PocketCardTag,
  PocketCardTitle,
} from "@/registry/threadcn/ui/pocket-card"

export default function PocketCardProduct() {
  return (
    <PocketCard className="w-full max-w-sm">
      <PocketCardTag>W32 · L34</PocketCardTag>
      <PocketCardHeader>
        <PocketCardTitle>Model 08 Straight</PocketCardTitle>
        <PocketCardAction>$128</PocketCardAction>
      </PocketCardHeader>
      <PocketCardDescription>Deep indigo, unwashed. Fades to your shape in about 6 months.</PocketCardDescription>
      <PocketCardContent>
        <ul className="grid list-disc gap-1 pl-5 text-sm">
          <li>14 oz selvedge cotton</li>
          <li>Copper rivets, button fly</li>
          <li>Free repairs, forever</li>
        </ul>
      </PocketCardContent>
      <PocketCardFooter>
        <Button>Add to bag</Button>
        <Button variant="ghost">Size guide</Button>
      </PocketCardFooter>
    </PocketCard>
  )
}
