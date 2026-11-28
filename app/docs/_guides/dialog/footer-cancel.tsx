import { Button } from "@/registry/threadcn/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/registry/threadcn/ui/dialog"

export default function DialogFooterCancel() {
  return (
    <Dialog>
      <DialogTrigger render={<Button />}>Add a hem</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a chain-stitch hem</DialogTitle>
          <DialogDescription>We hem your Model 08 to your inseam before we ship. It adds 2 days.</DialogDescription>
        </DialogHeader>
        <DialogFooter showCloseButton>
          <DialogClose render={<Button />}>Add the hem</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
