import { Button } from "@/registry/threadcn/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/registry/threadcn/ui/card"

function JeansPicture() {
  return (
    <svg viewBox="0 0 320 160" role="img" aria-label="Drawing of a pair of Model 08 jeans" className="block h-auto w-full rounded-lg bg-[#efe3c6]">
      <path d="M128 22h64l10 120h-30l-12-78-12 78h-30z" fill="#2b4a74" />
      <path d="M128 34h64" stroke="#f7b866" strokeWidth="2" strokeDasharray="5 4" />
      <path d="M136 40v96M184 40v96" stroke="#f7b866" strokeWidth="1.5" strokeDasharray="5 4" />
      <circle cx="160" cy="28" r="3" fill="#c9853a" />
    </svg>
  )
}

export default function CardWithImage() {
  return (
    <Card className="w-full max-w-sm">
      <JeansPicture />
      <CardHeader>
        <CardTitle>Model 08 Straight</CardTitle>
        <CardDescription>Indigo Supply, $148</CardDescription>
      </CardHeader>
      <CardContent>Cut straight from hip to hem. Size down for a slimmer look.</CardContent>
      <CardFooter>
        <Button size="sm">Add to bag</Button>
      </CardFooter>
    </Card>
  )
}
