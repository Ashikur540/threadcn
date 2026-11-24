import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Button } from "@/registry/threadcn/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/registry/threadcn/ui/dialog"

function Example() {
  return (
    <Dialog>
      <DialogTrigger render={<Button />}>Book a repair</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Book a free repair</DialogTitle>
          <DialogDescription>We will email a prepaid label.</DialogDescription>
        </DialogHeader>
        <DialogFooter showCloseButton />
      </DialogContent>
    </Dialog>
  )
}

test("the trigger opens a dialog named by its title", async () => {
  render(<Example />)
  await userEvent.click(screen.getByRole("button", { name: "Book a repair" }))
  expect(await screen.findByRole("dialog", { name: "Book a free repair" })).toBeInTheDocument()
})

test("Escape closes the dialog", async () => {
  render(<Example />)
  await userEvent.click(screen.getByRole("button", { name: "Book a repair" }))
  await screen.findByRole("dialog")
  await userEvent.keyboard("{Escape}")
  await waitFor(() => expect(screen.queryByRole("dialog")).not.toBeInTheDocument())
})

test("the footer close button is the dark denim patch and closes the dialog", async () => {
  render(<Example />)
  await userEvent.click(screen.getByRole("button", { name: "Book a repair" }))
  const dialog = await screen.findByRole("dialog")
  const cancel = Array.from(dialog.querySelectorAll('[data-slot="dialog-footer"] [data-slot="button"]'))[0]
  expect(cancel).toHaveAttribute("data-variant", "secondary")
  await userEvent.click(cancel)
  await waitFor(() => expect(screen.queryByRole("dialog")).not.toBeInTheDocument())
})

test("the corner X closes the dialog", async () => {
  render(<Example />)
  await userEvent.click(screen.getByRole("button", { name: "Book a repair" }))
  await screen.findByRole("dialog")
  await userEvent.click(screen.getByRole("button", { name: "Close" }))
  await waitFor(() => expect(screen.queryByRole("dialog")).not.toBeInTheDocument())
})

test("a max-width class on DialogContent makes it wider, like shadcn", async () => {
  render(
    <Dialog defaultOpen>
      <DialogContent className="sm:max-w-2xl">
        <DialogTitle>Wide</DialogTitle>
      </DialogContent>
    </Dialog>,
  )
  const dialog = await screen.findByRole("dialog")
  expect(dialog).toHaveClass("w-full", "sm:max-w-2xl")
  expect(dialog).not.toHaveClass("sm:max-w-md")
  expect(dialog.className).not.toMatch(/(^|\s)w-\[/)
})
