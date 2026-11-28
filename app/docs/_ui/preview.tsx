"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/threadcn/ui/tabs"

/** A live component on the fabric, with a Code tab showing the exact source of what you see. */
export function Preview({ children, code, label }: { children: React.ReactNode; code: React.ReactNode; label: string }) {
  return (
    <Tabs defaultValue="preview" className="min-w-0 gap-0">
      <TabsList variant="line" aria-label={`${label}: preview or code`}>
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
      </TabsList>
      <TabsContent value="preview" className="[&>[data-slot=stitch]]:hidden bg-transparent p-0">
        <div className="docs-stage tx-fabric shadow-[inset_0_2px_10px_rgb(0_0_0/.35)] grid min-h-64 grid-cols-[minmax(0,1fr)] place-items-center overflow-x-auto rounded-xl p-6 sm:p-10">{children}</div>
      </TabsContent>
      <TabsContent value="code" className="[&>[data-slot=stitch]]:hidden bg-transparent p-0">
        {code}
      </TabsContent>
    </Tabs>
  )
}
