import { Input } from "@/registry/threadcn/ui/input"
import { Label } from "@/registry/threadcn/ui/label"

export default function InputDemo() {
  return (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="input-email">Email</Label>
      <Input id="input-email" type="email" placeholder="you@indigo.shop" />
    </div>
  )
}
