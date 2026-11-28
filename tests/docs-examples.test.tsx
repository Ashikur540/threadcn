import { readdirSync, readFileSync } from "node:fs"
import { render, screen } from "@testing-library/react"

import ButtonLoading from "@/app/docs/_guides/button/loading"
import SpinnerDemo from "@/app/docs/_demos/spinner"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/registry/threadcn/ui/accordion"

// A Spinner says "Loading" to screen readers. Next to words in a button, that doubled the name ("Loading Saving").
test("a button with a Spinner and words is read by its words only", () => {
  render(<ButtonLoading />)
  expect(screen.getByRole("button", { name: "Placing order" })).toBeTruthy()
  expect(screen.getByRole("button", { name: "Saving" })).toBeTruthy()
  render(<SpinnerDemo />)
  expect(screen.getAllByRole("button", { name: "Saving" }).length).toBe(2)
})

// Toasts need exactly one <Toaster /> on the page. It lives in the docs layout, so examples
// work no matter which tab is open, and no example mounts a second one (that would show every toast twice).
test("the docs mount one Toaster, in the layout, and no example mounts another", () => {
  expect(readFileSync("app/docs/layout.tsx", "utf8")).toContain("<Toaster />")
  for (const dir of ["app/docs/_demos", "app/docs/_guides"]) {
    for (const file of readdirSync(dir, { recursive: true, encoding: "utf8" }).filter((f) => f.endsWith(".tsx"))) {
      const code = readFileSync(`${dir}/${file}`, "utf8").replace(/^\s*\/\/.*$/gm, "") // comments may mention it
      expect(code, file).not.toMatch(/<Toaster[\s>/]/)
    }
  }
})

// Base UI marks a disabled trigger with data-disabled (and disabled), never aria-disabled,
// so the fade and the hover rule must look for data-disabled.
test("a disabled Accordion item fades and doesn't underline on hover", () => {
  render(
    <Accordion>
      <AccordionItem value="hem" disabled>
        <AccordionTrigger>Can you hem jeans bought elsewhere?</AccordionTrigger>
        <AccordionContent>Not yet.</AccordionContent>
      </AccordionItem>
    </Accordion>,
  )
  const trigger = screen.getByRole("button", { name: "Can you hem jeans bought elsewhere?" })
  expect(trigger.hasAttribute("data-disabled")).toBe(true)
  expect(trigger.className).toContain("data-disabled:opacity-50")
  expect(readFileSync("registry/threadcn/styles/accordion.css", "utf8")).toContain(".tx-accordion-trigger:hover:where(:not([data-disabled]))")
})
