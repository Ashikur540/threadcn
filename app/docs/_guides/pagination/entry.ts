import PaginationBasic from "./basic"
import PaginationWithEllipsis from "./ellipsis"
import PaginationLabels from "./labels"
import { PaginationNotes } from "./notes"
import PaginationSizes from "./sizes"
import type { Guide } from "../types"

const dir = "app/docs/_guides/pagination"

export default {
  examples: [
    {
      slug: "basic",
      title: "Basic",
      description:
        "Previous, a few page numbers and Next. Add `isActive` to the page you are on: it becomes the leather patch. On phones, Previous and Next show only their arrows.",
      file: `${dir}/basic.tsx`,
      Component: PaginationBasic,
    },
    {
      slug: "ellipsis",
      title: "Many pages",
      description: "Show the first page, the current one and the last page, with a `PaginationEllipsis` where pages are left out. The row wraps when it runs out of room, so keep it short on phones: this one skips Previous and Next.",
      file: `${dir}/ellipsis.tsx`,
      Component: PaginationWithEllipsis,
    },
    {
      slug: "sizes",
      title: "Sizes",
      description:
        'Page numbers are `size="icon"` unless you say otherwise, and Previous and Next are `default`. For a smaller row, use `icon-sm` on the numbers and `sm` on Previous and Next.',
      file: `${dir}/sizes.tsx`,
      Component: PaginationSizes,
    },
    {
      slug: "labels",
      title: "Your own words",
      description: "`text` changes the word next to the arrow (on phones only the arrows show). Change the `aria-label` too, so screen readers hear the same words.",
      file: `${dir}/labels.tsx`,
      Component: PaginationLabels,
    },
  ],
  Notes: PaginationNotes,
  toc: [
    { id: "props", title: "Props" },
    { id: "accessibility", title: "Accessibility" },
  ],
} satisfies Guide
