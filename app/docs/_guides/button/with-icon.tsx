import { Button } from "@/registry/threadcn/ui/button"

function Scissors() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M20 4 8.12 15.88M14.47 14.48 20 20M8.12 8.12 12 12" />
    </svg>
  )
}

export default function ButtonWithIcon() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <Button>
        <Scissors />
        Book a repair
      </Button>
      <Button variant="secondary" size="icon" shape="round" aria-label="Book a repair">
        <Scissors />
      </Button>
    </div>
  )
}
