import ToastBasic from "./basic"
import ToastLongText from "./long-text"
import { ToastNotes } from "./notes"
import ToastTypes from "./types"
import ToastWithAction from "./with-action"
import type { Guide } from "../types"

const dir = "app/docs/_guides/toast"

export default {
  examples: [
    {
      slug: "basic",
      title: "Show a toast",
      description:
        "Call `toast.add()` with a `title` and a `description`. Put `<Toaster />` once near the root of your app, like in your root layout. Then any button can call `toast.add()`. These docs do the same, so every example on this page shares one toast area.",
      file: `${dir}/basic.tsx`,
      Component: ToastBasic,
    },
    {
      slug: "types",
      title: "Types",
      description:
        "Set `type` to `success`, `info`, `warning` or `error` to pick the icon. `error` is also sewn in the error color. `toast.promise()` shows a `loading` toast with a Spinner, then turns it into `success` or `error` when the work is done.",
      file: `${dir}/types.tsx`,
      Component: ToastTypes,
    },
    {
      slug: "with-action",
      title: "With an action button",
      description:
        "Pass `actionProps` to add a button, like Undo. Its `children` is the button text and `onClick` runs when it is pressed. The action does not close the toast by itself, so call `toast.close(id)`.",
      file: `${dir}/with-action.tsx`,
      Component: ToastWithAction,
    },
    {
      slug: "long-text",
      title: "Long text",
      description:
        "Long text wraps and the toast grows taller. Give a long toast more time to read with `timeout`, here 10 seconds.",
      file: `${dir}/long-text.tsx`,
      Component: ToastLongText,
    },
  ],
  Notes: ToastNotes,
  toc: [
    { id: "props", title: "Props" },
    { id: "settings", title: "Settings", depth: 2 },
    { id: "accessibility", title: "Accessibility" },
  ],
} satisfies Guide
