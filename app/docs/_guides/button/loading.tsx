import { Button } from "@/registry/threadcn/ui/button"
import { Spinner } from "@/registry/threadcn/ui/spinner"

export default function ButtonLoading() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <Button disabled>
        <Spinner />
        Placing order
      </Button>
      <Button variant="secondary" disabled>
        <Spinner />
        Saving
      </Button>
    </div>
  )
}
