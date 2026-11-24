import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Checkbox } from "@/registry/threadcn/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/registry/threadcn/ui/radio-group"
import { Switch } from "@/registry/threadcn/ui/switch"

const stitches = (el: Element) => el.querySelectorAll(':scope > svg[data-slot="stitch"]')

test("Checkbox toggles on click and shows its check only when checked", async () => {
  render(<Checkbox aria-label="Gift wrap" />)
  const box = screen.getByRole("checkbox", { name: "Gift wrap" })
  expect(box).toHaveAttribute("data-slot", "checkbox")
  expect(box).toHaveClass("tx-checkbox")
  expect(stitches(box)).toHaveLength(1)
  expect(box.querySelector('[data-slot="checkbox-indicator"]')).toBeNull()

  await userEvent.click(box)
  expect(box).toHaveAttribute("aria-checked", "true")
  expect(box).toHaveAttribute("data-checked")
  expect(box.querySelector('[data-slot="checkbox-indicator"]')).not.toBeNull()
})

test("Radio group picks one item at a time", async () => {
  render(
    <RadioGroup defaultValue="regular" aria-label="Fit">
      <RadioGroupItem value="slim" aria-label="Slim" />
      <RadioGroupItem value="regular" aria-label="Regular" />
    </RadioGroup>,
  )
  const slim = screen.getByRole("radio", { name: "Slim" })
  const regular = screen.getByRole("radio", { name: "Regular" })
  expect(regular).toHaveAttribute("data-checked")
  expect(stitches(slim)).toHaveLength(1)

  await userEvent.click(slim)
  expect(slim).toHaveAttribute("aria-checked", "true")
  expect(regular).toHaveAttribute("aria-checked", "false")
  expect(slim.querySelector('[data-slot="radio-group-indicator"]')).not.toBeNull()
})

test("Switch flips on click and carries shadcn's size", async () => {
  render(<Switch aria-label="Express shipping" size="sm" />)
  const toggle = screen.getByRole("switch", { name: "Express shipping" })
  expect(toggle).toHaveAttribute("data-slot", "switch")
  expect(toggle).toHaveAttribute("data-size", "sm")
  expect(toggle.querySelector('[data-slot="switch-thumb"]')).not.toBeNull()
  expect(stitches(toggle)).toHaveLength(1)

  await userEvent.click(toggle)
  expect(toggle).toHaveAttribute("aria-checked", "true")
  expect(toggle).toHaveAttribute("data-checked")
})
