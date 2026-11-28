import { Stitch } from "@/registry/threadcn/ui/stitch"

export default function StitchPlainDiv() {
  return (
    // The settings sit once on the outer div. Each inner div reads them through CSS inheritance.
    <div className="grid w-full max-w-xs gap-3 [--_inset:5px] [--_radius:10px] [--_stitch:var(--tx-thread)] [--_thread:var(--tx-thread-width)]">
      <div className="relative rounded-[10px] bg-(--tx-surface) px-5 py-3 text-(--tx-surface-foreground)">
        <Stitch />
        Hem, chain stitch
      </div>
      <div className="relative rounded-[10px] bg-(--tx-surface) px-5 py-3 text-(--tx-surface-foreground)">
        <Stitch />
        Knee patch
      </div>
      <div className="relative rounded-[10px] bg-(--tx-surface) px-5 py-3 text-(--tx-surface-foreground)">
        <Stitch />
        New brass zip
      </div>
    </div>
  )
}
