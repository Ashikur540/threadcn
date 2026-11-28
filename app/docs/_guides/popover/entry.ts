import PopoverBasic from "./basic"
import PopoverForm from "./form"
import { PopoverNotes } from "./notes"
import PopoverSides from "./sides"
import type { Guide } from "../types"

const dir = "app/docs/_guides/popover"

export default {
  examples: [
    {
      slug: "basic",
      title: "Title and text",
      description:
        "Click the button to open the pocket, click outside or press Escape to close it. `PopoverTitle` and `PopoverDescription` also give the pocket its name for screen readers.",
      file: `${dir}/basic.tsx`,
      Component: PopoverBasic,
    },
    {
      slug: "form",
      title: "A small form inside",
      description:
        "A popover can hold fields. When it opens, focus moves to the first field, so people can type right away. Here the button text follows what you type.",
      file: `${dir}/form.tsx`,
      Component: PopoverForm,
    },
    {
      slug: "sides",
      title: "Sides",
      description:
        "Set `side` on `PopoverContent` to `top`, `right`, `bottom` (the default) or `left`. If there is no room on that side, as on a phone, it moves to a side that fits.",
      file: `${dir}/sides.tsx`,
      Component: PopoverSides,
    },
  ],
  Notes: PopoverNotes,
  toc: [
    { id: "props", title: "Props" },
    { id: "settings", title: "Settings", depth: 2 },
    { id: "accessibility", title: "Accessibility" },
  ],
} satisfies Guide
