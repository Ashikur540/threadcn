"use client"

import { Alert, AlertAction, AlertDescription, AlertTitle } from "@/registry/threadcn/ui/alert"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/registry/threadcn/ui/alert-dialog"
import { Button } from "@/registry/threadcn/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/registry/threadcn/ui/card"
import { Label } from "@/registry/threadcn/ui/label"
import { Progress, ProgressLabel, ProgressValue } from "@/registry/threadcn/ui/progress"
import { Skeleton } from "@/registry/threadcn/ui/skeleton"
import { Slider } from "@/registry/threadcn/ui/slider"
import { Spinner } from "@/registry/threadcn/ui/spinner"
import { Toaster, toast } from "@/registry/threadcn/ui/toast"
import { Toggle } from "@/registry/threadcn/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/registry/threadcn/ui/toggle-group"

function Info() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5M12 7.5v.01" />
    </svg>
  )
}

function Bold() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 5h6a3.5 3.5 0 0 1 0 7H7zM7 12h7a3.5 3.5 0 0 1 0 7H7z" />
    </svg>
  )
}

const row = "flex flex-wrap items-center gap-4"

export function ToggleDemo() {
  return (
    <div className="grid gap-4">
      <div className={row}>
        <Toggle aria-label="Bold"><Bold /></Toggle>
        <Toggle aria-label="Bold (on)" defaultPressed><Bold /></Toggle>
        <Toggle variant="outline">Show sold out</Toggle>
        <Toggle variant="outline" defaultPressed>Only my size</Toggle>
        <Toggle size="sm" variant="outline">Small</Toggle>
        <Toggle disabled>Disabled</Toggle>
      </div>
      <div className={row}>
        <ToggleGroup variant="outline" defaultValue={["regular"]} aria-label="Fit">
          <ToggleGroupItem value="slim">Slim</ToggleGroupItem>
          <ToggleGroupItem value="regular">Regular</ToggleGroupItem>
          <ToggleGroupItem value="loose">Loose</ToggleGroupItem>
        </ToggleGroup>
        <ToggleGroup multiple spacing={1} defaultValue={["raw", "stretch"]} aria-label="Fabric">
          <ToggleGroupItem value="raw">Raw</ToggleGroupItem>
          <ToggleGroupItem value="washed">Washed</ToggleGroupItem>
          <ToggleGroupItem value="stretch">Stretch</ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  )
}

export function FeedbackDemo() {
  return (
    <Toaster>
      <div className="grid gap-6">
        <div className="grid max-w-2xl gap-3">
          <Alert>
            <Info />
            <AlertTitle>Free repairs, forever</AlertTitle>
            <AlertDescription>Rips, holes and broken buttons. Send them back any time.</AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <Info />
            <AlertTitle>W32 L34 is sold out</AlertTitle>
            <AlertDescription>We restock on Friday.</AlertDescription>
            <AlertAction>
              <Button size="xs" variant="secondary">Notify me</Button>
            </AlertAction>
          </Alert>
        </div>
        <div className={row}>
          <Button onClick={() => toast.add({ title: "Added to bag", description: "Model 08 Straight, W32 L34", type: "success" })}>Show a toast</Button>
          <Button variant="destructive" onClick={() => toast.add({ title: "Payment failed", description: "Your card was declined.", type: "error" })}>Show an error toast</Button>
          <Button variant="secondary" disabled><Spinner /> Saving</Button>
          <AlertDialog>
            <AlertDialogTrigger render={<Button variant="outline" />}>Remove item</AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Remove the jeans from your bag?</AlertDialogTitle>
                <AlertDialogDescription>You can add them back later. Your size stays saved.</AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Keep them</AlertDialogCancel>
                <AlertDialogAction variant="destructive">Remove</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        <div className="grid max-w-2xl gap-6 sm:grid-cols-2">
          <div className="grid gap-5">
            <Progress value={62}>
              <ProgressLabel>Repair in progress</ProgressLabel>
              <ProgressValue />
            </Progress>
            <div className="grid gap-2">
              <Label>Price range</Label>
              <Slider defaultValue={[40, 140]} max={200} aria-label="Price range" />
            </div>
            <div className="grid gap-2">
              <Label>Rise</Label>
              <Slider defaultValue={[30]} aria-label="Rise" />
            </div>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Loading…</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-2.5">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-24 w-full" />
            </CardContent>
          </Card>
        </div>
      </div>
    </Toaster>
  )
}
