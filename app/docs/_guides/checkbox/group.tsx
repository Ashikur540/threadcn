import { Checkbox } from "@/registry/threadcn/ui/checkbox"
import { Label } from "@/registry/threadcn/ui/label"

export default function CheckboxWithHeading() {
  return (
    <fieldset className="grid gap-3">
      <legend className="mb-3 font-semibold">Extras for your Model 08</legend>
      <Label>
        <Checkbox name="extras" value="gift-wrap" defaultChecked /> Gift wrap
      </Label>
      <Label>
        <Checkbox name="extras" value="care-card" /> Care card
      </Label>
      <Label>
        <Checkbox name="extras" value="spare-buttons" /> Spare copper buttons
      </Label>
    </fieldset>
  )
}
