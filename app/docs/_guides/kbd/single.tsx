import { Kbd } from "@/registry/threadcn/ui/kbd"

function ArrowUp() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
  )
}

export default function KbdSingle() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Kbd>Esc</Kbd>
      <Kbd>Enter</Kbd>
      <Kbd>Shift</Kbd>
      <Kbd>/</Kbd>
      <Kbd>
        <ArrowUp />
        <span className="sr-only">Up arrow</span>
      </Kbd>
    </div>
  )
}
