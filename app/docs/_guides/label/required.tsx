import { Input } from "@/registry/threadcn/ui/input"
import { Label } from "@/registry/threadcn/ui/label"

export default function LabelRequired() {
  return (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="label-required-email">
        Email
        <span aria-hidden="true" className="text-(--tx-invalid)">
          *
        </span>
      </Label>
      <Input id="label-required-email" type="email" placeholder="you@indigo.shop" required />
      <p className="text-[13px] text-(--tx-muted-foreground)">
        Fields with a * are required.
      </p>
    </div>
  )
}
