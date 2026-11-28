import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/threadcn/ui/tabs"

const icon = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "size-4", "aria-hidden": true } as const

export default function TabsWithIcons() {
  return (
    <Tabs defaultValue="details" className="w-full max-w-md">
      <TabsList variant="leather" aria-label="Model 08">
        <TabsTrigger value="details">
          <svg {...icon}>
            <path d="M3 12V4a1 1 0 0 1 1-1h8l9 9-9 9-9-9Z" />
            <circle cx="7.5" cy="7.5" r="1.5" />
          </svg>
          Info
        </TabsTrigger>
        <TabsTrigger value="fit">
          <svg {...icon}>
            <rect x="2" y="8" width="20" height="8" rx="1" />
            <path d="M6 8v3M10 8v4M14 8v3M18 8v4" />
          </svg>
          Fit
        </TabsTrigger>
        <TabsTrigger value="care">
          <svg {...icon}>
            <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z" />
          </svg>
          Care
        </TabsTrigger>
      </TabsList>
      <TabsContent value="details">Model 08 Straight. Raw selvedge denim, 14 oz cotton.</TabsContent>
      <TabsContent value="fit">Waist 28 to 38. Size down for a slim fit.</TabsContent>
      <TabsContent value="care">Wash cold, inside out. Hang to dry.</TabsContent>
    </Tabs>
  )
}
