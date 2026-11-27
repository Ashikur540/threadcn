import { Input } from "@/registry/threadcn/ui/input"
import { Label } from "@/registry/threadcn/ui/label"

export default function LabelDemo() {
  return (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="label-name">Name on the order</Label>
      <Input id="label-name" defaultValue="Rafi" />
    </div>
  )
}
