import { Button } from "@/registry/threadcn/ui/button"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/registry/threadcn/ui/drawer"

const directions = [
  { direction: "down", label: "Bottom", edge: "bottom" },
  { direction: "up", label: "Top", edge: "top" },
  { direction: "left", label: "Left", edge: "left" },
  { direction: "right", label: "Right", edge: "right" },
] as const

export default function DrawerDirections() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {directions.map(({ direction, label, edge }) => (
        <Drawer key={direction} swipeDirection={direction}>
          <DrawerTrigger render={<Button variant="secondary" />}>{label}</DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto flex min-h-0 w-full max-w-md flex-1 flex-col">
              <DrawerHeader>
                <DrawerTitle>Repair drop-off</DrawerTitle>
                <DrawerDescription>
                  This drawer sits on the {edge} edge. Swipe it {direction} to close it.
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <DrawerClose render={<Button />}>Done</DrawerClose>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
      ))}
    </div>
  )
}
