import { Button } from "@/registry/threadcn/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/registry/threadcn/ui/card"

export default function CardDemo() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Free repairs, forever</CardTitle>
        <CardDescription>Rips, holes and broken buttons. Send them back any time.</CardDescription>
      </CardHeader>
      <CardContent>Most pairs come back within 9 days.</CardContent>
      <CardFooter>
        <Button size="sm">Book a repair</Button>
        <Button size="sm" variant="ghost">How it works</Button>
      </CardFooter>
    </Card>
  )
}
