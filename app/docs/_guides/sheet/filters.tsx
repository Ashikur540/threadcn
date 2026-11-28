import { Button } from "@/registry/threadcn/ui/button"
import { Input } from "@/registry/threadcn/ui/input"
import { Label } from "@/registry/threadcn/ui/label"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/registry/threadcn/ui/sheet"
import { Switch } from "@/registry/threadcn/ui/switch"

export default function SheetFilters() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>Filters</SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
          <SheetDescription>Narrow the shop to jeans that fit you.</SheetDescription>
        </SheetHeader>
        <div className="grid gap-1.5">
          <Label htmlFor="sheet-filters-waist">Waist (inches)</Label>
          <Input id="sheet-filters-waist" type="number" defaultValue={32} />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="sheet-filters-inseam">Inseam (inches)</Label>
          <Input id="sheet-filters-inseam" type="number" defaultValue={30} />
        </div>
        <Label>
          <Switch defaultChecked /> In stock only
        </Label>
        <Label>
          <Switch /> Free repairs included
        </Label>
        <SheetFooter>
          <SheetClose render={<Button />}>Show 24 jeans</SheetClose>
          <SheetClose render={<Button variant="secondary" />}>Clear filters</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
