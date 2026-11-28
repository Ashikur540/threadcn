import { Button } from "@/registry/threadcn/ui/button"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/registry/threadcn/ui/sheet"

export default function SheetNoCloseButton() {
  return (
    <Sheet>
      <SheetTrigger render={<Button />}>Your bag</SheetTrigger>
      <SheetContent side="right" showCloseButton={false}>
        <SheetHeader>
          <SheetTitle>Your bag</SheetTitle>
          <SheetDescription>1 item · free repairs included</SheetDescription>
        </SheetHeader>
        <div className="flex items-baseline justify-between gap-4 text-sm">
          <span>Model 08 jeans, waist 32</span>
          <span className="font-bold">$128</span>
        </div>
        <SheetFooter>
          <SheetClose render={<Button />}>Check out</SheetClose>
          <SheetClose render={<Button variant="secondary" />}>Keep shopping</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
