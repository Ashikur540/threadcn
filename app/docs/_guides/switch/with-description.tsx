import { Label } from "@/registry/threadcn/ui/label"
import { Switch } from "@/registry/threadcn/ui/switch"

export default function SwitchWithDescription() {
  return (
    <div className="flex max-w-sm items-start gap-3">
      <Switch id="switch-description-repairs" aria-describedby="switch-description-repairs-hint" defaultChecked />
      <div className="grid gap-1 pt-1">
        <Label htmlFor="switch-description-repairs">Free repairs for life</Label>
        <p id="switch-description-repairs-hint" className="text-sm opacity-80">
          Send your Model 08 jeans back and we fix rips and broken seams at no cost.
        </p>
      </div>
    </div>
  )
}
