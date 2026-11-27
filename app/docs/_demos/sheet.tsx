import { Button } from "@/registry/threadcn/ui/button"
import { Label } from "@/registry/threadcn/ui/label"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/registry/threadcn/ui/sheet"
import { Switch } from "@/registry/threadcn/ui/switch"

export default function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>Filters</SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
          <SheetDescription>Narrow the shop to what fits you.</SheetDescription>
        </SheetHeader>
        <Label>
          <Switch defaultChecked /> In stock only
        </Label>
        <Label>
          <Switch /> Waist 32 only
        </Label>
        <SheetFooter>
          <SheetClose render={<Button />}>Show 24 jeans</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
