import { ToggleGroup, ToggleGroupItem } from "@/registry/threadcn/ui/toggle-group"

export default function ToggleGroupSingle() {
  return (
    <ToggleGroup variant="outline" defaultValue={["regular"]} aria-label="Fit">
      <ToggleGroupItem value="slim">Slim</ToggleGroupItem>
      <ToggleGroupItem value="regular">Regular</ToggleGroupItem>
      <ToggleGroupItem value="loose">Loose</ToggleGroupItem>
    </ToggleGroup>
  )
}
