import DrawerDirections from "./directions"
import { DrawerNotes } from "./notes"
import DrawerSnapPoints from "./snap-points"
import DrawerSwipeHandleExample from "./swipe-handle"
import type { Guide } from "../types"

const dir = "app/docs/_guides/drawer"

export default {
  examples: [
    {
      slug: "directions",
      title: "All four directions",
      description:
        "`swipeDirection` on `Drawer` is the way you swipe to close it: `down` (the default, at the bottom), `up` (at the top), `left` or `right`. Unlike a Sheet, a Drawer follows your finger or mouse, so drag it toward its edge to close it.",
      file: `${dir}/directions.tsx`,
      Component: DrawerDirections,
    },
    {
      slug: "swipe-handle",
      title: "Swipe handle",
      description:
        "`showSwipeHandle` adds a short dashed thread, so people can see the drawer can be dragged. You can grab the drawer anywhere, not only on the handle.",
      file: `${dir}/swipe-handle.tsx`,
      Component: DrawerSwipeHandleExample,
    },
    {
      slug: "snap-points",
      title: "Snap points",
      description:
        "`snapPoints={[0.5, 1]}` makes the drawer rest half open. Pull it up to see everything, or push it down to close. Here `snapPoint` and `onSnapPointChange` keep the height in state, so a button can open it fully too.",
      file: `${dir}/snap-points.tsx`,
      Component: DrawerSnapPoints,
    },
  ],
  Notes: DrawerNotes,
  toc: [
    { id: "drawer-or-sheet", title: "Drawer or Sheet?" },
    { id: "props", title: "Props" },
    { id: "settings", title: "Settings", depth: 2 },
    { id: "accessibility", title: "Accessibility" },
  ],
} satisfies Guide
