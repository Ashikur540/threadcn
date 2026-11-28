"use client"

import { useState } from "react"

import { Button } from "@/registry/threadcn/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/registry/threadcn/ui/collapsible"

export default function CollapsibleControlled() {
  const [open, setOpen] = useState(false)

  return (
    <div className="grid w-full max-w-sm gap-3 text-sm">
      <p>
        The repair notes are <strong>{open ? "open" : "closed"}</strong>.
      </p>
      <Collapsible open={open} onOpenChange={setOpen} className="grid gap-3">
        <div className="flex flex-wrap gap-2">
          <CollapsibleTrigger render={<Button variant="outline" size="sm" />}>Repair notes</CollapsibleTrigger>
          <Button variant="ghost" size="sm" onClick={() => setOpen(false)} disabled={!open}>
            Close from outside
          </Button>
        </div>
        <CollapsibleContent className="rounded-md bg-(--tx-field) p-3 text-(--tx-field-foreground)">
          IND-2041, Model 08, waist 32. Patch the left knee from the inside with matching indigo thread.
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}
