import { ToggleGroup, ToggleGroupItem } from "@/registry/threadcn/ui/toggle-group"

export default function ToggleGroupMultiple() {
  return (
    <ToggleGroup multiple variant="outline" defaultValue={["cold", "inside-out"]} aria-label="Wash settings" className="flex-wrap justify-center">
      <ToggleGroupItem value="cold">Cold wash</ToggleGroupItem>
      <ToggleGroupItem value="inside-out">Inside out</ToggleGroupItem>
      <ToggleGroupItem value="hang-dry">Hang dry</ToggleGroupItem>
    </ToggleGroup>
  )
}
