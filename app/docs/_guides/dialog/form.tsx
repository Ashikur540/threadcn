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
import { Input } from "@/registry/threadcn/ui/input"
import { Label } from "@/registry/threadcn/ui/label"

export default function DialogForm() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="secondary" />}>Edit your fit</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Your fit</DialogTitle>
          <DialogDescription>We use these to suggest a size in every Indigo Supply cut.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-1.5">
          <Label htmlFor="dialog-form-waist">Waist (inches)</Label>
          <Input id="dialog-form-waist" type="number" defaultValue={32} />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="dialog-form-inseam">Inseam (inches)</Label>
          <Input id="dialog-form-inseam" type="number" defaultValue={30} />
        </div>
        <DialogFooter showCloseButton>
          <DialogClose render={<Button />}>Save fit</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
