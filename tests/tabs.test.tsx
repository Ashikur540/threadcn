import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/threadcn/ui/tabs"

function Product({ variant }: { variant?: "default" | "line" | "leather" }) {
  return (
    <Tabs defaultValue="details">
      <TabsList variant={variant} aria-label="Product">
        <TabsTrigger value="details">Details</TabsTrigger>
        <TabsTrigger value="care">Care</TabsTrigger>
      </TabsList>
      <TabsContent value="details">Raw selvedge denim.</TabsContent>
      <TabsContent value="care">Wash inside out.</TabsContent>
    </Tabs>
  )
}

test("clicking a tab shows its panel", async () => {
  render(<Product />)
  expect(screen.getByRole("tab", { name: "Details" })).toHaveAttribute("data-active")
  expect(screen.getByRole("tabpanel")).toHaveTextContent("Raw selvedge denim.")

  await userEvent.click(screen.getByRole("tab", { name: "Care" }))
  expect(screen.getByRole("tab", { name: "Care" })).toHaveAttribute("aria-selected", "true")
  expect(screen.getByRole("tabpanel")).toHaveTextContent("Wash inside out.")
})

test("tabs and the panel are stitched; the list carries its variant", () => {
  render(<Product variant="leather" />)
  expect(screen.getByRole("tablist")).toHaveAttribute("data-variant", "leather")
  const tab = screen.getByRole("tab", { name: "Details" })
  expect(tab).toHaveClass("tx-tabs-trigger")
  expect(tab.querySelectorAll(':scope > svg[data-slot="stitch"]')).toHaveLength(1)
  expect(screen.getByRole("tabpanel").querySelectorAll(':scope > svg[data-slot="stitch"]')).toHaveLength(1)
})

test("the list defaults to shadcn's default variant", () => {
  render(<Product />)
  expect(screen.getByRole("tablist")).toHaveAttribute("data-variant", "default")
})
