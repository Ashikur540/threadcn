import { Spinner } from "@/registry/threadcn/ui/spinner"

export default function SpinnerSizes() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6">
      <Spinner className="size-3" />
      <Spinner />
      <Spinner className="size-6" />
      <Spinner className="size-8" />
      <Spinner className="size-6 text-(--tx-patch)" />
    </div>
  )
}
