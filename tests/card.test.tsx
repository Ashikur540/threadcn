import { render, screen } from "@testing-library/react"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/registry/threadcn/ui/card"

test("renders every part with its data-slot and one stitch on the card", () => {
  render(
    <Card data-testid="card" className="w-80">
      <CardHeader>
        <CardTitle>Free repairs</CardTitle>
        <CardDescription>Send them back any time.</CardDescription>
        <CardAction>Edit</CardAction>
      </CardHeader>
      <CardContent>Body</CardContent>
      <CardFooter>Footer</CardFooter>
    </Card>,
  )
  const card = screen.getByTestId("card")
  expect(card).toHaveAttribute("data-slot", "card")
  expect(card).toHaveClass("tx-card", "w-80")
  expect(card.querySelectorAll(':scope > svg[data-slot="stitch"]')).toHaveLength(1)
  for (const slot of ["card-header", "card-title", "card-description", "card-action", "card-content", "card-footer"]) {
    expect(card.querySelector(`[data-slot="${slot}"]`)).not.toBeNull()
  }
})

test("Card takes shadcn's size prop", () => {
  render(<Card data-testid="small" size="sm" />)
  expect(screen.getByTestId("small")).toHaveAttribute("data-size", "sm")
})
