"use client"

import { Button } from "@/registry/threadcn/ui/button"
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuSeparator, ContextMenuShortcut, ContextMenuTrigger } from "@/registry/threadcn/ui/context-menu"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/registry/threadcn/ui/drawer"
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
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/registry/threadcn/ui/dropdown-menu"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/registry/threadcn/ui/hover-card"
import { Label } from "@/registry/threadcn/ui/label"
import { Popover, PopoverContent, PopoverDescription, PopoverHeader, PopoverTitle, PopoverTrigger } from "@/registry/threadcn/ui/popover"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/registry/threadcn/ui/sheet"
import { Switch } from "@/registry/threadcn/ui/switch"

export function Wave2Demo() {
  return (
    <div className="grid gap-6">
      <div className="flex flex-wrap items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger render={<Button variant="secondary" />}>Order IND-2041</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuLabel>Order</DropdownMenuLabel>
              <DropdownMenuItem>
                Track parcel <DropdownMenuShortcut>⌘T</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>Download receipt</DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Book a repair</DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>Rip or hole</DropdownMenuItem>
                  <DropdownMenuItem>Broken button</DropdownMenuItem>
                  <DropdownMenuItem>Hemming</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem defaultChecked>Email updates</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>Text updates</DropdownMenuCheckboxItem>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup defaultValue="standard">
              <DropdownMenuLabel>Delivery</DropdownMenuLabel>
              <DropdownMenuRadioItem value="standard">Standard</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="express">Express</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">Cancel order</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Popover>
          <PopoverTrigger render={<Button variant="outline" />}>Size help</PopoverTrigger>
          <PopoverContent>
            <PopoverHeader>
              <PopoverTitle>Find your size</PopoverTitle>
              <PopoverDescription>Lay a pair you love flat and measure across the waist.</PopoverDescription>
            </PopoverHeader>
            <Label>
              <Switch size="sm" /> Show sizes in cm
            </Label>
          </PopoverContent>
        </Popover>

        <p className="text-sm">
          Made by{" "}
          <HoverCard>
            <HoverCardTrigger href="#" className="font-semibold underline decoration-dashed underline-offset-4">
              @indigo
            </HoverCardTrigger>
            <HoverCardContent>
              <p className="font-(family-name:--tx-font-heading) text-base font-bold">Indigo Supply</p>
              <p className="mt-1 text-(--tx-muted-foreground)">Small-batch selvedge denim since 2019. Free repairs, forever.</p>
            </HoverCardContent>
          </HoverCard>
        </p>

        <Sheet>
          <SheetTrigger render={<Button variant="outline" />}>Filters</SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
              <SheetDescription>Narrow the shop to what fits you.</SheetDescription>
            </SheetHeader>
            <Label><Switch defaultChecked /> In stock only</Label>
            <Label><Switch /> Free repairs included</Label>
            <SheetFooter>
              <SheetClose render={<Button />}>Show 24 jeans</SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>

        <Drawer showSwipeHandle>
          <DrawerTrigger render={<Button />}>Your bag</DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Your bag</DrawerTitle>
              <DrawerDescription>2 items · free repairs included</DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <Button>Check out</Button>
              <DrawerClose render={<Button variant="secondary" />}>Keep shopping</DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>

      <ContextMenu>
        <ContextMenuTrigger className="grid h-28 max-w-md place-items-center rounded-xl border-2 border-dashed border-(--tx-thread) text-sm">
          Right-click (or long-press) here
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>
            Save for later <ContextMenuShortcut>⌘S</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>Share</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem variant="destructive">Remove from bag</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  )
}
