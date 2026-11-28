import AlertDialogDestructive from "./destructive"
import { AlertDialogNotes } from "./notes"
import AlertDialogSmall from "./small"
import type { Guide } from "../types"

const dir = "app/docs/_guides/alert-dialog"

export default {
  examples: [
    {
      slug: "destructive",
      title: "Confirm before you cancel",
      description:
        "Use it before a step you can't undo. A click outside does not close it, so the customer has to choose. `AlertDialogCancel` closes it. `AlertDialogAction` does not close by itself, so the example sets `open` to false after the work is done.",
      file: `${dir}/destructive.tsx`,
      Component: AlertDialogDestructive,
    },
    {
      slug: "small",
      title: "Small",
      description:
        '`size="sm"` makes a narrow box for a short question. The two footer buttons sit side by side and share the width equally, also on phones.',
      file: `${dir}/small.tsx`,
      Component: AlertDialogSmall,
    },
  ],
  Notes: AlertDialogNotes,
  toc: [
    { id: "when-to-use", title: "Alert Dialog or Dialog?" },
    { id: "props", title: "Props" },
    { id: "settings", title: "Settings", depth: 2 },
    { id: "accessibility", title: "Accessibility" },
  ],
} satisfies Guide
