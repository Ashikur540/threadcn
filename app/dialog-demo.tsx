"use client"

import { Button } from "@/registry/threadcn/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/registry/threadcn/ui/dialog"

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger render={<Button />}>Book a free repair</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Book a free repair</DialogTitle>
          <DialogDescription>We will email a prepaid label. Pack the jeans and drop them at any post office.</DialogDescription>
        </DialogHeader>
        <p className="text-sm">Repairs usually come back within 9 days. Rips, holes and broken buttons are all free.</p>
        <DialogFooter showCloseButton>
          <Button>Send the label</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
