import { AlertNotes } from "./notes"
import AlertTitleOnly from "./title-only"
import AlertVariants from "./variants"
import AlertWithAction from "./with-action"
import AlertWithIcon from "./with-icon"
import type { Guide } from "../types"

const dir = "app/docs/_guides/alert"

export default {
  examples: [
    {
      slug: "variants",
      title: "Variants",
      description: "Two looks. `default` is a cream care label for tips and news. `destructive` is a rust patch for errors and problems.",
      file: `${dir}/variants.tsx`,
      Component: AlertVariants,
    },
    {
      slug: "with-icon",
      title: "With or without an icon",
      description:
        "Put an SVG icon before `AlertTitle`. The alert makes it 18px, gives it its own column, and lines it up with the title. Add `aria-hidden=\"true\"` to the icon, since the words already say it all. Without an icon, the text uses the full width.",
      file: `${dir}/with-icon.tsx`,
      Component: AlertWithIcon,
    },
    {
      slug: "title-only",
      title: "Title only, or title and description",
      description: "`AlertDescription` is optional. A short notice can be just a title. Add a description when the customer needs more detail.",
      file: `${dir}/title-only.tsx`,
      Component: AlertTitleOnly,
    },
    {
      slug: "with-action",
      title: "With an action",
      description: "Wrap a small button or link in `AlertAction` to pin it to the top right corner. The text moves over to make room.",
      file: `${dir}/with-action.tsx`,
      Component: AlertWithAction,
    },
  ],
  Notes: AlertNotes,
  toc: [
    { id: "props", title: "Props" },
    { id: "settings", title: "Settings", depth: 2 },
    { id: "accessibility", title: "Accessibility" },
  ],
} satisfies Guide
