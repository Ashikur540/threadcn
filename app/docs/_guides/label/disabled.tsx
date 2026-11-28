import { Checkbox } from "@/registry/threadcn/ui/checkbox"
import { Input } from "@/registry/threadcn/ui/input"
import { Label } from "@/registry/threadcn/ui/label"
import { Switch } from "@/registry/threadcn/ui/switch"

export default function LabelDisabled() {
  return (
    <div className="grid w-full max-w-sm gap-5">
      <div className="grid gap-1.5">
        <Label htmlFor="label-disabled-store">Pickup store</Label>
        <Input id="label-disabled-store" defaultValue="Indigo Supply, Main Street" disabled />
      </div>
      <Label>
        <Checkbox disabled /> Hemming (sold out)
      </Label>
      <div className="flex items-center gap-3">
        <Switch id="label-disabled-express" disabled />
        <Label htmlFor="label-disabled-express">Express repair</Label>
      </div>
    </div>
  )
}
