import { render, screen } from "@testing-library/react"
import { Input } from "@/registry/threadcn/ui/input"
import { Textarea } from "@/registry/threadcn/ui/textarea"

test("Input is a plain input with the shared field look", () => {
  render(<Input type="email" placeholder="you@studio.dev" className="max-w-xs" />)
  const input = screen.getByPlaceholderText("you@studio.dev")
  expect(input.tagName).toBe("INPUT")
  expect(input).toHaveAttribute("type", "email")
  expect(input).toHaveAttribute("data-slot", "input")
  expect(input).toHaveClass("tx-canvas", "max-w-xs")
})

test("Input passes aria-invalid and disabled through", () => {
  render(<Input aria-invalid="true" disabled placeholder="x" />)
  const input = screen.getByPlaceholderText("x")
  expect(input).toHaveAttribute("aria-invalid", "true")
  expect(input).toBeDisabled()
})

test("Textarea shares the field look", () => {
  render(<Textarea placeholder="Where is the tear?" />)
  const area = screen.getByPlaceholderText("Where is the tear?")
  expect(area.tagName).toBe("TEXTAREA")
  expect(area).toHaveAttribute("data-slot", "textarea")
  expect(area).toHaveClass("tx-canvas")
})
