import { Toggle } from "@/registry/threadcn/ui/toggle"

export default function ToggleSizes() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <Toggle variant="outline" size="sm">
        Small
      </Toggle>
      <Toggle variant="outline">Default</Toggle>
      <Toggle variant="outline" size="lg">
        Large
      </Toggle>
    </div>
  )
}
