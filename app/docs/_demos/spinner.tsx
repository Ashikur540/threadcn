import { Button } from "@/registry/threadcn/ui/button"
import { Spinner } from "@/registry/threadcn/ui/spinner"

export default function SpinnerDemo() {
  return (
    <div className="flex items-center gap-4">
      <Spinner className="size-6" />
      <Button variant="secondary" disabled>
        <Spinner /> Saving
      </Button>
    </div>
  )
}
