import { Badge } from "@/registry/threadcn/ui/badge"
import { Button } from "@/registry/threadcn/ui/button"
import { Checkbox } from "@/registry/threadcn/ui/checkbox"
import { Input } from "@/registry/threadcn/ui/input"
import { Label } from "@/registry/threadcn/ui/label"
import { Patch, PatchDot } from "@/registry/threadcn/ui/patch"
import { RadioGroup, RadioGroupItem } from "@/registry/threadcn/ui/radio-group"
import { Separator } from "@/registry/threadcn/ui/separator"
import { Switch } from "@/registry/threadcn/ui/switch"
import { Textarea } from "@/registry/threadcn/ui/textarea"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/registry/threadcn/ui/card"

import { DialogDemo } from "./dialog-demo"
import { ThemeToggle } from "./theme-toggle"

const variants = ["default", "secondary", "destructive", "leather", "outline", "ghost", "link"] as const

function Heart() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}

function Scissors() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M20 4 8.12 15.88" />
      <path d="M14.47 14.48 20 20" />
      <path d="M8.12 8.12 12 12" />
    </svg>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-4">
      <h2 className="font-(family-name:--tx-font-heading) text-2xl font-bold">{title}</h2>
      {children}
    </section>
  )
}

const row = "flex flex-wrap items-center gap-4"

export default function Home() {
  return (
    <main className="mx-auto grid max-w-5xl gap-12 px-4 py-10">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div className="grid gap-1">
          <h1 className="font-(family-name:--tx-font-heading) text-4xl font-bold">threadcn</h1>
          <p className="text-(--tx-muted-foreground)">Stitched, fabric-style components for shadcn/ui.</p>
        </div>
        <ThemeToggle />
      </header>

      <Section title="Button">
        <div className={row}>
          {variants.map((variant) => (
            <Button key={variant} variant={variant}>
              {variant === "link" ? "Read the care guide" : variant[0].toUpperCase() + variant.slice(1)}
            </Button>
          ))}
        </div>
        <div className={row}>
          <Button size="sm">Small</Button>
          <Button>Default</Button>
          <Button size="lg">Large</Button>
          <Button disabled>Disabled</Button>
        </div>
        <div className={row}>
          <Button size="icon" aria-label="Save to wishlist"><Heart /></Button>
          <Button size="icon" variant="secondary" aria-label="Save to wishlist"><Heart /></Button>
          <Button size="icon" variant="leather" aria-label="Save to wishlist"><Heart /></Button>
          <Button size="icon" variant="outline" aria-label="Book alterations"><Scissors /></Button>
          <Button size="icon" variant="ghost" aria-label="Book alterations"><Scissors /></Button>
          <Button size="icon" shape="round" aria-label="Book alterations"><Scissors /></Button>
          <Button size="icon" shape="round" variant="secondary" aria-label="Save to wishlist"><Heart /></Button>
        </div>
      </Section>

      <Section title="Card">
        <div className="flex flex-wrap items-start gap-6">
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle>Free repairs, forever</CardTitle>
              <CardDescription>Rips, holes and broken buttons. Send them back any time.</CardDescription>
            </CardHeader>
            <CardContent>We have fixed 1,240 pairs this year. Most come back within 9 days.</CardContent>
            <CardFooter>
              <Button size="sm">Book a repair</Button>
              <Button size="sm" variant="ghost">How it works</Button>
            </CardFooter>
          </Card>
          <Card className="w-56">
            <CardHeader>
              <CardDescription>On the machine</CardDescription>
              <CardAction>
                <Button size="icon" variant="ghost" shape="round" className="size-8" aria-label="Save"><Heart /></Button>
              </CardAction>
            </CardHeader>
            <CardContent className="font-(family-name:--tx-font-heading) text-4xl font-bold tabular-nums">36</CardContent>
          </Card>
        </div>
      </Section>

      <Section title="Badge">
        <div className={row}>
          <Badge>New</Badge>
          <Badge variant="secondary">Raw denim</Badge>
          <Badge variant="outline">14 oz</Badge>
          <Badge variant="destructive">Sold out</Badge>
          <Badge variant="ghost">Ghost</Badge>
          <Badge variant="link" render={<a href="#" />}>Care guide</Badge>
        </div>
      </Section>

      <Section title="Label and Separator">
        <div className="grid max-w-sm gap-4">
          <div className="grid gap-1.5">
            <Label htmlFor="demo-email">Email</Label>
            <Input id="demo-email" type="email" placeholder="you@studio.dev" />
          </div>
          <Separator />
          <div className="flex h-12 items-center gap-4 text-sm">
            <span>Fit</span>
            <Separator orientation="vertical" />
            <span>Wash</span>
            <Separator orientation="vertical" />
            <span>Repairs</span>
          </div>
        </div>
      </Section>

      <Section title="Input and Textarea">
        <div className="grid max-w-2xl gap-5 sm:grid-cols-2">
          <div className="grid gap-1.5">
            <Label htmlFor="f-name">Name</Label>
            <Input id="f-name" defaultValue="Rafi" />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="f-email">Email</Label>
            <Input id="f-email" aria-invalid="true" aria-describedby="f-email-error" defaultValue="rafi@indigo" />
            <p id="f-email-error" className="text-[13px] text-(--tx-invalid)">Add the part after the dot, like .shop</p>
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="f-off">Order number</Label>
            <Input id="f-off" disabled defaultValue="IND-2041" />
          </div>
          <div className="grid gap-1.5 sm:col-span-2">
            <Label htmlFor="f-notes">Repair notes</Label>
            <Textarea id="f-notes" placeholder="Where is the tear?" />
          </div>
        </div>
      </Section>

      <Section title="Checkbox, Radio and Switch">
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="grid content-start gap-3">
            <Label><Checkbox defaultChecked /> Gift wrap</Label>
            <Label><Checkbox /> Add a care card</Label>
            <Label><Checkbox indeterminate /> Some items</Label>
            <Label><Checkbox disabled defaultChecked /> Hemming (sold out)</Label>
            <Label><Checkbox aria-invalid="true" /> Accept the repair terms</Label>
          </div>
          <RadioGroup defaultValue="regular" aria-label="Fit" className="grid content-start gap-3">
            <Label><RadioGroupItem value="slim" /> Slim</Label>
            <Label><RadioGroupItem value="regular" /> Regular</Label>
            <Label><RadioGroupItem value="loose" /> Loose</Label>
            <Label><RadioGroupItem value="tapered" disabled /> Tapered (soon)</Label>
          </RadioGroup>
          <div className="grid content-start gap-3">
            <Label><Switch defaultChecked /> Express shipping</Label>
            <Label><Switch /> Gift receipt</Label>
            <Label><Switch size="sm" defaultChecked /> Small, on</Label>
            <Label><Switch size="sm" /> Small, off</Label>
            <Label><Switch disabled /> Same-day (not in your area)</Label>
          </div>
        </div>
      </Section>

      <Section title="Patch">
        <div className={row}>
          <Patch>Indigo Supply</Patch>
          <Patch render={<a href="#" />}>Indigo Supply (link)</Patch>
          <Patch variant="round">
            <PatchDot>42</PatchDot>
            Orders this week
          </Patch>
        </div>
      </Section>

      <Section title="Dialog">
        <div className={row}>
          <DialogDemo />
        </div>
      </Section>
    </main>
  )
}
