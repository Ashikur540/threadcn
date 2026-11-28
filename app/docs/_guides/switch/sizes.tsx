import { Label } from "@/registry/threadcn/ui/label"
import { Switch } from "@/registry/threadcn/ui/switch"

export default function SwitchSizes() {
  return (
    <div className="grid gap-4">
      <div className="flex items-center gap-3">
        <Switch id="switch-sizes-sm" size="sm" />
        <Label htmlFor="switch-sizes-sm">Gift wrap (small)</Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch id="switch-sizes-default" defaultChecked />
        <Label htmlFor="switch-sizes-default">Express shipping (default)</Label>
      </div>
    </div>
  )
}
