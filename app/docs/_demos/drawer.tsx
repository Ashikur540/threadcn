import { Button } from "@/registry/threadcn/ui/button"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/registry/threadcn/ui/drawer"

export default function DrawerDemo() {
  return (
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
  )
}
