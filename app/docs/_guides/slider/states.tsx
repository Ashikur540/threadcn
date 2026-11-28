import type * as React from "react"

import { Slider } from "@/registry/threadcn/ui/slider"

function State({ caption, children }: { caption: string; children: React.ReactNode }) {
  return (
    <div className="grid w-40 gap-2 text-center">
      {children}
      <p className="text-xs">{caption}</p>
    </div>
  )
}

export default function SliderStates() {
  return (
    <div className="flex flex-wrap items-start justify-center gap-x-6 gap-y-8">
      <State caption="Default">
        <Slider defaultValue={60} aria-label="Fade" />
      </State>
      <State caption="Focus (how it looks when you Tab to it)">
        <Slider defaultValue={60} aria-label="Fade" data-docs-focus />
      </State>
      <State caption="Disabled">
        <Slider defaultValue={60} aria-label="Fade" disabled />
      </State>
    </div>
  )
}
