import { Checkbox } from "@/registry/threadcn/ui/checkbox"
import { Label } from "@/registry/threadcn/ui/label"

export default function LabelWithCheckbox() {
  return (
    <div className="grid gap-3">
      <Label>
        <Checkbox defaultChecked /> Gift wrap
      </Label>
      <Label>
        <Checkbox /> Add a care card
      </Label>
    </div>
  )
}
