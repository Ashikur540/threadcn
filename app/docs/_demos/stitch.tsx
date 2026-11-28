import { Stitch } from "@/registry/threadcn/ui/stitch"

export default function StitchDemo() {
  return (
    <div className="relative w-full max-w-xs rounded-(--_radius) bg-(--tx-surface) p-6 text-(--tx-surface-foreground) [--_inset:6px] [--_radius:16px]">
      <Stitch />
      <p className="font-semibold">Repair tag</p>
      <p className="text-sm text-(--tx-muted-foreground)">Model 08, left knee. Back in about 9 days.</p>
    </div>
  )
}
