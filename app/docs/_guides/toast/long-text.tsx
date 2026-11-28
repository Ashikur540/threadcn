"use client"

import { Button } from "@/registry/threadcn/ui/button"
import { toast } from "@/registry/threadcn/ui/toast"

export default function ToastLongText() {
  return (
    <Button
      variant="secondary"
      onClick={() =>
        toast.add({
          type: "info",
          title: "Your repair is on its way back to you",
          description:
            "We fixed the torn back pocket and the broken button on your Model 08 jeans. They ship today from the Indigo Supply workshop and should reach you in three to five working days.",
          timeout: 10000,
        })
      }
    >
      Show a long toast
    </Button>
  )
}
