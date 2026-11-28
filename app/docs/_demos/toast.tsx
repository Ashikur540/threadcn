"use client"

import { Button } from "@/registry/threadcn/ui/button"
import { toast } from "@/registry/threadcn/ui/toast"

// Put <Toaster /> once near the root of your app (for example in your root layout).
// Then call toast.add() from anywhere.
export default function ToastDemo() {
  return (
    <Button onClick={() => toast.add({ title: "Added to bag", description: "Model 08 Straight, W32 L34", type: "success" })}>
      Add to bag
    </Button>
  )
}
