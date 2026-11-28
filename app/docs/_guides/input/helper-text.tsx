import { Input } from "@/registry/threadcn/ui/input"
import { Label } from "@/registry/threadcn/ui/label"

export default function InputHelperText() {
  return (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="input-helper-text-email">Email for repair updates</Label>
      <Input id="input-helper-text-email" type="email" placeholder="you@indigo.shop" aria-describedby="input-helper-text-email-help" />
      <p id="input-helper-text-email-help" className="text-[13px] text-(--tx-muted-foreground)">
        We only write when your Model 08 is ready to collect.
      </p>
    </div>
  )
}
