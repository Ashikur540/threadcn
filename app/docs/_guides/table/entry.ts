import TableBasic from "./basic"
import { TableNotes } from "./notes"
import TableSelected from "./selected"
import TableWide from "./wide"
import type { Guide } from "../types"

const dir = "app/docs/_guides/table"

export default {
  examples: [
    {
      slug: "basic",
      title: "An order with a total",
      description:
        "Every part: a `TableCaption`, the column names in `TableHeader`, the rows in `TableBody`, and the total in `TableFooter`, which sits on a solid thread line. Numbers line up on the right with `text-right` and `tabular-nums`.",
      file: `${dir}/basic.tsx`,
      Component: TableBasic,
    },
    {
      slug: "wide",
      title: "Scrolls sideways on phones",
      description:
        "A table with many columns does not squeeze. It scrolls sideways inside its own box, and the page stays still. Here it is in a box 28rem wide, so it scrolls on every screen. The order number in each row is a row header.",
      file: `${dir}/wide.tsx`,
      Component: TableWide,
    },
    {
      slug: "selected",
      title: "A selected row",
      description:
        'Add `data-state="selected"` to a `TableRow` to tint it. The tint is only a look, so the row also says "your size" to screen readers.',
      file: `${dir}/selected.tsx`,
      Component: TableSelected,
    },
  ],
  Notes: TableNotes,
  toc: [
    { id: "props", title: "Props" },
    { id: "accessibility", title: "Accessibility" },
  ],
} satisfies Guide
