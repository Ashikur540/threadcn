import { Label } from "@/registry/threadcn/ui/label"
import { Switch } from "@/registry/threadcn/ui/switch"

export default function SwitchDisabled() {
  return (
    <div className="grid gap-4">
      <div className="flex items-center gap-3">
        <Switch id="switch-disabled-same-day" disabled />
        <Label htmlFor="switch-disabled-same-day">Same-day delivery (not in your area)</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch id="switch-disabled-member" defaultChecked disabled />
        <Label htmlFor="switch-disabled-member">Indigo Supply member price</Label>
      </div>
    </div>
  )
}
