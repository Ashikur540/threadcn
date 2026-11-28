import BreadcrumbBasic from "./basic"
import BreadcrumbCustomSeparator from "./custom-separator"
import BreadcrumbWithEllipsis from "./ellipsis"
import { BreadcrumbNotes } from "./notes"
import type { Guide } from "../types"

const dir = "app/docs/_guides/breadcrumb"

export default {
  examples: [
    {
      slug: "basic",
      title: "Basic",
      description:
        "Links to the earlier pages, a `BreadcrumbSeparator` between each, and the page you are on as `BreadcrumbPage` at the end. It is bold and not a link.",
      file: `${dir}/basic.tsx`,
      Component: BreadcrumbBasic,
    },
    {
      slug: "ellipsis",
      title: "Long paths",
      description: "When the path is long, put `BreadcrumbEllipsis` in an item instead of the middle pages. It shows three dots.",
      file: `${dir}/ellipsis.tsx`,
      Component: BreadcrumbWithEllipsis,
    },
    {
      slug: "custom-separator",
      title: "Custom separator",
      description: "Put your own icon or text inside `BreadcrumbSeparator` to replace the chevron. Here it is a small cross stitch.",
      file: `${dir}/custom-separator.tsx`,
      Component: BreadcrumbCustomSeparator,
    },
  ],
  Notes: BreadcrumbNotes,
  toc: [
    { id: "props", title: "Props" },
    { id: "accessibility", title: "Accessibility" },
  ],
} satisfies Guide
