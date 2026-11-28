import { Badge } from "@/registry/threadcn/ui/badge"

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  )
}

function ScissorsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M20 4 8.12 15.88M14.47 14.48 20 20M8.12 8.12 12 12" />
    </svg>
  )
}

export default function BadgeWithIcon() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Badge>
        <CheckIcon />
        In stock
      </Badge>
      <Badge variant="secondary">
        <ScissorsIcon />
        Free hemming
      </Badge>
      <Badge variant="outline">
        Repaired
        <CheckIcon />
      </Badge>
    </div>
  )
}
