import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/registry/threadcn/ui/select"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/registry/threadcn/ui/tooltip"

const items = [
  { label: "Standard, 5 to 7 days", value: "standard" },
  { label: "Express", value: "express" },
]

function Delivery() {
  return (
    <Select items={items} defaultValue="standard">
      <SelectTrigger aria-label="Delivery">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {items.map((i) => (
          <SelectItem key={i.value} value={i.value}>
            {i.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

test("the Select trigger wears the shared field look and shows the value", () => {
  render(<Delivery />)
  const trigger = screen.getByRole("combobox", { name: "Delivery" })
  expect(trigger).toHaveAttribute("data-slot", "select-trigger")
  expect(trigger).toHaveClass("tx-field", "tx-select-trigger")
  expect(trigger).toHaveTextContent("Standard, 5 to 7 days")
})

test("picking an option updates the trigger; the list is stitched and the pick gets its mark", async () => {
  render(<Delivery />)
  await userEvent.click(screen.getByRole("combobox", { name: "Delivery" }))
  const list = await screen.findByRole("listbox")
  const popup = list.closest('[data-slot="select-content"]')!
  expect(popup.querySelectorAll(':scope > svg[data-slot="stitch"]')).toHaveLength(1)
  expect(screen.getByRole("option", { name: "Standard, 5 to 7 days" }).querySelector('[data-slot="select-item-indicator"]')).not.toBeNull()

  // We draw the chevron and the cross-stitch with CSS, so Base UI's default ▼ and ✔️ must not render.
  expect(screen.getByRole("combobox", { name: "Delivery" }).querySelector('[data-slot="select-icon"]')).toBeEmptyDOMElement()
  expect(popup.querySelector('[data-slot="select-item-indicator"]')).toBeEmptyDOMElement()

  await userEvent.click(screen.getByRole("option", { name: "Express" }))
  await waitFor(() => expect(screen.getByRole("combobox", { name: "Delivery" })).toHaveTextContent("Express"))
})

test("the Tooltip shows a stitched leather tag on hover", async () => {
  render(
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>Care</TooltipTrigger>
        <TooltipContent>Wash inside out, cold</TooltipContent>
      </Tooltip>
    </TooltipProvider>,
  )
  await userEvent.hover(screen.getByText("Care"))
  const tip = (await screen.findByText("Wash inside out, cold")).closest('[data-slot="tooltip-content"]')!
  expect(tip).toHaveClass("tx-tooltip")
  expect(tip.querySelectorAll(':scope > svg[data-slot="stitch"]')).toHaveLength(1)
})
