import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/threadcn/ui/tabs"

export default function TabsDisabled() {
  return (
    <Tabs defaultValue="details" className="w-full max-w-md">
      <TabsList aria-label="Model 08">
        <TabsTrigger value="details">Details</TabsTrigger>
        <TabsTrigger value="fit">Fit</TabsTrigger>
        <TabsTrigger value="reviews" disabled>
          Reviews
        </TabsTrigger>
      </TabsList>
      <TabsContent value="details">Model 08 Straight. Raw selvedge denim, 14 oz cotton.</TabsContent>
      <TabsContent value="fit">Waist 28 to 38. Size down for a slim fit.</TabsContent>
      <TabsContent value="reviews">No reviews yet.</TabsContent>
    </Tabs>
  )
}
