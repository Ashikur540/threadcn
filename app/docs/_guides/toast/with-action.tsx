"use client"

import { Button } from "@/registry/threadcn/ui/button"
import { toast } from "@/registry/threadcn/ui/toast"

function removeFromBag() {
  const id = toast.add({
    title: "Removed from bag",
    description: "Model 08 Straight, waist 32",
    actionProps: {
      children: "Undo",
      // The action button does not close the toast by itself, so close it here.
      onClick: () => {
        toast.close(id)
        toast.add({ type: "success", title: "Back in your bag" })
      },
    },
  })
}

export default function ToastWithAction() {
  return (
    <Button variant="destructive" onClick={removeFromBag}>
      Remove from bag
    </Button>
  )
}
