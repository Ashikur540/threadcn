import { render, screen } from "@testing-library/react"
import { Label } from "@/registry/threadcn/ui/label"

test("names its field and carries data-slot", () => {
  render(
    <>
      <Label htmlFor="email">Email</Label>
      <input id="email" />
    </>,
  )
  expect(screen.getByLabelText("Email")).toHaveAttribute("id", "email")
  expect(screen.getByText("Email")).toHaveAttribute("data-slot", "label")
})
