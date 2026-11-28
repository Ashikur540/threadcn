import { Label } from "@/registry/threadcn/ui/label"
import { RadioGroup, RadioGroupItem } from "@/registry/threadcn/ui/radio-group"

export default function RadioGroupHorizontal() {
  return (
    <div className="grid gap-3">
      <p id="radio-group-horizontal-label" className="text-[13px] font-semibold">
        Waist
      </p>
      <RadioGroup defaultValue="32" aria-labelledby="radio-group-horizontal-label" className="flex flex-wrap gap-x-6 gap-y-3">
        <Label>
          <RadioGroupItem value="30" /> 30
        </Label>
        <Label>
          <RadioGroupItem value="32" /> 32
        </Label>
        <Label>
          <RadioGroupItem value="34" /> 34
        </Label>
        <Label>
          <RadioGroupItem value="36" /> 36
        </Label>
      </RadioGroup>
    </div>
  )
}
