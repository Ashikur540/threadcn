import { Separator } from "@/registry/threadcn/ui/separator"

export default function SeparatorHorizontal() {
  return (
    <div className="grid w-full max-w-sm gap-4 text-sm">
      <div className="grid gap-1">
        <p className="text-base font-semibold">Model 08 Straight</p>
        <p>Raw selvedge denim, 14 oz. Made for Indigo Supply.</p>
      </div>
      <Separator />
      <div className="grid gap-1">
        <p className="font-semibold">Fit</p>
        <p>Straight from hip to hem. Waist 32 fits a 32 inch waist.</p>
      </div>
      <Separator />
      <div className="grid gap-1">
        <p className="font-semibold">Repairs</p>
        <p>Free, for as long as you own them.</p>
      </div>
    </div>
  )
}
