import { Alert, AlertDescription, AlertTitle } from "@/registry/threadcn/ui/alert"

function TruckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 6h11v10H3zM14 9h4l3 3v4h-7" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
    </svg>
  )
}

export default function AlertTitleOnly() {
  return (
    <div className="grid w-full max-w-md gap-4">
      <Alert>
        <TruckIcon />
        <AlertTitle>Your order ships today</AlertTitle>
      </Alert>
      <Alert>
        <TruckIcon />
        <AlertTitle>Your order ships today</AlertTitle>
        <AlertDescription>Indigo Supply packs orders placed before 2 pm the same day.</AlertDescription>
      </Alert>
    </div>
  )
}
