import { Separator } from "@/registry/threadcn/ui/separator"

export default function SeparatorVertical() {
  return (
    <nav aria-label="Model 08 details" className="flex h-5 flex-wrap items-center gap-4 text-sm">
      <a href="#fit" className="underline-offset-4 hover:underline">
        Fit
      </a>
      <Separator orientation="vertical" />
      <a href="#wash" className="underline-offset-4 hover:underline">
        Wash
      </a>
      <Separator orientation="vertical" />
      <a href="#repairs" className="underline-offset-4 hover:underline">
        Repairs
      </a>
    </nav>
  )
}
