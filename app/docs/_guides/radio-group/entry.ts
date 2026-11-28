import RadioGroupCustom from "./custom"
import RadioGroupDescriptions from "./descriptions"
import RadioGroupHorizontal from "./horizontal"
import { RadioGroupNotes } from "./notes"
import RadioGroupStates from "./states"
import type { Guide } from "../types"

const dir = "app/docs/_guides/radio-group"

export default {
  examples: [
    {
      slug: "states",
      title: "States",
      description:
        "Every look an option can have. A disabled option fades, can't be picked, and the arrow keys skip it.",
      file: `${dir}/states.tsx`,
      Component: RadioGroupStates,
    },
    {
      slug: "horizontal",
      title: "Horizontal",
      description:
        "Lay short options out in a row with flex classes. It wraps onto a second line on small screens. A visible heading names the group with `aria-labelledby`.",
      file: `${dir}/horizontal.tsx`,
      Component: RadioGroupHorizontal,
    },
    {
      slug: "descriptions",
      title: "With descriptions",
      description:
        "Put a short line of help under each option when the choice needs explaining. Each line is linked to its option with `aria-describedby`.",
      file: `${dir}/descriptions.tsx`,
      Component: RadioGroupDescriptions,
    },
    {
      slug: "custom",
      title: "Change the look of one option",
      description:
        "You don't need to edit `radio-group.tsx`. Each option reads a few settings (CSS variables). Set them with a Tailwind class and only that option changes. The table below lists them.",
      file: `${dir}/custom.tsx`,
      Component: RadioGroupCustom,
    },
  ],
  Notes: RadioGroupNotes,
  toc: [
    { id: "props", title: "Props" },
    { id: "settings", title: "Settings", depth: 2 },
    { id: "accessibility", title: "Accessibility" },
  ],
} satisfies Guide
