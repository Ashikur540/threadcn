import { Button } from "@/registry/threadcn/ui/button"

export default function ButtonDisabled() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <Button disabled>Sold out</Button>
      <Button variant="secondary" disabled>
        Sold out
      </Button>
    </div>
  )
}
