"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/threadcn/ui/tabs"

/** "CLI" or "Manual" install, both built by the server; this only switches between them. */
export function InstallTabs({ cli, manual }: { cli: React.ReactNode; manual: React.ReactNode }) {
  return (
    <Tabs defaultValue="cli" className="gap-0">
      <TabsList variant="line" aria-label="Install method">
        <TabsTrigger value="cli">CLI</TabsTrigger>
        <TabsTrigger value="manual">Manual</TabsTrigger>
      </TabsList>
      <TabsContent value="cli" className="[--_stitch:transparent] bg-transparent grid gap-4 p-0">
        {cli}
      </TabsContent>
      <TabsContent value="manual" className="[--_stitch:transparent] bg-transparent grid gap-4 p-0">
        {manual}
      </TabsContent>
    </Tabs>
  )
}
