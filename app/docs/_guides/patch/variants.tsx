import { Patch, PatchDot } from "@/registry/threadcn/ui/patch"

export default function PatchVariants() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <Patch>Indigo Supply</Patch>
      <Patch variant="round">
        <PatchDot>32</PatchDot>
        Waist in stock
      </Patch>
    </div>
  )
}
