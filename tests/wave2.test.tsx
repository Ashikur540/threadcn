import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Button } from "@/registry/threadcn/ui/button"
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/registry/threadcn/ui/context-menu"
import { Drawer, DrawerContent, DrawerDescription, DrawerTitle, DrawerTrigger } from "@/registry/threadcn/ui/drawer"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/registry/threadcn/ui/dropdown-menu"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/registry/threadcn/ui/hover-card"
import { Popover, PopoverContent, PopoverDescription, PopoverHeader, PopoverTitle, PopoverTrigger } from "@/registry/threadcn/ui/popover"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/registry/threadcn/ui/sheet"

const stitches = (el: Element) => el.querySelectorAll(':scope > svg[data-slot="stitch"]')

test("Popover opens a stitched pocket named by its title", async () => {
  render(
    <Popover>
      <PopoverTrigger render={<Button />}>Size help</PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>Find your size</PopoverTitle>
          <PopoverDescription>Measure a pair you love.</PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>,
  )
  await userEvent.click(screen.getByRole("button", { name: "Size help" }))
  const popup = await screen.findByRole("dialog", { name: "Find your size" })
  expect(popup).toHaveClass("tx-pocket")
  expect(stitches(popup)).toHaveLength(1)
})

test("Dropdown menu: stitched pocket, checkbox tick, radio dot, shortcut, destructive item", async () => {
  render(
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button />}>Order</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>Order IND-2041</DropdownMenuLabel>
          <DropdownMenuItem>
            Track parcel <DropdownMenuShortcut>⌘T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuCheckboxItem checked>Email updates</DropdownMenuCheckboxItem>
        <DropdownMenuRadioGroup value="standard">
          <DropdownMenuRadioItem value="standard">Standard</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">Cancel order</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>,
  )
  await userEvent.click(screen.getByRole("button", { name: "Order" }))
  const menu = await screen.findByRole("menu")
  expect(menu).toHaveClass("tx-pocket")
  expect(stitches(menu)).toHaveLength(1)
  const check = screen.getByRole("menuitemcheckbox", { name: "Email updates" })
  expect(check.querySelector(".tx-pocket-tick")).not.toBeNull()
  expect(screen.getByRole("menuitemradio", { name: "Standard" }).querySelector(".tx-pocket-dot")).not.toBeNull()
  expect(screen.getByRole("menuitem", { name: "Cancel order" })).toHaveAttribute("data-variant", "destructive")
  expect(screen.getByText("⌘T")).toHaveAttribute("data-slot", "dropdown-menu-shortcut")
})

test("Context menu opens on right-click", async () => {
  render(
    <ContextMenu>
      <ContextMenuTrigger>Right-click the jeans</ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Save for later</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>,
  )
  await userEvent.pointer({ keys: "[MouseRight]", target: screen.getByText("Right-click the jeans") })
  expect(await screen.findByRole("menuitem", { name: "Save for later" })).toBeInTheDocument()
  expect(screen.getByRole("menu")).toHaveClass("tx-pocket")
})

test("Hover card shows a stitched pocket on hover", async () => {
  render(
    <HoverCard>
      <HoverCardTrigger href="#">@indigo</HoverCardTrigger>
      <HoverCardContent>Small-batch denim since 2019.</HoverCardContent>
    </HoverCard>,
  )
  await userEvent.hover(screen.getByText("@indigo"))
  const card = (await screen.findByText("Small-batch denim since 2019.", {}, { timeout: 2000 })).closest('[data-slot="hover-card-content"]')!
  expect(card).toHaveClass("tx-pocket")
})

test("Sheet slides in from a side in the modal look and closes on Escape", async () => {
  render(
    <Sheet>
      <SheetTrigger render={<Button />}>Filters</SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
          <SheetDescription>Narrow the shop.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>,
  )
  await userEvent.click(screen.getByRole("button", { name: "Filters" }))
  const sheet = await screen.findByRole("dialog", { name: "Filters" })
  expect(sheet).toHaveClass("tx-modal")
  expect(sheet).toHaveAttribute("data-side", "left")
  expect(stitches(sheet)).toHaveLength(1)
  await userEvent.keyboard("{Escape}")
  await waitFor(() => expect(screen.queryByRole("dialog")).not.toBeInTheDocument())
})

test("Drawer opens a stitched panel named by its title", async () => {
  render(
    <Drawer>
      <DrawerTrigger render={<Button />}>Bag</DrawerTrigger>
      <DrawerContent>
        <DrawerTitle>Your bag</DrawerTitle>
        <DrawerDescription>2 items</DrawerDescription>
      </DrawerContent>
    </Drawer>,
  )
  await userEvent.click(screen.getByRole("button", { name: "Bag" }))
  const drawer = await screen.findByRole("dialog", { name: "Your bag" })
  expect(drawer).toHaveClass("tx-modal")
  expect(stitches(drawer)).toHaveLength(1)
})
