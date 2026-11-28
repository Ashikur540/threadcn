import { ToggleGroup, ToggleGroupItem } from "@/registry/threadcn/ui/toggle-group"

export default function ToggleGroupVariantsSizes() {
  return (
    <div className="grid justify-items-center gap-6">
      <ToggleGroup size="sm" defaultValue={["rinse"]} aria-label="Wash, small default">
        <ToggleGroupItem value="raw">Raw</ToggleGroupItem>
        <ToggleGroupItem value="rinse">Rinse</ToggleGroupItem>
        <ToggleGroupItem value="stone">Stone</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup variant="outline" size="lg" defaultValue={["rinse"]} aria-label="Wash, large outline">
        <ToggleGroupItem value="raw">Raw</ToggleGroupItem>
        <ToggleGroupItem value="rinse">Rinse</ToggleGroupItem>
        <ToggleGroupItem value="stone">Stone</ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}
