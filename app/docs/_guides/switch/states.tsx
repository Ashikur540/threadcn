import type * as React from "react"

import { Switch } from "@/registry/threadcn/ui/switch"

function State({ caption, children }: { caption: string; children: React.ReactNode }) {
  return (
    <div className="grid w-24 justify-items-center gap-2 text-center">
      {children}
      <p className="text-xs">{caption}</p>
    </div>
  )
}

export default function SwitchStates() {
  return (
    <div className="flex flex-wrap items-start justify-center gap-x-4 gap-y-8">
      <State caption="Off">
        <Switch aria-label="Express shipping" />
      </State>
      <State caption="On">
        <Switch aria-label="Express shipping" defaultChecked />
      </State>
      <State caption="Focus (how it looks when you Tab to it)">
        <Switch aria-label="Express shipping" data-docs-focus />
      </State>
      <State caption="Error">
        <Switch aria-label="Express shipping" aria-invalid />
      </State>
      <State caption="Disabled">
        <Switch aria-label="Express shipping" disabled />
      </State>
    </div>
  )
}
