"use client"

import { useState } from "react"

import { Button } from "@/registry/threadcn/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/threadcn/ui/tabs"

/** A small Copy button. Says "Copied" for a moment, and tells screen readers too. */
export function CopyButton({ text, label = "Copy" }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {}
  }

  return (
    <Button size="xs" onClick={copy} aria-label={copied ? "Copied" : `${label}: ${text}`}>
      <span aria-live="polite">{copied ? "Copied" : label}</span>
    </Button>
  )
}

const managers = {
  npm: "npx shadcn add",
  pnpm: "pnpm dlx shadcn add",
  yarn: "yarn dlx shadcn add",
  bun: "bunx --bun shadcn add",
} as const

/** The install command for one item, with npm / pnpm / yarn / bun tabs and a copy button. */
export function InstallCommand({ item = "button", className }: { item?: string; className?: string }) {
  return (
    <Tabs defaultValue="npm" className={className}>
      <TabsList variant="line" aria-label="Package manager">
        {Object.keys(managers).map((pm) => (
          <TabsTrigger key={pm} value={pm}>
            {pm}
          </TabsTrigger>
        ))}
      </TabsList>
      {Object.entries(managers).map(([pm, run]) => {
        const command = `${run} @threadcn/${item}`
        return (
          <TabsContent key={pm} value={pm} className="p-0">
            <div className="flex items-center gap-3 rounded-[10px] bg-(--tx-field) py-1.5 pr-1.5 pl-4 text-(--tx-field-foreground)">
              <code className="min-w-0 flex-1 overflow-x-auto font-mono text-[15px] whitespace-nowrap [scrollbar-width:none]">{command}</code>
              <CopyButton text={command} />
            </div>
          </TabsContent>
        )
      })}
    </Tabs>
  )
}
