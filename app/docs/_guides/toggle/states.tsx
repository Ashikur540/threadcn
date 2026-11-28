import type * as React from "react"

import { Toggle } from "@/registry/threadcn/ui/toggle"

function State({ caption, children }: { caption: string; children: React.ReactNode }) {
  return (
    <div className="grid w-28 justify-items-center gap-2 text-center">
      {children}
      <p className="text-xs">{caption}</p>
    </div>
  )
}

export default function ToggleStates() {
  return (
    <div className="flex flex-wrap items-start justify-center gap-x-6 gap-y-8">
      <State caption="Off">
        <Toggle variant="outline">Waist 32</Toggle>
      </State>
      <State caption="On (pressed)">
        <Toggle variant="outline" defaultPressed>
          Waist 32
        </Toggle>
      </State>
      <State caption="Focus (how it looks when you Tab to it)">
        <Toggle variant="outline" data-docs-focus>
          Waist 32
        </Toggle>
      </State>
      <State caption="Disabled">
        <Toggle variant="outline" disabled>
          Waist 32
        </Toggle>
      </State>
    </div>
  )
}
