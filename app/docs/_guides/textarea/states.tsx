import { Label } from "@/registry/threadcn/ui/label"
import { Textarea } from "@/registry/threadcn/ui/textarea"

export default function TextareaStates() {
  return (
    <div className="grid w-full max-w-2xl gap-x-6 gap-y-8 sm:grid-cols-2">
      <div className="grid content-start gap-1.5">
        <p className="text-xs text-(--tx-muted-foreground)">Default</p>
        <Label htmlFor="textarea-states-notes">Repair notes</Label>
        <Textarea id="textarea-states-notes" placeholder="Where is the tear?" />
      </div>
      <div className="grid content-start gap-1.5">
        <p className="text-xs text-(--tx-muted-foreground)">Focus (how it looks when you Tab to it)</p>
        <Label htmlFor="textarea-states-focus">Repair notes</Label>
        <Textarea id="textarea-states-focus" defaultValue="Small tear on the left knee." data-docs-focus />
      </div>
      <div className="grid content-start gap-1.5">
        <p className="text-xs text-(--tx-muted-foreground)">Error</p>
        <Label htmlFor="textarea-states-error">Repair notes</Label>
        <Textarea id="textarea-states-error" aria-invalid="true" aria-describedby="textarea-states-error-message" />
        <p id="textarea-states-error-message" className="text-[13px] text-(--tx-invalid)">
          Tell us where the tear is so we can quote the repair.
        </p>
      </div>
      <div className="grid content-start gap-1.5">
        <p className="text-xs text-(--tx-muted-foreground)">Disabled</p>
        <Label htmlFor="textarea-states-disabled">Tailor&apos;s reply</Label>
        <Textarea id="textarea-states-disabled" defaultValue="We will reply within two days." disabled />
      </div>
      <div className="grid content-start gap-1.5">
        <p className="text-xs text-(--tx-muted-foreground)">With helper text</p>
        <Label htmlFor="textarea-states-help">Gift message</Label>
        <Textarea id="textarea-states-help" placeholder="Happy birthday, enjoy the Model 08!" aria-describedby="textarea-states-help-text" />
        <p id="textarea-states-help-text" className="text-[13px] text-(--tx-muted-foreground)">
          We hand-write it on a card inside the box.
        </p>
      </div>
    </div>
  )
}
