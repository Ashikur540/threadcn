import { Button } from "@/registry/threadcn/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/threadcn/ui/dialog"

const terms = [
  ["What we fix", "Rips, worn knees, broken buttons, loose belt loops and failed zips on any pair bought at Indigo Supply."],
  ["What we don't fix", "Damage from bleach or a dryer, and jeans that were cut or dyed after you bought them."],
  ["How long it takes", "Most repairs take five to seven working days. A new zip can take up to ten."],
  ["Sending them in", "Use the prepaid label we email you. Wash the jeans first and empty the pockets."],
  ["How it looks", "We match the thread to your jeans. A patch shows a little, like a real mend should."],
  ["If we can't fix it", "We send the jeans back free of charge and tell you why."],
  ["Your details", "We only use your address to send the jeans back. We never share it."],
]

export default function DialogLongContent() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="secondary" />}>Read the repair terms</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Free repair terms</DialogTitle>
          <DialogDescription>Read these before you book a repair for your Model 08.</DialogDescription>
        </DialogHeader>
        <dl className="grid gap-4 text-sm">
          {terms.map(([title, body]) => (
            <div key={title}>
              <dt className="font-bold">{title}</dt>
              <dd className="text-(--tx-muted-foreground)">{body}</dd>
            </div>
          ))}
        </dl>
        <DialogFooter showCloseButton>
          <Button>Book a repair</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
