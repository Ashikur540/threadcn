import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/threadcn/ui/tabs"

export default function TabsDemo() {
  return (
    <Tabs defaultValue="details" className="w-full max-w-sm">
      <TabsList aria-label="Product">
        <TabsTrigger value="details">Details</TabsTrigger>
        <TabsTrigger value="sizing">Sizing</TabsTrigger>
        <TabsTrigger value="care">Care</TabsTrigger>
      </TabsList>
      <TabsContent value="details">Raw selvedge denim, 14 oz cotton.</TabsContent>
      <TabsContent value="sizing">True to size. Size down for a slim fit.</TabsContent>
      <TabsContent value="care">Wash cold, inside out. Hang to dry.</TabsContent>
    </Tabs>
  )
}
