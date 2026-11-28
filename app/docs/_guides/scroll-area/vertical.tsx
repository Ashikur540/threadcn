import { Card } from "@/registry/threadcn/ui/card"
import { ScrollArea } from "@/registry/threadcn/ui/scroll-area"
import { Separator } from "@/registry/threadcn/ui/separator"

const log = [
  ["Nov 27", "Shipped back to you"],
  ["Nov 26", "Washed and folded"],
  ["Nov 25", "Patch sewn on the left knee"],
  ["Nov 22", "Thread matched to your indigo"],
  ["Nov 21", "Patch cut from Model 08 offcuts"],
  ["Nov 20", "Checked by the repair team"],
  ["Nov 19", "Arrived at Indigo Supply"],
  ["Nov 18", "Label scanned at the post office"],
  ["Nov 16", "Repair IND-2041 booked"],
]

export default function ScrollAreaVertical() {
  return (
    <Card size="sm" className="w-full max-w-xs">
      <p className="font-semibold">Repair IND-2041</p>
      <ScrollArea className="h-48 pr-3">
        <ol className="grid gap-2 text-sm">
          {log.map(([date, step], i) => (
            <li key={date} className="grid gap-2">
              {i > 0 && <Separator />}
              <span>
                <span className="font-semibold">{date}</span> {step}
              </span>
            </li>
          ))}
        </ol>
      </ScrollArea>
    </Card>
  )
}
