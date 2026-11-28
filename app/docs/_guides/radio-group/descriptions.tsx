import { Label } from "@/registry/threadcn/ui/label"
import { RadioGroup, RadioGroupItem } from "@/registry/threadcn/ui/radio-group"

const options = [
  { value: "standard", title: "Standard hem", text: "Ready in 5 days. Free with every pair." },
  { value: "original", title: "Keep the original hem", text: "We move the factory hem up, so the fades stay. Ready in 7 days." },
  { value: "chain", title: "Chain stitch hem", text: "Sewn on a vintage machine for a roping fade. Ready in 10 days." },
]

export default function RadioGroupDescriptions() {
  return (
    <RadioGroup defaultValue="standard" aria-label="Hem style" className="w-full max-w-md gap-4">
      {options.map((o) => (
        <div key={o.value} className="grid gap-1">
          <Label>
            <RadioGroupItem value={o.value} aria-describedby={`radio-group-descriptions-${o.value}`} /> {o.title}
          </Label>
          <p id={`radio-group-descriptions-${o.value}`} className="pl-[34px] text-[13px] text-(--tx-muted-foreground)">
            {o.text}
          </p>
        </div>
      ))}
    </RadioGroup>
  )
}
