import { Badge } from "@/registry/threadcn/ui/badge"

export default function BadgeAsLink() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Badge render={<a href="#as-link" />}>Sale</Badge>
      <Badge variant="outline" render={<a href="#as-link" />}>
        Model 08
      </Badge>
      <Badge variant="link" render={<a href="#as-link" />}>
        Size guide
      </Badge>
    </div>
  )
}
