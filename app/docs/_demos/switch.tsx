import { Label } from "@/registry/threadcn/ui/label"
import { Switch } from "@/registry/threadcn/ui/switch"

export default function SwitchDemo() {
  return (
    <div className="grid gap-3">
      <Label>
        <Switch defaultChecked /> Express shipping
      </Label>
      <Label>
        <Switch /> Gift receipt
      </Label>
    </div>
  )
}
