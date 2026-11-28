import { Button } from "@/registry/threadcn/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/registry/threadcn/ui/sheet"

const sides = [
  { side: "top", label: "Top" },
  { side: "right", label: "Right" },
  { side: "bottom", label: "Bottom" },
  { side: "left", label: "Left" },
] as const

export default function SheetSides() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {sides.map(({ side, label }) => (
        <Sheet key={side}>
          <SheetTrigger render={<Button variant="secondary" />}>{label}</SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>Free repairs for life</SheetTitle>
              <SheetDescription>This sheet came in from the {side} edge.</SheetDescription>
            </SheetHeader>
            <p className="text-sm">Every pair of Model 08 jeans from Indigo Supply comes with free repairs. Rips, worn knees, broken buttons.</p>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
