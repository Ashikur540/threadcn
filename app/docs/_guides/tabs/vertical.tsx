import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/threadcn/ui/tabs"

export default function TabsVertical() {
  return (
    <Tabs orientation="vertical" defaultValue="hem" className="w-full max-w-md">
      <TabsList aria-label="Repairs">
        <TabsTrigger value="hem">Hem</TabsTrigger>
        <TabsTrigger value="knee">Knee patch</TabsTrigger>
        <TabsTrigger value="zip">Zip</TabsTrigger>
      </TabsList>
      <TabsContent value="hem">We take up the hem and keep the original chain stitch. Ready in 3 days.</TabsContent>
      <TabsContent value="knee">A denim patch sewn in from the inside, so it stays flat. Ready in 9 days.</TabsContent>
      <TabsContent value="zip">A new brass zip, matched to your pair. Ready in 5 days.</TabsContent>
    </Tabs>
  )
}
