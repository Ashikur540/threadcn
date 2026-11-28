import { Label } from "@/registry/threadcn/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/registry/threadcn/ui/select"

const delivery = [
  { label: "Standard, 5 to 7 days", value: "standard" },
  { label: "Express", value: "express" },
  { label: "Pickup in store", value: "pickup" },
]

export default function SelectDemo() {
  return (
    <div className="grid w-full max-w-xs gap-1.5">
      <Label htmlFor="select-delivery">Delivery</Label>
      <Select items={delivery} defaultValue="express">
        <SelectTrigger id="select-delivery" className="w-full">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {delivery.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
