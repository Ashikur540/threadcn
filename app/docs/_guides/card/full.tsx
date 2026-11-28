import { Badge } from "@/registry/threadcn/ui/badge"
import { Button } from "@/registry/threadcn/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/registry/threadcn/ui/card"

export default function CardFull() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle role="heading" aria-level={3}>
          Model 08 Straight
        </CardTitle>
        <CardDescription>Raw selvedge denim, 14 oz. Waist 32, inseam 30.</CardDescription>
        <CardAction>
          <Badge variant="secondary">New</Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>$148. Free hemming, and free repairs for as long as you own them.</p>
      </CardContent>
      <CardFooter>
        <Button size="sm">Add to bag</Button>
        <Button size="sm" variant="ghost">
          Size guide
        </Button>
      </CardFooter>
    </Card>
  )
}
