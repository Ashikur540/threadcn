import { Stitch } from "@/registry/threadcn/ui/stitch"

export default function StitchOwnBox() {
  return (
    <section className="relative w-full max-w-sm rounded-[18px] bg-(--tx-field) p-7 text-(--tx-field-foreground) [--_inset:8px] [--_radius:18px] [--_stitch:var(--tx-field-border)] [--_thread:2px]">
      <Stitch />
      <h3 className="font-bold">Repair ticket</h3>
      <p className="text-sm">Model 08, waist 32. Knee patch on the left leg, ready in about 9 days.</p>
    </section>
  )
}
