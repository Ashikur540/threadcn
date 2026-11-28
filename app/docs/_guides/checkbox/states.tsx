import { Checkbox } from "@/registry/threadcn/ui/checkbox"
import { Label } from "@/registry/threadcn/ui/label"

export default function CheckboxStates() {
  return (
    <div className="grid w-full max-w-2xl gap-x-6 gap-y-6 sm:grid-cols-3">
      <div className="grid content-start gap-2">
        <p className="text-xs text-(--tx-muted-foreground)">Unchecked</p>
        <Label>
          <Checkbox /> Add a care card
        </Label>
      </div>
      <div className="grid content-start gap-2">
        <p className="text-xs text-(--tx-muted-foreground)">Checked</p>
        <Label>
          <Checkbox defaultChecked /> Gift wrap
        </Label>
      </div>
      <div className="grid content-start gap-2">
        <p className="text-xs text-(--tx-muted-foreground)">Mixed (some, not all)</p>
        <Label>
          <Checkbox indeterminate /> All extras
        </Label>
      </div>
      <div className="grid content-start gap-2">
        <p className="text-xs text-(--tx-muted-foreground)">Focus (how it looks when you Tab to it)</p>
        <Label>
          <Checkbox data-docs-focus /> Tell me when 32 is back
        </Label>
      </div>
      <div className="grid content-start gap-2">
        <p className="text-xs text-(--tx-muted-foreground)">Error</p>
        <Label>
          <Checkbox aria-invalid="true" aria-describedby="checkbox-states-terms-error" /> Accept the repair terms
        </Label>
        <p id="checkbox-states-terms-error" className="text-[13px] text-(--tx-invalid)">
          Tick this to book the repair.
        </p>
      </div>
      <div className="grid content-start gap-2">
        <p className="text-xs text-(--tx-muted-foreground)">Disabled</p>
        <Label>
          <Checkbox disabled /> Hemming (sold out)
        </Label>
      </div>
    </div>
  )
}
