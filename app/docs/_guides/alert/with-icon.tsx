import { Alert, AlertDescription, AlertTitle } from "@/registry/threadcn/ui/alert"

function ScissorsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M20 4 8.12 15.88M14.47 14.48 20 20M8.12 8.12 12 12" />
    </svg>
  )
}

export default function AlertWithIcon() {
  return (
    <div className="grid w-full max-w-md gap-4">
      <Alert>
        <ScissorsIcon />
        <AlertTitle>Hemming is free</AlertTitle>
        <AlertDescription>Tell us your inseam at checkout and we cut and sew the hem for you.</AlertDescription>
      </Alert>
      <Alert>
        <AlertTitle>Hemming is free</AlertTitle>
        <AlertDescription>Tell us your inseam at checkout and we cut and sew the hem for you.</AlertDescription>
      </Alert>
    </div>
  )
}
