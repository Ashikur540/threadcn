import { Badge } from "@/registry/threadcn/ui/badge"

export default function BadgeDemo() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge>New</Badge>
      <Badge variant="secondary">Raw denim</Badge>
      <Badge variant="outline">14 oz</Badge>
      <Badge variant="destructive">Sold out</Badge>
    </div>
  )
}
