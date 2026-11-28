import { Input } from "@/registry/threadcn/ui/input"
import { Label } from "@/registry/threadcn/ui/label"

export default function InputTypes() {
  return (
    <div className="grid w-full max-w-2xl gap-x-6 gap-y-5 sm:grid-cols-2">
      <div className="grid content-start gap-1.5">
        <Label htmlFor="input-types-email">Email</Label>
        <Input id="input-types-email" type="email" placeholder="you@indigo.shop" />
      </div>
      <div className="grid content-start gap-1.5">
        <Label htmlFor="input-types-password">Password</Label>
        <Input id="input-types-password" type="password" defaultValue="selvedge" />
      </div>
      <div className="grid content-start gap-1.5">
        <Label htmlFor="input-types-number">How many pairs</Label>
        <Input id="input-types-number" type="number" min={1} max={10} defaultValue={1} />
      </div>
      <div className="grid content-start gap-1.5">
        <Label htmlFor="input-types-search">Search the shop</Label>
        <Input id="input-types-search" type="search" placeholder="Model 08, waist 32" />
      </div>
      <div className="grid content-start gap-1.5 sm:col-span-2">
        <Label htmlFor="input-types-file">Photo of the tear</Label>
        <Input id="input-types-file" type="file" accept="image/*" />
      </div>
    </div>
  )
}
