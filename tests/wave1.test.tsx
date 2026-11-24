import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
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
import { Progress, ProgressLabel, ProgressValue } from "@/registry/threadcn/ui/progress"
import { Skeleton } from "@/registry/threadcn/ui/skeleton"
import { Slider } from "@/registry/threadcn/ui/slider"
import { Spinner } from "@/registry/threadcn/ui/spinner"
import { Toaster, toast } from "@/registry/threadcn/ui/toast"
import { Toggle } from "@/registry/threadcn/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/registry/threadcn/ui/toggle-group"

const stitches = (el: Element) => el.querySelectorAll(':scope > svg[data-slot="stitch"]')

test("Toggle flips pressed on click and carries one stitch", async () => {
  render(<Toggle aria-label="Bold" variant="outline" size="sm">B</Toggle>)
  const toggle = screen.getByRole("button", { name: "Bold" })
  expect(toggle).toHaveAttribute("data-slot", "toggle")
  expect(toggle).toHaveClass("tx-toggle", "tx-toggle-outline")
  expect(stitches(toggle)).toHaveLength(1)
  await userEvent.click(toggle)
  expect(toggle).toHaveAttribute("aria-pressed", "true")
  expect(toggle).toHaveAttribute("data-pressed")
})

test("Toggle Group shares variant and size with its items and keeps one pressed", async () => {
  render(
    <ToggleGroup variant="outline" size="sm" spacing={0} aria-label="Fit">
      <ToggleGroupItem value="slim">Slim</ToggleGroupItem>
      <ToggleGroupItem value="regular">Regular</ToggleGroupItem>
    </ToggleGroup>,
  )
  const slim = screen.getByRole("button", { name: "Slim" })
  expect(slim).toHaveAttribute("data-slot", "toggle-group-item")
  expect(slim).toHaveAttribute("data-variant", "outline")
  expect(slim).toHaveAttribute("data-size", "sm")
  expect(screen.getByRole("group")).toHaveAttribute("data-spacing", "0")
  await userEvent.click(slim)
  await userEvent.click(screen.getByRole("button", { name: "Regular" }))
  expect(slim).toHaveAttribute("aria-pressed", "false")
})

test("Alert is a stitched care label with role=alert", () => {
  render(
    <Alert variant="destructive">
      <AlertTitle>Out of 32</AlertTitle>
      <AlertDescription>We restock on Friday.</AlertDescription>
      <AlertAction>Notify me</AlertAction>
    </Alert>,
  )
  const alert = screen.getByRole("alert")
  expect(alert).toHaveAttribute("data-slot", "alert")
  expect(alert).toHaveClass("tx-alert", "tx-alert-destructive")
  expect(stitches(alert)).toHaveLength(1)
  expect(alert.querySelector('[data-slot="alert-action"]')).not.toBeNull()
})

test("Alert Dialog opens from its trigger, wears the modal look and closes on Cancel", async () => {
  render(
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="destructive" />}>Remove item</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Remove the jeans?</AlertDialogTitle>
          <AlertDialogDescription>You can add them back later.</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Keep them</AlertDialogCancel>
          <AlertDialogAction variant="destructive">Remove</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>,
  )
  await userEvent.click(screen.getByRole("button", { name: "Remove item" }))
  const dialog = await screen.findByRole("alertdialog", { name: "Remove the jeans?" })
  expect(dialog).toHaveClass("tx-modal")
  expect(stitches(dialog)).toHaveLength(1)
  const cancel = screen.getByRole("button", { name: "Keep them" })
  expect(cancel).toHaveAttribute("data-variant", "secondary")
  await userEvent.click(cancel)
  await waitFor(() => expect(screen.queryByRole("alertdialog")).not.toBeInTheDocument())
})

test("Progress reports its value and draws a track with a fill", () => {
  render(
    <Progress value={40}>
      <ProgressLabel>Repair</ProgressLabel>
      <ProgressValue />
    </Progress>,
  )
  const bar = screen.getByRole("progressbar")
  expect(bar).toHaveAttribute("aria-valuenow", "40")
  expect(bar.querySelector('[data-slot="progress-track"] [data-slot="progress-indicator"]')).not.toBeNull()
})

test("Slider gives each sewing-button thumb a spoken name", () => {
  const { container } = render(<Slider defaultValue={[20, 80]} aria-label="Price" />)
  expect(container.querySelectorAll('[data-slot="slider-thumb"].tx-slider-thumb')).toHaveLength(2)
  // aria-label on the slider must reach the inputs a screen reader announces
  const labels = [...container.querySelectorAll('input[type="range"]')].map((i) => i.getAttribute("aria-label"))
  expect(labels).toEqual(["Price, minimum", "Price, maximum"])
})

test("a single-value Slider uses the label as is", () => {
  const { container } = render(<Slider defaultValue={[30]} aria-label="Rise" />)
  expect(container.querySelector('input[type="range"]')).toHaveAttribute("aria-label", "Rise")
})

test("Skeleton and Spinner only move when motion is allowed", () => {
  render(
    <>
      <Skeleton data-testid="sk" />
      <Spinner />
    </>,
  )
  expect(screen.getByTestId("sk")).toHaveClass("tx-skeleton", "motion-safe:animate-pulse")
  const spinner = screen.getByRole("status", { name: "Loading" })
  expect(spinner).toHaveAttribute("data-slot", "spinner")
  expect(spinner).toHaveClass("motion-safe:animate-spin")
})

test("toast() shows a stitched toast in the Toaster", async () => {
  render(<Toaster />)
  toast.add({ title: "Added to bag", description: "Model 08, W32 L34" })
  const title = await screen.findByText("Added to bag")
  const root = title.closest('[data-slot="toast"]')!
  expect(root).toHaveClass("tx-toast")
  expect(stitches(root)).toHaveLength(1)
})
