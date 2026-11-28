import { Stitch } from "@/registry/threadcn/ui/stitch"

export default function StitchRound() {
  return (
    <div className="relative grid size-32 place-items-center rounded-full bg-(--tx-leather) text-center font-bold text-(--tx-leather-foreground) [--_inset:8px] [--_radius:64px] [--_stitch:var(--tx-thread)] [--_thread:var(--tx-thread-width)]">
      <Stitch />
      <span>
        W32
        <br />
        L34
      </span>
    </div>
  )
}
