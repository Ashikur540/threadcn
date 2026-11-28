import { Button } from "@/registry/threadcn/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/threadcn/ui/dialog"

export default function DialogBasic() {
  return (
    <Dialog>
      <DialogTrigger render={<Button />}>Book a free repair</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Book a free repair</DialogTitle>
          <DialogDescription>Your Model 08 jeans are covered. We will email a prepaid label to send them in.</DialogDescription>
        </DialogHeader>
        <p className="text-sm">Repairs usually come back within 9 days, washed and folded.</p>
        <DialogFooter>
          <DialogClose render={<Button variant="secondary" />}>Not now</DialogClose>
          <DialogClose render={<Button />}>Send the label</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
