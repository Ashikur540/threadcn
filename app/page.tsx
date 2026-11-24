import { Button } from "@/registry/threadcn/ui/button"
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

      <Section title="Dialog">
        <div className={row}>
          <DialogDemo />
        </div>
      </Section>
    </main>
  )
}
