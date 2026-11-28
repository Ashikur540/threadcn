import type * as React from "react"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/registry/threadcn/ui/select"

const waists = ["30", "31", "32", "33", "34"].map((w) => ({ label: `Waist ${w}`, value: w }))

function WaistSelect({ disabled, ...props }: React.ComponentProps<typeof SelectTrigger>) {
  return (
    <Select items={waists} defaultValue="32" disabled={disabled}>
      <SelectTrigger aria-label="Waist" className="w-32" {...props}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {waists.map((waist) => (
          <SelectItem key={waist.value} value={waist.value}>
            {waist.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

function State({ caption, children }: { caption: string; children: React.ReactNode }) {
  return (
    <div className="grid w-32 justify-items-center gap-2 text-center">
      {children}
      <p className="text-xs">{caption}</p>
    </div>
  )
}

export default function SelectStates() {
  return (
    <div className="flex flex-wrap items-start justify-center gap-x-3 gap-y-8">
      <State caption="Default">
        <WaistSelect />
      </State>
      <State caption="Focus (how it looks when you Tab to it)">
        <WaistSelect data-docs-focus />
      </State>
      <State caption="Error">
        <WaistSelect aria-invalid />
      </State>
      <State caption="Disabled">
        <WaistSelect disabled />
      </State>
    </div>
  )
}
