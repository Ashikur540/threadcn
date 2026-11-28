import { Label } from "@/registry/threadcn/ui/label"
import { Textarea } from "@/registry/threadcn/ui/textarea"

const notes =
  "Hem the Model 08 to a 30 inch length and keep the original hem. There is also a small tear on the left knee. Please patch it from the inside so it does not show, and use indigo thread."

export default function TextareaHeight() {
  return (
    <div className="grid w-full max-w-2xl gap-x-6 gap-y-5 sm:grid-cols-2">
      <div className="grid content-start gap-1.5">
        <Label htmlFor="textarea-height-grows">Grows as you type</Label>
        <Textarea id="textarea-height-grows" defaultValue={notes} />
      </div>
      <div className="grid content-start gap-1.5">
        <Label htmlFor="textarea-height-fixed">Fixed height</Label>
        <Textarea
          id="textarea-height-fixed"
          rows={4}
          className="field-sizing-fixed resize-none"
          defaultValue={notes}
        />
      </div>
    </div>
  )
}
