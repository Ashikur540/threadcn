import { Card } from "@/registry/threadcn/ui/card"
import { ScrollArea } from "@/registry/threadcn/ui/scroll-area"

const tips = [
  "Wait six months before the first wash.",
  "Wash cold and inside out.",
  "Hang to dry. Never tumble dry.",
  "Air your jeans out between wears.",
  "Spot clean small marks with a damp cloth.",
  "Fold over a hanger, not by the belt loops.",
  "Send rips and holes back for a free repair.",
  "Hem them once, after the first soak.",
]

export default function ScrollAreaDemo() {
  return (
    <Card size="sm" className="w-full max-w-xs">
      <ScrollArea className="h-36 pr-3">
        <ol className="grid list-decimal gap-2 pl-5 text-sm">
          {tips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ol>
      </ScrollArea>
    </Card>
  )
}
