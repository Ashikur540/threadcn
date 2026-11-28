import { Patch, PatchDot } from "@/registry/threadcn/ui/patch"

export default function PatchDemo() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Patch>Indigo Supply</Patch>
      <Patch variant="round">
        <PatchDot>42</PatchDot>
        Orders this week
      </Patch>
    </div>
  )
}
