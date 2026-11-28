import { ToggleNotes } from "./notes"
import ToggleSizes from "./sizes"
import ToggleStates from "./states"
import ToggleVariants from "./variants"
import ToggleWithIcon from "./with-icon"
import type { Guide } from "../types"

const dir = "app/docs/_guides/toggle"

export default {
  examples: [
    {
      slug: "states",
      title: "States",
      description: "Every look a toggle can have, side by side: off, on, keyboard focus and disabled. When it is on, a leather patch is sewn on.",
      file: `${dir}/states.tsx`,
      Component: ToggleStates,
    },
    {
      slug: "variants",
      title: "Variants",
      description:
        "`default` is plain fabric until you turn it on. `outline` keeps a thread line around it, so people can see it is a button even when off. The last one is on.",
      file: `${dir}/variants.tsx`,
      Component: ToggleVariants,
    },
    {
      slug: "sizes",
      title: "Sizes",
      description: "`sm`, `default` and `lg` change the height, padding and text size.",
      file: `${dir}/sizes.tsx`,
      Component: ToggleSizes,
    },
    {
      slug: "with-icon",
      title: "With an icon",
      description: "Put any SVG icon inside and the toggle sizes it. A toggle with only an icon needs an `aria-label` so screen readers can name it.",
      file: `${dir}/with-icon.tsx`,
      Component: ToggleWithIcon,
    },
  ],
  Notes: ToggleNotes,
  toc: [
    { id: "props", title: "Props" },
    { id: "settings", title: "Settings", depth: 2 },
    { id: "accessibility", title: "Accessibility" },
  ],
} satisfies Guide
