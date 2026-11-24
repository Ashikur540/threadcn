import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/registry/threadcn/ui/accordion"
import { Avatar, AvatarFallback, AvatarGroup, AvatarGroupCount, AvatarImage } from "@/registry/threadcn/ui/avatar"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/registry/threadcn/ui/breadcrumb"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/registry/threadcn/ui/collapsible"
import { Kbd, KbdGroup } from "@/registry/threadcn/ui/kbd"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/registry/threadcn/ui/pagination"
import { ScrollArea } from "@/registry/threadcn/ui/scroll-area"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/registry/threadcn/ui/table"

test("Accordion opens a panel from its trigger", async () => {
  render(
    <Accordion>
      <AccordionItem value="fit">
        <AccordionTrigger>How does it fit?</AccordionTrigger>
        <AccordionContent>True to size.</AccordionContent>
      </AccordionItem>
    </Accordion>,
  )
  const trigger = screen.getByRole("button", { name: "How does it fit?" })
  expect(trigger).toHaveClass("tx-accordion-trigger")
  expect(trigger).toHaveAttribute("aria-expanded", "false")
  await userEvent.click(trigger)
  expect(trigger).toHaveAttribute("aria-expanded", "true")
  expect(screen.getByText("True to size.")).toBeVisible()
})

test("Collapsible shows and hides its content", async () => {
  render(
    <Collapsible>
      <CollapsibleTrigger>Care details</CollapsibleTrigger>
      <CollapsibleContent>Wash cold.</CollapsibleContent>
    </Collapsible>,
  )
  expect(screen.queryByText("Wash cold.")).toBeNull()
  await userEvent.click(screen.getByRole("button", { name: "Care details" }))
  expect(screen.getByText("Wash cold.")).toBeInTheDocument()
})

test("Breadcrumb is a labelled nav that marks the current page", () => {
  render(
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Shop</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Model 08</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>,
  )
  expect(screen.getByRole("navigation", { name: "breadcrumb" })).toBeInTheDocument()
  expect(screen.getByRole("link", { name: "Shop" })).toHaveAttribute("data-slot", "breadcrumb-link")
  expect(screen.getByText("Model 08")).toHaveAttribute("aria-current", "page")
})

test("Pagination marks the current page with the leather patch", () => {
  render(
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>,
  )
  const current = screen.getByRole("link", { name: "2" })
  expect(current).toHaveAttribute("aria-current", "page")
  expect(current).toHaveAttribute("data-variant", "leather")
  expect(screen.getByRole("link", { name: "Go to next page" })).toHaveAttribute("data-variant", "ghost")
})

test("Avatar shows a stitched ring and falls back to initials", async () => {
  render(
    <AvatarGroup>
      <Avatar data-testid="av">
        <AvatarImage src="/missing.jpg" alt="Rafi" />
        <AvatarFallback>RA</AvatarFallback>
      </Avatar>
      <AvatarGroupCount>+3</AvatarGroupCount>
    </AvatarGroup>,
  )
  const avatar = screen.getByTestId("av")
  expect(avatar).toHaveClass("tx-avatar")
  expect(avatar.querySelectorAll(':scope > svg[data-slot="stitch"]')).toHaveLength(1)
  expect(await screen.findByText("RA")).toHaveAttribute("data-slot", "avatar-fallback")
})

test("Table keeps shadcn's parts and the selected-row hook", () => {
  render(
    <Table>
      <TableCaption>Recent repairs</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Order</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow data-state="selected">
          <TableCell>IND-2041</TableCell>
        </TableRow>
      </TableBody>
    </Table>,
  )
  expect(screen.getByRole("table")).toHaveClass("tx-table")
  expect(screen.getByText("IND-2041").closest("tr")).toHaveAttribute("data-state", "selected")
  expect(screen.getByRole("table").parentElement).toHaveAttribute("data-slot", "table-container")
})

test("Kbd renders key caps", () => {
  render(
    <KbdGroup>
      <Kbd>⌘</Kbd>
      <Kbd>K</Kbd>
    </KbdGroup>,
  )
  expect(screen.getByText("K").tagName).toBe("KBD")
  expect(screen.getByText("K")).toHaveClass("tx-kbd")
})

test("Scroll Area wraps content in a viewport", () => {
  render(
    <ScrollArea className="h-20">
      <p>Long care guide</p>
    </ScrollArea>,
  )
  expect(screen.getByText("Long care guide").closest('[data-slot="scroll-area-viewport"]')).not.toBeNull()
})
