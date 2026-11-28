import { Label } from "@/registry/threadcn/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/registry/threadcn/ui/select"

const lengths = ["30", "32", "34"].map((l) => ({ label: `Length ${l}`, value: l }))

export default function SelectSizes() {
  return (
    <div className="flex flex-wrap items-end justify-center gap-6">
      <div className="grid gap-1.5">
        <Label htmlFor="select-sizes-sm">Small</Label>
        <Select items={lengths} defaultValue="32">
          <SelectTrigger id="select-sizes-sm" size="sm" className="w-36">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {lengths.map((length) => (
              <SelectItem key={length.value} value={length.value}>
                {length.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="select-sizes-default">Default</Label>
        <Select items={lengths} defaultValue="32">
          <SelectTrigger id="select-sizes-default" className="w-36">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {lengths.map((length) => (
              <SelectItem key={length.value} value={length.value}>
                {length.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
