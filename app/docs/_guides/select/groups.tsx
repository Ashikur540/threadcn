import { Fragment } from "react"

import { Label } from "@/registry/threadcn/ui/label"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue } from "@/registry/threadcn/ui/select"

const repairs = [
  {
    value: "Hems",
    items: [
      { label: "Original hem", value: "original-hem" },
      { label: "Chain-stitch hem", value: "chain-stitch-hem" },
    ],
  },
  {
    value: "Patches",
    items: [
      { label: "Knee patch", value: "knee-patch" },
      { label: "Pocket patch", value: "pocket-patch" },
    ],
  },
]

export default function SelectGroups() {
  return (
    <div className="grid w-full max-w-xs gap-1.5">
      <Label htmlFor="select-groups-repair">Repair</Label>
      <Select items={repairs} defaultValue="chain-stitch-hem">
        <SelectTrigger id="select-groups-repair" className="w-full">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {repairs.map((group, index) => (
            <Fragment key={group.value}>
              {index > 0 && <SelectSeparator />}
              <SelectGroup>
                <SelectLabel>{group.value}</SelectLabel>
                {group.items.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </Fragment>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
