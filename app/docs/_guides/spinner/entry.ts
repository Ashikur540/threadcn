import SpinnerInButton from "./in-button"
import { SpinnerNotes } from "./notes"
import SpinnerSizes from "./sizes"
import type { Guide } from "../types"

const dir = "app/docs/_guides/spinner"

export default {
  examples: [
    {
      slug: "sizes",
      title: "Size and color",
      description:
        "There is no `size` prop. The Spinner is 16px (`size-4`) and you change it with a `size-` class. It draws in the text color around it, so a `text-` class changes its color, like the gold one here.",
      file: `${dir}/sizes.tsx`,
      Component: SpinnerSizes,
    },
    {
      slug: "in-button",
      title: "Inside a button",
      description:
        "Press Save address. While the work runs, the button shows a Spinner, says what it is doing, and is disabled so it can't be pressed twice. `focusableWhenDisabled` keeps keyboard focus on it. The words already say what is happening, so the Spinner gets `aria-hidden=\"true\"`. An icon-only button needs its own `aria-label` instead.",
      file: `${dir}/in-button.tsx`,
      Component: SpinnerInButton,
    },
  ],
  Notes: SpinnerNotes,
  toc: [
    { id: "props", title: "Props" },
    { id: "accessibility", title: "Accessibility" },
  ],
} satisfies Guide
