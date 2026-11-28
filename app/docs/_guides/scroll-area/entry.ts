import ScrollAreaBoth from "./both"
import ScrollAreaHorizontal from "./horizontal"
import { ScrollAreaNotes } from "./notes"
import ScrollAreaVertical from "./vertical"
import type { Guide } from "../types"

const dir = "app/docs/_guides/scroll-area"

export default {
  examples: [
    {
      slug: "vertical",
      title: "Up and down",
      description:
        "Give the `ScrollArea` a height, like `h-48`, and a long list scrolls inside it. `pr-3` keeps the text clear of the bar on the right.",
      file: `${dir}/vertical.tsx`,
      Component: ScrollAreaVertical,
    },
    {
      slug: "horizontal",
      title: "Sideways",
      description:
        'Add `<ScrollBar orientation="horizontal" />` after your content, and make the row wider than the box with `w-max`. `pb-4` leaves room for the bar under the row.',
      file: `${dir}/horizontal.tsx`,
      Component: ScrollAreaHorizontal,
    },
    {
      slug: "both",
      title: "Both ways",
      description:
        "A grid that is taller and wider than its box. The vertical bar comes with `ScrollArea`; the horizontal one is added. Where the two bars meet, Base UI leaves a corner so they don't overlap.",
      file: `${dir}/both.tsx`,
      Component: ScrollAreaBoth,
    },
  ],
  Notes: ScrollAreaNotes,
  toc: [
    { id: "props", title: "Props" },
    { id: "accessibility", title: "Accessibility" },
  ],
} satisfies Guide
