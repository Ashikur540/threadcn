import AccordionDefaultOpen from "./default-open"
import AccordionDisabled from "./disabled"
import AccordionMultiple from "./multiple"
import { AccordionNotes } from "./notes"
import AccordionSingle from "./single"
import type { Guide } from "../types"

const dir = "app/docs/_guides/accordion"

export default {
  examples: [
    {
      slug: "single",
      title: "One open at a time",
      description: "This is the default. Opening one answer closes the one that was open. Press an open question again to close it.",
      file: `${dir}/single.tsx`,
      Component: AccordionSingle,
    },
    {
      slug: "multiple",
      title: "Many open at once",
      description: "Add `multiple` to `Accordion` and each answer opens and closes on its own.",
      file: `${dir}/multiple.tsx`,
      Component: AccordionMultiple,
    },
    {
      slug: "default-open",
      title: "Open one at the start",
      description:
        'Pass the values to open in `defaultValue`. It is always an array, so `defaultValue={["shipping"]}` opens the item with `value="shipping"`.',
      file: `${dir}/default-open.tsx`,
      Component: AccordionDefaultOpen,
    },
    {
      slug: "disabled",
      title: "Disabled item",
      description: "Add `disabled` to an `AccordionItem` and it can't be opened. Put `disabled` on `Accordion` to lock every item.",
      file: `${dir}/disabled.tsx`,
      Component: AccordionDisabled,
    },
  ],
  Notes: AccordionNotes,
  toc: [
    { id: "props", title: "Props" },
    { id: "accessibility", title: "Accessibility" },
  ],
} satisfies Guide
