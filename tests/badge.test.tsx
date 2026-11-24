import { render, screen } from "@testing-library/react"
import { Badge } from "@/registry/threadcn/ui/badge"

test("renders a span with shadcn-style data attributes and one hidden stitch", () => {
  render(<Badge variant="secondary">Raw denim</Badge>)
  const badge = screen.getByText("Raw denim").closest('[data-slot="badge"]')!
  expect(badge.tagName).toBe("SPAN")
  expect(badge).toHaveAttribute("data-variant", "secondary")
  expect(badge).toHaveClass("tx-badge", "tx-badge-secondary")
  expect(badge.querySelectorAll(':scope > svg[data-slot="stitch"]')).toHaveLength(1)
})

test("your Tailwind class merges in", () => {
  render(<Badge className="px-1">14 oz</Badge>)
  expect(screen.getByText("14 oz").closest('[data-slot="badge"]')).toHaveClass("px-1")
})

test("render turns it into a link, like shadcn", () => {
  render(<Badge render={<a href="/sale" />}>Sale</Badge>)
  const link = screen.getByRole("link", { name: "Sale" })
  expect(link).toHaveAttribute("data-slot", "badge")
  expect(link.querySelectorAll('svg[data-slot="stitch"]')).toHaveLength(1)
})
