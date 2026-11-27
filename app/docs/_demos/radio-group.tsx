import { Label } from "@/registry/threadcn/ui/label"
import { RadioGroup, RadioGroupItem } from "@/registry/threadcn/ui/radio-group"

export default function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="regular" aria-label="Fit" className="grid gap-3">
      <Label>
        <RadioGroupItem value="slim" /> Slim
      </Label>
      <Label>
        <RadioGroupItem value="regular" /> Regular
      </Label>
      <Label>
        <RadioGroupItem value="loose" /> Loose
      </Label>
    </RadioGroup>
  )
}
