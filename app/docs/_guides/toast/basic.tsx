"use client"

import { Button } from "@/registry/threadcn/ui/button"
import { toast } from "@/registry/threadcn/ui/toast"

// <Toaster /> is mounted once in the layout, so this button only calls toast.add().
export default function ToastBasic() {
  return (
    <Button onClick={() => toast.add({ title: "Added to bag", description: "Model 08 Straight, waist 32, length 34" })}>Add to bag</Button>
  )
}
