import SheetFilters from "./filters"
import SheetLongContent from "./long-content"
import SheetNoCloseButton from "./no-close-button"
import { SheetNotes } from "./notes"
import SheetSides from "./sides"
import type { Guide } from "../types"

const dir = "app/docs/_guides/sheet"

export default {
  examples: [
    {
      slug: "sides",
      title: "All four sides",
      description:
        "`side` on `SheetContent` picks the edge: `top`, `right`, `bottom` or `left`. Leave it out for `right`. Open each one to see it slide in.",
      file: `${dir}/sides.tsx`,
      Component: SheetSides,
    },
    {
      slug: "filters",
      title: "Filters with a form",
      description:
        "Fields go straight into `SheetContent`. `SheetFooter` pushes its buttons to the bottom of the sheet. Wrap a button in `SheetClose` so pressing it closes the sheet.",
      file: `${dir}/filters.tsx`,
      Component: SheetFilters,
    },
    {
      slug: "long-content",
      title: "Long content",
      description:
        "When the content is taller than the screen, it scrolls inside the sheet. The stitch and the close X stay put, and the text fades out just before it reaches the thread.",
      file: `${dir}/long-content.tsx`,
      Component: SheetLongContent,
    },
    {
      slug: "no-close-button",
      title: "Without the close X",
      description:
        "`showCloseButton={false}` hides the X in the corner. Keep a `SheetClose` button inside so there is still a clear way out. Escape and a click outside still close it.",
      file: `${dir}/no-close-button.tsx`,
      Component: SheetNoCloseButton,
    },
  ],
  Notes: SheetNotes,
  toc: [
    { id: "props", title: "Props" },
    { id: "settings", title: "Settings", depth: 2 },
    { id: "accessibility", title: "Accessibility" },
  ],
} satisfies Guide
