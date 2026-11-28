import DialogBasic from "./basic"
import DialogFooterCancel from "./footer-cancel"
import DialogForm from "./form"
import DialogLongContent from "./long-content"
import DialogNoCloseButton from "./no-close-button"
import { DialogNotes } from "./notes"
import type { Guide } from "../types"

const dir = "app/docs/_guides/dialog"

export default {
  examples: [
    {
      slug: "basic",
      title: "Header and footer",
      description:
        "A title and a short description in `DialogHeader`, then your content, then the buttons in `DialogFooter`. Wrap a button in `DialogClose` so pressing it closes the dialog. On phones the footer buttons stack, with the main one on top.",
      file: `${dir}/basic.tsx`,
      Component: DialogBasic,
    },
    {
      slug: "form",
      title: "With a form",
      description:
        "Put a `Label` and an `Input` inside, like on any page. When the dialog opens, focus goes straight to the first field, so the customer can start typing.",
      file: `${dir}/form.tsx`,
      Component: DialogForm,
    },
    {
      slug: "footer-cancel",
      title: "Footer Cancel button",
      description:
        "`showCloseButton` on `DialogFooter` adds a Cancel button for you. It is the dark denim button and it closes the dialog. Your own buttons go after it.",
      file: `${dir}/footer-cancel.tsx`,
      Component: DialogFooterCancel,
    },
    {
      slug: "long-content",
      title: "Long content",
      description:
        "A dialog never grows past the screen. When the content is taller, it scrolls inside the stitch, and the stitch and close X stay where they are.",
      file: `${dir}/long-content.tsx`,
      Component: DialogLongContent,
    },
    {
      slug: "no-close-button",
      title: "Without the close X",
      description:
        "`showCloseButton={false}` on `DialogContent` hides the X in the corner. Keep at least one `DialogClose` button so there is still a clear way out. Escape and a click outside still close it.",
      file: `${dir}/no-close-button.tsx`,
      Component: DialogNoCloseButton,
    },
  ],
  Notes: DialogNotes,
  toc: [
    { id: "props", title: "Props" },
    { id: "settings", title: "Settings", depth: 2 },
    { id: "accessibility", title: "Accessibility" },
  ],
} satisfies Guide
