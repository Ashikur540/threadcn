import { Alert, AlertDescription, AlertTitle } from "@/registry/threadcn/ui/alert"

function InfoIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5M12 7.5v.01" />
    </svg>
  )
}

export default function AlertDemo() {
  return (
    <Alert className="max-w-sm">
      <InfoIcon />
      <AlertTitle>Free repairs, forever</AlertTitle>
      <AlertDescription>Rips, holes and broken buttons. Send them back any time.</AlertDescription>
    </Alert>
  )
}
