import { Separator } from "@/registry/threadcn/ui/separator"

export default function SeparatorDemo() {
  return (
    <div className="grid w-full max-w-xs gap-4">
      <div className="grid gap-1">
        <p className="font-semibold">Model 08 Straight</p>
        <p className="text-sm">Raw selvedge denim, 14 oz.</p>
      </div>
      <Separator />
      <div className="flex h-5 items-center gap-4 text-sm">
        <span>Fit</span>
        <Separator orientation="vertical" />
        <span>Wash</span>
        <Separator orientation="vertical" />
        <span>Repairs</span>
      </div>
    </div>
  )
}
