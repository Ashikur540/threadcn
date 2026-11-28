import { Checkbox } from "@/registry/threadcn/ui/checkbox"
import { Label } from "@/registry/threadcn/ui/label"

const looks = [
  { id: "gold", title: "Gold thread when ticked", className: "data-checked:[--_stitch:var(--tx-ring)]" },
  { id: "thick", title: "Thicker thread", className: "[--_thread:2.5px]" },
  { id: "square", title: "Square corners", className: "[--_radius:3px]" },
]

export default function CheckboxCustom() {
  return (
    <div className="flex flex-wrap justify-center gap-x-10 gap-y-6">
      {looks.map((look) => (
        <fieldset key={look.id} className="grid content-start gap-2">
          <legend className="mb-2 text-xs text-(--tx-muted-foreground)">{look.title}</legend>
          <Label>
            <Checkbox defaultChecked className={look.className} /> Gift wrap
          </Label>
          <Label>
            <Checkbox className={look.className} /> Care card
          </Label>
        </fieldset>
      ))}
    </div>
  )
}
