import { Alert, AlertAction, AlertDescription, AlertTitle } from "@/registry/threadcn/ui/alert"
import { Button } from "@/registry/threadcn/ui/button"

function InfoIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5M12 7.5v.01" />
    </svg>
  )
}

export default function AlertWithAction() {
  return (
    <Alert className="max-w-md">
      <InfoIcon />
      <AlertTitle>Repair request received</AlertTitle>
      <AlertDescription>We will email you a free shipping label for your Model 08.</AlertDescription>
      <AlertAction>
        <Button size="xs" variant="secondary">
          Track it
        </Button>
      </AlertAction>
    </Alert>
  )
}
