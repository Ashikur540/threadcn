"use client"

import { useState } from "react"

import { Label } from "@/registry/threadcn/ui/label"
import { Textarea } from "@/registry/threadcn/ui/textarea"

const max = 200

export default function TextareaCharacterHint() {
  const [text, setText] = useState("")
  return (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="textarea-character-hint-notes">Repair notes</Label>
      <Textarea
        id="textarea-character-hint-notes"
        placeholder="Where is the tear, and how big is it?"
        maxLength={max}
        value={text}
        onChange={(e) => setText(e.target.value)}
        aria-describedby="textarea-character-hint-count"
      />
      <p id="textarea-character-hint-count" className="text-right text-[13px] text-(--tx-muted-foreground)">
        {text.length} of {max} characters
      </p>
    </div>
  )
}
