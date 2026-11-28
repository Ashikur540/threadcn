import SeparatorDecorative from "./decorative"
import SeparatorHorizontal from "./horizontal"
import { SeparatorNotes } from "./notes"
import SeparatorVertical from "./vertical"
import type { Guide } from "../types"

const dir = "app/docs/_guides/separator"

export default {
  examples: [
    {
      slug: "horizontal",
      title: "Between blocks",
      description: "A plain `<Separator />` draws a dashed thread line across, as wide as its box. Put it between two blocks of content.",
      file: `${dir}/horizontal.tsx`,
      Component: SeparatorHorizontal,
    },
    {
      slug: "vertical",
      title: "In a row of links",
      description:
        '`orientation="vertical"` draws the line down. It stretches to the height of the row, so the row has `h-5` and `items-center`.',
      file: `${dir}/vertical.tsx`,
      Component: SeparatorVertical,
    },
    {
      slug: "decorative",
      title: "Only for looks",
      description:
        'This short line is an ornament, not the end of a section. `role="none"` tells screen readers to skip it. Leave it out for a real break between sections.',
      file: `${dir}/decorative.tsx`,
      Component: SeparatorDecorative,
    },
  ],
  Notes: SeparatorNotes,
  toc: [
    { id: "props", title: "Props" },
    { id: "accessibility", title: "Accessibility" },
  ],
} satisfies Guide
