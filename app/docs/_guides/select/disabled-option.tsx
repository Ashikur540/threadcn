import { Label } from "@/registry/threadcn/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/registry/threadcn/ui/select"

const washes = [
  { label: "Raw", value: "raw" },
  { label: "Rinse", value: "rinse" },
  { label: "Stone wash (sold out)", value: "stone", disabled: true },
  { label: "Black", value: "black" },
]

export default function SelectDisabledOption() {
  return (
    <div className="grid w-full max-w-xs gap-1.5">
      <Label htmlFor="select-disabled-option-wash">Wash</Label>
      <Select items={washes} defaultValue="rinse">
        <SelectTrigger id="select-disabled-option-wash" className="w-full">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {washes.map((wash) => (
            <SelectItem key={wash.value} value={wash.value} disabled={wash.disabled}>
              {wash.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
