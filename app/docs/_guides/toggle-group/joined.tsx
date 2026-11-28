import { ToggleGroup, ToggleGroupItem } from "@/registry/threadcn/ui/toggle-group"

export default function ToggleGroupJoined() {
  return (
    <ToggleGroup variant="outline" spacing={0} defaultValue={["32"]} aria-label="Waist">
      <ToggleGroupItem value="30">30</ToggleGroupItem>
      <ToggleGroupItem value="31">31</ToggleGroupItem>
      <ToggleGroupItem value="32">32</ToggleGroupItem>
      <ToggleGroupItem value="33">33</ToggleGroupItem>
      <ToggleGroupItem value="34">34</ToggleGroupItem>
    </ToggleGroup>
  )
}
