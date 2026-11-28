import Link from "next/link"
import { cn } from "cn"

import { Badge } from "@/registry/threadcn/ui/badge"
import { Button, buttonVariants } from "@/registry/threadcn/ui/button"
import { Checkbox } from "@/registry/threadcn/ui/checkbox"
import { Input } from "@/registry/threadcn/ui/input"
import { Kbd } from "@/registry/threadcn/ui/kbd"
import { Label } from "@/registry/threadcn/ui/label"
import { Patch, PatchDot } from "@/registry/threadcn/ui/patch"
import { Progress, ProgressLabel, ProgressValue } from "@/registry/threadcn/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/registry/threadcn/ui/radio-group"
import { Slider } from "@/registry/threadcn/ui/slider"
import { Spinner } from "@/registry/threadcn/ui/spinner"
import { Stitch } from "@/registry/threadcn/ui/stitch"
import { Switch } from "@/registry/threadcn/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/threadcn/ui/tabs"
import { Toggle } from "@/registry/threadcn/ui/toggle"

import { components } from "../_site/catalog"
import { repoUrl } from "../_site/github"
import { HeroAvatars, HeroInstall } from "./hero-bits"

type Cloth = "page" | "other" | "surface"

/**
 * One block of the quilt. "page" uses the page's fabric, "other" always shows
 * the other one (data-fabric="flip"), so the quilt changes with the mode switch.
 */
function Block({ cloth = "page", name, className, children }: { cloth?: Cloth; name?: string; className?: string; children: React.ReactNode }) {
  return (
    <div
      data-fabric={cloth === "other" ? "flip" : undefined}
      className={cn(
        "tx-fabric relative flex min-h-40 flex-col justify-center gap-3 rounded-md p-6 [--_inset:7px] [--_radius:6px]",
        cloth === "surface" && "bg-(--tx-surface)",
        className,
      )}
    >
      <Stitch />
      {name && <span className="font-(family-name:--tx-font-patch) text-sm text-(--tx-muted-foreground)">{name}</span>}
      {children}
    </div>
  )
}

export function Quilt() {
  return (
    <section aria-labelledby="hero-title" className="mx-auto max-w-7xl px-4 pt-3 pb-16 md:px-8">
      <div className="relative grid grid-cols-2 gap-1.5 rounded-lg bg-black/30 p-1.5 lg:auto-rows-[minmax(11rem,auto)] lg:grid-cols-6">
        <Block cloth="other" className="col-span-2 justify-end gap-4 p-8 md:p-11 lg:col-span-3 lg:col-start-1 lg:row-span-2 lg:row-start-1">
          <h1 id="hero-title" className="font-(family-name:--tx-font-heading) text-5xl leading-[0.95] font-bold tracking-tight text-balance md:text-7xl">
            shadcn/ui, stitched.
          </h1>
          <p className="max-w-[44ch] text-lg text-(--tx-muted-foreground)">
            {components.length} components that look sewn from denim. Same names and props as shadcn/ui, Base UI underneath, Tailwind v4 on top.
            Every block on this quilt is one of them.
          </p>
        </Block>

        <Block className="col-span-2 bg-(--tx-leather) p-4 text-(--tx-leather-foreground) md:p-11 lg:col-span-3 lg:col-start-1 lg:row-start-3">
          <HeroInstall className="[--tx-muted-foreground:var(--tx-leather-foreground)]" />
          <div className="flex flex-wrap gap-3">
            <Link href="/docs/components" className={buttonVariants({ size: "sm" })}>
              <Stitch />
              Browse components
            </Link>
            <a href={repoUrl} target="_blank" rel="noreferrer" className={buttonVariants({ size: "sm", variant: "secondary" })}>
              <Stitch />
              Star on GitHub
            </a>
          </div>
        </Block>

        <Block name="Button" cloth="page">
          <Button className="self-start">Add to bag</Button>
        </Block>
        <Block name="Checkbox" cloth="surface">
          <Label>
            <Checkbox defaultChecked /> Hem 2 cm
          </Label>
          <Label>
            <Checkbox /> Add a patch
          </Label>
        </Block>
        <Block name="Switch" cloth="other">
          <Label>
            <Switch defaultChecked /> Express
          </Label>
        </Block>

        <Block name="Avatar and Tooltip" cloth="other">
          <HeroAvatars />
        </Block>
        <Block name="Tabs" className="col-span-2">
          <Tabs defaultValue="fit">
            <TabsList aria-label="Product details">
              <TabsTrigger value="fit">Fit</TabsTrigger>
              <TabsTrigger value="wash">Wash</TabsTrigger>
              <TabsTrigger value="repairs">Repairs</TabsTrigger>
            </TabsList>
            <TabsContent value="fit">Straight from hip to hem. True to size.</TabsContent>
            <TabsContent value="wash">Cold, inside out. Hang to dry.</TabsContent>
            <TabsContent value="repairs">Free, forever. Send them back any time.</TabsContent>
          </Tabs>
        </Block>

        <Block name="Slider" cloth="surface">
          <Slider defaultValue={[58]} aria-label="Rise" />
        </Block>
        <Block name="Progress" cloth="other">
          <Progress value={72}>
            <ProgressLabel>Pairs hemmed</ProgressLabel>
            <ProgressValue />
          </Progress>
        </Block>
        <Block name="Input">
          <Label htmlFor="quilt-waist">Waist</Label>
          <Input id="quilt-waist" placeholder="32 inch" />
        </Block>

        <Block name="Badge" cloth="other">
          <div className="flex flex-wrap gap-2">
            <Badge>New</Badge>
            <Badge variant="secondary">14 oz</Badge>
          </div>
        </Block>
        <Block name="Patch" cloth="surface">
          <Patch variant="round" className="self-start">
            <PatchDot>{components.length}</PatchDot>
            Components
          </Patch>
        </Block>
        <Block name="Secondary button">
          <Button variant="secondary" className="self-start">Save for later</Button>
        </Block>
        <Block name="Toggle" cloth="other">
          <Toggle variant="outline" className="self-start">Only my size</Toggle>
        </Block>
        <Block name="Radio group" cloth="surface">
          <RadioGroup defaultValue="regular" aria-label="Fit" className="grid gap-2">
            <Label><RadioGroupItem value="slim" /> Slim</Label>
            <Label><RadioGroupItem value="regular" /> Regular</Label>
          </RadioGroup>
        </Block>
        <Block name="Spinner and Kbd" className="max-lg:hidden">
          <span className="flex items-center gap-2"><Spinner aria-hidden="true" /> Saving</span>
          <span className="text-sm">Copy with <Kbd>⌘</Kbd> <Kbd>C</Kbd></span>
        </Block>

        <Patch aria-hidden="true" className="pointer-events-none absolute top-[49%] left-[36%] z-10 -rotate-6 max-lg:hidden">
          MIT · you own the code
        </Patch>
      </div>
    </section>
  )
}
