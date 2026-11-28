import { Toggle } from "@/registry/threadcn/ui/toggle"

export default function ToggleVariants() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <Toggle>In stock only</Toggle>
      <Toggle variant="outline">In stock only</Toggle>
      <Toggle variant="outline" defaultPressed>
        In stock only
      </Toggle>
    </div>
  )
}
