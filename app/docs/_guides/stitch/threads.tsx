import { Stitch } from "@/registry/threadcn/ui/stitch"

const box = "relative grid size-28 place-items-center rounded-[14px] bg-(--tx-surface) p-3 text-center text-sm font-semibold text-(--tx-surface-foreground) [--_inset:7px] [--_radius:14px]"

export default function StitchThreads() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <div className={`${box} [--_stitch:var(--tx-thread)] [--_thread:var(--tx-thread-width)]`}>
        <Stitch />
        Shared thread
      </div>
      <div className={`${box} [--_stitch:white] [--_thread:1px]`}>
        <Stitch />
        Fine white
      </div>
      <div className={`${box} [--_stitch:#e1a73e] [--_thread:3px]`}>
        <Stitch />
        Thick gold
      </div>
    </div>
  )
}
