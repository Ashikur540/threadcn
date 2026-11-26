import { render, screen } from "@testing-library/react"
import { Button } from "@/registry/threadcn/ui/button"

test("renders a button with shadcn-style data attributes", () => {
  render(<Button>Add to bag</Button>)
  const button = screen.getByRole("button", { name: "Add to bag" })
  expect(button).toHaveAttribute("data-slot", "button")
  expect(button).toHaveAttribute("data-variant", "default")
  expect(button).toHaveAttribute("data-size", "default")
})

test("holds exactly one hidden stitch", () => {
  render(<Button>Save</Button>)
  const stitches = screen.getByRole("button").querySelectorAll(':scope > svg[data-slot="stitch"]')
  expect(stitches).toHaveLength(1)
  expect(stitches[0]).toHaveAttribute("aria-hidden", "true")
})

test("a variant sets its look class and data attribute", () => {
  render(<Button variant="secondary">Book a repair</Button>)
  const button = screen.getByRole("button")
  expect(button).toHaveAttribute("data-variant", "secondary")
  expect(button).toHaveClass("tx-button", "tx-button-secondary")
})

test("your Tailwind class replaces the clashing default class", () => {
  render(<Button className="px-2">Save</Button>)
  const button = screen.getByRole("button")
  expect(button).toHaveClass("px-2")
  expect(button).not.toHaveClass("px-[22px]")
})

test("the link variant drops the patch padding", () => {
  render(<Button variant="link">Care guide</Button>)
  expect(screen.getByRole("button")).not.toHaveClass("min-h-11")
})

test("disabled sets Base UI's data-disabled", () => {
  render(<Button disabled>Save</Button>)
  expect(screen.getByRole("button")).toHaveAttribute("data-disabled")
})

test.each([
  ["xs", "min-h-8"],
  ["icon-xs", "size-8"],
  ["icon-sm", "size-9"],
  ["icon-lg", "size-13"],
] as const)("shadcn's %s size works", (size, cls) => {
  render(<Button size={size}>x</Button>)
  const button = screen.getByRole("button")
  expect(button).toHaveAttribute("data-size", size)
  expect(button).toHaveClass(cls)
})

test("an icon with its own size- class keeps it", () => {
  render(<Button>x</Button>)
  expect(screen.getByRole("button").className).toContain(":not([class*='size-'])")
})
