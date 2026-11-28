"use client"

import { Button } from "@/registry/threadcn/ui/button"
import { Toaster, toast } from "@/registry/threadcn/ui/toast"

export default function ToastDemo() {
  return (
    <Toaster>
      <Button onClick={() => toast.add({ title: "Added to bag", description: "Model 08 Straight, W32 L34", type: "success" })}>
        Add to bag
      </Button>
    </Toaster>
  )
}
