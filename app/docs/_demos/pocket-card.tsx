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

export default function PocketCardDemo() {
  return (
    <PocketCard className="w-full max-w-sm">
      <PocketCardTag>W32 · L34</PocketCardTag>
      <PocketCardHeader>
        <PocketCardTitle>Model 08 Straight</PocketCardTitle>
        <PocketCardAction>$128</PocketCardAction>
      </PocketCardHeader>
      <PocketCardDescription>Deep indigo, unwashed. Fades to your shape in about 6 months.</PocketCardDescription>
      <PocketCardContent className="text-sm">Free repairs, forever.</PocketCardContent>
      <PocketCardFooter>
        <Button>Add to bag</Button>
      </PocketCardFooter>
    </PocketCard>
  )
}
