import { Label } from "@/registry/threadcn/ui/label"
import { RadioGroup, RadioGroupItem } from "@/registry/threadcn/ui/radio-group"

export default function RadioGroupStates() {
  return (
    <div className="grid w-full max-w-2xl gap-x-6 gap-y-8 sm:grid-cols-2">
      <div className="grid content-start gap-2">
        <p className="text-xs text-(--tx-muted-foreground)">Picked</p>
        <RadioGroup defaultValue="regular" aria-label="Fit">
          <Label>
            <RadioGroupItem value="slim" /> Slim
          </Label>
          <Label>
            <RadioGroupItem value="regular" /> Regular
          </Label>
        </RadioGroup>
      </div>
      <div className="grid content-start gap-2">
        <p className="text-xs text-(--tx-muted-foreground)">Focus (how it looks when you Tab to it)</p>
        <RadioGroup defaultValue="rinsed" aria-label="Wash">
          <Label>
            <RadioGroupItem value="raw" /> Raw
          </Label>
          <Label>
            <RadioGroupItem value="rinsed" data-docs-focus /> Rinsed
          </Label>
        </RadioGroup>
      </div>
      <div className="grid content-start gap-2">
        <p className="text-xs text-(--tx-muted-foreground)">Error</p>
        <RadioGroup aria-label="Length" aria-invalid="true" aria-describedby="radio-group-states-length-error">
          <Label>
            <RadioGroupItem value="30" aria-invalid="true" /> 30 inch
          </Label>
          <Label>
            <RadioGroupItem value="32" aria-invalid="true" /> 32 inch
          </Label>
        </RadioGroup>
        <p id="radio-group-states-length-error" className="text-[13px] text-(--tx-invalid)">
          Pick a length so we can cut the hem.
        </p>
      </div>
      <div className="grid content-start gap-2">
        <p className="text-xs text-(--tx-muted-foreground)">Disabled option</p>
        <RadioGroup defaultValue="standard" aria-label="Delivery">
          <Label>
            <RadioGroupItem value="standard" /> Standard
          </Label>
          <Label>
            <RadioGroupItem value="same-day" disabled /> Same day (not in your area)
          </Label>
        </RadioGroup>
      </div>
    </div>
  )
}
