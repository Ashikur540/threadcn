import { render, screen } from "@testing-library/react"
import { Patch, PatchDot } from "@/registry/threadcn/ui/patch"

test("a leather brand patch with one hidden stitch", () => {
  render(<Patch>Indigo Supply</Patch>)
  const patch = screen.getByText("Indigo Supply").closest('[data-slot="patch"]')!
  expect(patch).toHaveAttribute("data-variant", "default")
  expect(patch).toHaveClass("tx-patch")
  expect(patch.querySelectorAll(':scope > svg[data-slot="stitch"]')).toHaveLength(1)
})

test("render turns it into a link", () => {
  render(<Patch render={<a href="/" />}>Indigo Supply</Patch>)
  expect(screen.getByRole("link", { name: "Indigo Supply" })).toHaveAttribute("data-slot", "patch")
})

test("the round variant holds a dot with a number", () => {
  render(
    <Patch variant="round">
      <PatchDot>42</PatchDot>
      Orders this week
    </Patch>,
  )
  expect(screen.getByText("42")).toHaveAttribute("data-slot", "patch-dot")
  expect(screen.getByText("Orders this week").closest('[data-slot="patch"]')).toHaveClass("tx-patch-round")
})
