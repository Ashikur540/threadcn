import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/threadcn/ui/tabs"

const looks = ["default", "line", "leather"] as const

export default function TabsVariants() {
  return (
    <div className="grid w-full max-w-md gap-8">
      {looks.map((look) => (
        <div key={look} className="grid gap-2">
          <p className="font-mono text-xs">variant=&quot;{look}&quot;</p>
          <Tabs defaultValue="details">
            <TabsList variant={look} aria-label={`Model 08, ${look} tabs`}>
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="sizing">Sizing</TabsTrigger>
              <TabsTrigger value="care">Care</TabsTrigger>
            </TabsList>
            <TabsContent value="details">Model 08 Straight. Raw selvedge denim, 14 oz cotton.</TabsContent>
            <TabsContent value="sizing">Waist 28 to 38. Size down for a slim fit.</TabsContent>
            <TabsContent value="care">Wash cold, inside out. Hang to dry.</TabsContent>
          </Tabs>
        </div>
      ))}
    </div>
  )
}
