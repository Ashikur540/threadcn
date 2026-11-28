import { Alert, AlertDescription, AlertTitle } from "@/registry/threadcn/ui/alert"

function InfoIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5M12 7.5v.01" />
    </svg>
  )
}

function WarningIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3 2.5 20h19Z" />
      <path d="M12 10v4M12 17v.01" />
    </svg>
  )
}

export default function AlertVariants() {
  return (
    <div className="grid w-full max-w-3xl gap-4 sm:grid-cols-2">
      <Alert>
        <InfoIcon />
        <AlertTitle>Free repairs, forever</AlertTitle>
        <AlertDescription>Send your Model 08 jeans back any time and we fix the seams.</AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <WarningIcon />
        <AlertTitle>Waist 32 is sold out</AlertTitle>
        <AlertDescription>Pick another size, or check back on Friday.</AlertDescription>
      </Alert>
    </div>
  )
}
