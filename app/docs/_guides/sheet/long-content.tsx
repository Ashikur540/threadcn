import { Button } from "@/registry/threadcn/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/registry/threadcn/ui/sheet"

const steps = [
  ["Wait before the first wash", "Wear your Model 08 for at least six weeks first. The creases you make now become your fades later."],
  ["Turn them inside out", "Always wash inside out. The indigo on the outside stays dark and the fades stay sharp."],
  ["Use cold water", "Wash at 30°C or below. Hot water shrinks the cotton and pulls out the dye."],
  ["Skip the dryer", "Hang them by the waist to dry. A dryer can shrink the waist by a full size."],
  ["Spot clean small marks", "For a small stain, dab it with a damp cloth and a little mild soap. No need to wash the whole pair."],
  ["Air them out", "Hang them outside overnight to freshen up between washes."],
  ["Mind the crotch", "This is where most jeans wear through first. If it starts to thin, send them in before it tears."],
  ["Store them folded", "Fold them over a hanger bar, not by the belt loops, so the loops don't stretch."],
  ["Rinse after the beach", "Salt water and sand wear the cotton fast. Rinse them in cold water the same day."],
  ["Watch your wallet pocket", "A thick wallet in the back pocket rubs a hole over time. Swap sides now and then."],
  ["Let the fades come slowly", "Good fades take a year or more of wear. Sanding or bleaching them only thins the fabric."],
  ["Send them for repair", "Rips, worn knees and broken buttons are free to fix at Indigo Supply for as long as you own the jeans."],
]

export default function SheetLongContent() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="secondary" />}>Read the care guide</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Caring for raw denim</SheetTitle>
          <SheetDescription>Twelve habits that keep your Model 08 jeans going for years.</SheetDescription>
        </SheetHeader>
        <ol className="grid list-decimal gap-4 pl-5 text-sm">
          {steps.map(([title, body]) => (
            <li key={title}>
              <p className="font-bold">{title}</p>
              <p className="text-(--tx-muted-foreground)">{body}</p>
            </li>
          ))}
        </ol>
      </SheetContent>
    </Sheet>
  )
}
