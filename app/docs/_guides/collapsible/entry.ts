import CollapsibleControlled from "./controlled"
import { CollapsibleNotes } from "./notes"
import CollapsibleShowMore from "./show-more"
import type { Guide } from "../types"

const dir = "app/docs/_guides/collapsible"

export default {
  examples: [
    {
      slug: "show-more",
      title: "Show more",
      description:
        "The first lines are always there. The rest sits in `CollapsibleContent` and shows when you press the trigger. The trigger is a ghost `Button` (through `render`), and the `data-panel-open` attribute flips the arrow and swaps the words.",
      file: `${dir}/show-more.tsx`,
      Component: CollapsibleShowMore,
    },
    {
      slug: "controlled",
      title: "Control it from your code",
      description:
        "Keep the open state in `useState` and pass `open` and `onOpenChange`. Now other parts of the page can read it, and another button can close it.",
      file: `${dir}/controlled.tsx`,
      Component: CollapsibleControlled,
    },
  ],
  Notes: CollapsibleNotes,
  toc: [
    { id: "props", title: "Props" },
    { id: "accessibility", title: "Accessibility" },
  ],
} satisfies Guide
