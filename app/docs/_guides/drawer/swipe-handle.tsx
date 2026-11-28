import { Button } from "@/registry/threadcn/ui/button"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/registry/threadcn/ui/drawer"

export default function DrawerSwipeHandleExample() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Drawer showSwipeHandle>
        <DrawerTrigger render={<Button />}>Your bag</DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto flex min-h-0 w-full max-w-md flex-1 flex-col">
            <DrawerHeader>
              <DrawerTitle>Your bag</DrawerTitle>
              <DrawerDescription>Model 08 jeans, waist 32 · free repairs included</DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <DrawerClose render={<Button />}>Check out</DrawerClose>
              <DrawerClose render={<Button variant="secondary" />}>Keep shopping</DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
      <Drawer showSwipeHandle swipeDirection="right">
        <DrawerTrigger render={<Button variant="secondary" />}>Size guide</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Size guide</DrawerTitle>
            <DrawerDescription>Measure a pair that fits you well, lying flat.</DrawerDescription>
          </DrawerHeader>
          <p className="px-6 text-sm">Waist 32 fits a flat waist of 16 inches across. Model 08 runs true to size.</p>
          <DrawerFooter>
            <DrawerClose render={<Button variant="secondary" />}>Close</DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
