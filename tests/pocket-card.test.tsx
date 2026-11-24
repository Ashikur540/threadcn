import { render, screen } from "@testing-library/react"
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

test("renders every part with its data-slot, plus two hidden rivets", () => {
  render(
    <PocketCard data-testid="pocket" className="w-96">
      <PocketCardTag>W32 · L34</PocketCardTag>
      <PocketCardHeader>
        <PocketCardTitle>Model 08 Straight</PocketCardTitle>
        <PocketCardAction>$128</PocketCardAction>
      </PocketCardHeader>
      <PocketCardDescription>Deep indigo, unwashed.</PocketCardDescription>
      <PocketCardContent>Sizes</PocketCardContent>
      <PocketCardFooter>Add to bag</PocketCardFooter>
    </PocketCard>,
  )
  const pocket = screen.getByTestId("pocket")
  expect(pocket).toHaveAttribute("data-slot", "pocket-card")
  expect(pocket).toHaveClass("tx-pocket-card", "w-96")
  const rivets = pocket.querySelectorAll('[data-slot="pocket-card-rivet"]')
  expect(rivets).toHaveLength(2)
  rivets.forEach((r) => expect(r).toHaveAttribute("aria-hidden", "true"))
  for (const slot of ["tag", "header", "title", "action", "description", "content", "footer"]) {
    expect(pocket.querySelector(`[data-slot="pocket-card-${slot}"]`), slot).not.toBeNull()
  }
})
