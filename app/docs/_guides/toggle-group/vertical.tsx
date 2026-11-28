import { ToggleGroup, ToggleGroupItem } from "@/registry/threadcn/ui/toggle-group"

export default function ToggleGroupVertical() {
  return (
    <ToggleGroup orientation="vertical" variant="outline" defaultValue={["newest"]} aria-label="Sort by">
      <ToggleGroupItem value="newest">Newest</ToggleGroupItem>
      <ToggleGroupItem value="price-low">Price, low to high</ToggleGroupItem>
      <ToggleGroupItem value="price-high">Price, high to low</ToggleGroupItem>
    </ToggleGroup>
  )
}
