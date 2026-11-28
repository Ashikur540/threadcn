"use client"

import { Button } from "@/registry/threadcn/ui/button"
import { toast } from "@/registry/threadcn/ui/toast"

function bookRepair() {
  return new Promise<void>((resolve) => setTimeout(resolve, 2000))
}

export default function ToastTypes() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button variant="secondary" onClick={() => toast.add({ type: "success", title: "Order placed", description: "We sent the receipt to your email." })}>
        Success
      </Button>
      <Button variant="secondary" onClick={() => toast.add({ type: "info", title: "New color in stock", description: "Model 08 now comes in black." })}>
        Info
      </Button>
      <Button variant="secondary" onClick={() => toast.add({ type: "warning", title: "Only 2 left", description: "Waist 32 is almost gone." })}>
        Warning
      </Button>
      <Button variant="secondary" onClick={() => toast.add({ type: "error", title: "Payment failed", description: "Your card was declined." })}>
        Error
      </Button>
      <Button
        variant="secondary"
        onClick={() =>
          toast.promise(bookRepair(), {
            loading: { title: "Booking your repair" },
            success: { title: "Repair booked", description: "Drop your jeans at any Indigo Supply store." },
            error: { title: "Could not book the repair" },
          })
        }
      >
        Loading, then success
      </Button>
    </div>
  )
}
