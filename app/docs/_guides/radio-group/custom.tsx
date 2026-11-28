import { Label } from "@/registry/threadcn/ui/label"
import { RadioGroup, RadioGroupItem } from "@/registry/threadcn/ui/radio-group"

const looks = [
  { id: "gold", title: "Gold thread when picked", className: "data-checked:[--_stitch:var(--tx-ring)]" },
  { id: "thick", title: "Thicker thread", className: "[--_thread:2.5px]" },
  { id: "edge", title: "Stitch near the edge", className: "[--_inset:2px]" },
]

export default function RadioGroupCustom() {
  return (
    <div className="flex flex-wrap justify-center gap-x-10 gap-y-6">
      {looks.map((look) => (
        <div key={look.id} className="grid content-start gap-2">
          <p id={`radio-group-custom-${look.id}`} className="text-xs text-(--tx-muted-foreground)">
            {look.title}
          </p>
          <RadioGroup defaultValue="regular" aria-labelledby={`radio-group-custom-${look.id}`}>
            <Label>
              <RadioGroupItem value="slim" className={look.className} /> Slim
            </Label>
            <Label>
              <RadioGroupItem value="regular" className={look.className} /> Regular
            </Label>
          </RadioGroup>
        </div>
      ))}
    </div>
  )
}
