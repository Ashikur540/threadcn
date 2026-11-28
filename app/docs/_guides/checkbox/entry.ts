import CheckboxCustom from "./custom"
import CheckboxWithHeading from "./group"
import { CheckboxNotes } from "./notes"
import CheckboxStates from "./states"
import type { Guide } from "../types"

const dir = "app/docs/_guides/checkbox"

export default {
  examples: [
    {
      slug: "states",
      title: "States",
      description:
        "Every look a checkbox can have. Mixed is for a box that stands for a list where only some items are ticked; set it with the `indeterminate` prop.",
      file: `${dir}/states.tsx`,
      Component: CheckboxStates,
    },
    {
      slug: "group",
      title: "A group with a heading",
      description:
        "Wrap related boxes in a `fieldset` and name the group with a `legend`. Screen readers read the heading when you move into the group.",
      file: `${dir}/group.tsx`,
      Component: CheckboxWithHeading,
    },
    {
      slug: "custom",
      title: "Change the look of one checkbox",
      description:
        "You don't need to edit `checkbox.tsx`. Each box reads a few settings (CSS variables). Set them with a Tailwind class and only that box changes. The table below lists them.",
      file: `${dir}/custom.tsx`,
      Component: CheckboxCustom,
    },
  ],
  Notes: CheckboxNotes,
  toc: [
    { id: "props", title: "Props" },
    { id: "settings", title: "Settings", depth: 2 },
    { id: "accessibility", title: "Accessibility" },
  ],
} satisfies Guide
