import { Input } from "@/registry/threadcn/ui/input"
import { Label } from "@/registry/threadcn/ui/label"

export default function InputDisabled() {
  return (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="input-disabled-store">Pickup store</Label>
      <Input id="input-disabled-store" defaultValue="Indigo Supply, Main Street" disabled />
    </div>
  )
}
