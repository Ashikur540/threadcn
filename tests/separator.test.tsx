import { render, screen } from "@testing-library/react"
import { Separator } from "@/registry/threadcn/ui/separator"

test("is a horizontal separator by default", () => {
  render(<Separator />)
  const line = screen.getByRole("separator")
  expect(line).toHaveAttribute("data-slot", "separator")
  expect(line).toHaveAttribute("data-orientation", "horizontal")
  expect(line).toHaveClass("tx-separator")
})

test("can stand vertical", () => {
  render(<Separator orientation="vertical" />)
  expect(screen.getByRole("separator")).toHaveAttribute("aria-orientation", "vertical")
})
