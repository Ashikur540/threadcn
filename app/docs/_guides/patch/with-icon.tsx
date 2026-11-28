import { Patch, PatchDot } from "@/registry/threadcn/ui/patch"

export default function PatchWithIcon() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <Patch>
        {/* A small logo: two crossed needles. */}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="size-5 shrink-0" aria-hidden="true">
          <path d="M4 20 18 6M6 20 20 6" />
          <circle cx="19" cy="5" r="1.6" />
        </svg>
        Indigo Supply
      </Patch>
      <Patch variant="round">
        <PatchDot>
          {/* A spool of thread. */}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="size-5" aria-hidden="true">
            <path d="M7 4h10M7 20h10M8 4v16M16 4v16M8 9l8 2M8 13l8 2" />
          </svg>
        </PatchDot>
        Repairs open
      </Patch>
    </div>
  )
}
