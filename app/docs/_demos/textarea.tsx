import { Label } from "@/registry/threadcn/ui/label"
import { Textarea } from "@/registry/threadcn/ui/textarea"

export default function TextareaDemo() {
  return (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="textarea-notes">Repair notes</Label>
      <Textarea id="textarea-notes" placeholder="Where is the tear?" />
    </div>
  )
}
