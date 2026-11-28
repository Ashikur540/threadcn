import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/registry/threadcn/ui/card"

export default function CardSizes() {
  return (
    <div className="flex w-full flex-wrap items-start justify-center gap-4">
      <Card className="w-full max-w-64">
        <CardHeader>
          <CardTitle>Default</CardTitle>
          <CardDescription>Repair IND-2041</CardDescription>
        </CardHeader>
        <CardContent>Left knee patch. Ready on Friday.</CardContent>
      </Card>
      <Card size="sm" className="w-full max-w-64">
        <CardHeader>
          <CardTitle>Small</CardTitle>
          <CardDescription>Repair IND-2039</CardDescription>
        </CardHeader>
        <CardContent>New belt loop. Ready today.</CardContent>
      </Card>
    </div>
  )
}
