import { Input } from "@/registry/threadcn/ui/input"
import { Label } from "@/registry/threadcn/ui/label"

export default function InputStates() {
  return (
    <div className="grid w-full max-w-2xl gap-x-6 gap-y-8 sm:grid-cols-2">
      <div className="grid content-start gap-1.5">
        <p className="text-xs text-(--tx-muted-foreground)">Default</p>
        <Label htmlFor="input-states-name">Name</Label>
        <Input id="input-states-name" placeholder="Rafi Ahmed" />
      </div>
      <div className="grid content-start gap-1.5">
        <p className="text-xs text-(--tx-muted-foreground)">Focus (how it looks when you Tab to it)</p>
        <Label htmlFor="input-states-focus">Name</Label>
        <Input id="input-states-focus" defaultValue="Rafi Ahmed" data-docs-focus />
      </div>
      <div className="grid content-start gap-1.5">
        <p className="text-xs text-(--tx-muted-foreground)">Error</p>
        <Label htmlFor="input-states-email">Email</Label>
        <Input id="input-states-email" type="email" defaultValue="rafi@indigo" aria-invalid="true" aria-describedby="input-states-email-error" />
        <p id="input-states-email-error" className="text-[13px] text-(--tx-invalid)">
          Add the part after the dot, like .shop
        </p>
      </div>
      <div className="grid content-start gap-1.5">
        <p className="text-xs text-(--tx-muted-foreground)">Disabled</p>
        <Label htmlFor="input-states-order">Order number</Label>
        <Input id="input-states-order" defaultValue="IND-2041" disabled />
      </div>
      <div className="grid content-start gap-1.5">
        <p className="text-xs text-(--tx-muted-foreground)">With helper text</p>
        <Label htmlFor="input-states-waist">Waist (inches)</Label>
        <Input id="input-states-waist" inputMode="numeric" defaultValue="32" aria-describedby="input-states-waist-help" />
        <p id="input-states-waist-help" className="text-[13px] text-(--tx-muted-foreground)">
          Lay your jeans flat, measure across the top, then double it.
        </p>
      </div>
    </div>
  )
}
