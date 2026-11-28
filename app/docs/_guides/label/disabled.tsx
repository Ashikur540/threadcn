import { Input } from "@/registry/threadcn/ui/input"
import { Label } from "@/registry/threadcn/ui/label"

export default function LabelDisabled() {
  return (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="label-disabled-store" className="opacity-50">
        Pickup store
      </Label>
      <Input id="label-disabled-store" defaultValue="Indigo Supply, Main Street" disabled />
    </div>
  )
}
