"use client"

import { useState } from "react"

import { Button } from "@/registry/threadcn/ui/button"
import { Spinner } from "@/registry/threadcn/ui/spinner"

export default function SpinnerInButton() {
  const [saving, setSaving] = useState(false)

  function save() {
    setSaving(true)
    setTimeout(() => setSaving(false), 2000)
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <Button disabled={saving} focusableWhenDisabled onClick={save}>
        {saving && <Spinner aria-hidden="true" />}
        {saving ? "Saving your address" : "Save address"}
      </Button>
      <Button variant="secondary" size="icon" shape="round" disabled aria-label="Loading repairs">
        <Spinner aria-hidden="true" />
      </Button>
    </div>
  )
}
