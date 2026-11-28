import { Badge } from "@/registry/threadcn/ui/badge"

export default function BadgeVariants() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Badge>New</Badge>
      <Badge variant="secondary">Raw denim</Badge>
      <Badge variant="destructive">Sold out</Badge>
      <Badge variant="outline">14 oz</Badge>
      <Badge variant="ghost">Selvedge</Badge>
      <Badge variant="link">Size guide</Badge>
    </div>
  )
}
