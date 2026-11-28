import HoverCardDelays from "./delays"
import { HoverCardNotes } from "./notes"
import HoverCardProfile from "./profile"
import type { Guide } from "../types"

const dir = "app/docs/_guides/hover-card"

export default {
  examples: [
    {
      slug: "profile",
      title: "A link preview",
      description:
        "Rest the mouse on the link, or Tab to it, and a small profile card opens below. `HoverCardTrigger` draws a real link, so give it an `href`. Clicking it goes there as normal.",
      file: `${dir}/profile.tsx`,
      Component: HoverCardProfile,
    },
    {
      slug: "delays",
      title: "Open and close wait",
      description:
        "Set `delay` and `closeDelay` on `HoverCardTrigger`, in milliseconds. By default the card waits 600ms before it opens, so it does not pop up while the mouse just passes by, and 300ms before it closes, so you can move into it.",
      file: `${dir}/delays.tsx`,
      Component: HoverCardDelays,
    },
  ],
  Notes: HoverCardNotes,
  toc: [
    { id: "props", title: "Props" },
    { id: "settings", title: "Settings", depth: 2 },
    { id: "accessibility", title: "Accessibility" },
  ],
} satisfies Guide
