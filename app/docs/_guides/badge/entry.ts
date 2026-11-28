import BadgeAsLink from "./as-link"
import BadgeCount from "./count"
import { BadgeNotes } from "./notes"
import BadgeVariants from "./variants"
import BadgeWithIcon from "./with-icon"
import type { Guide } from "../types"

const dir = "app/docs/_guides/badge"

export default {
  examples: [
    {
      slug: "variants",
      title: "Variants",
      description:
        "Six looks. `default`, `secondary` and `destructive` are woven labels with a fill. `outline`, `ghost` and `link` have no fill and take the text color of whatever they sit on.",
      file: `${dir}/variants.tsx`,
      Component: BadgeVariants,
    },
    {
      slug: "with-icon",
      title: "With an icon",
      description: "Put an SVG icon before or after the text. The badge makes it 14px unless your icon has its own `size-` class.",
      file: `${dir}/with-icon.tsx`,
      Component: BadgeWithIcon,
    },
    {
      slug: "as-link",
      title: "As a link",
      description:
        "Pass `render={<a href=\"...\" />}` and the badge becomes a real link, with the same look and stitch. It gets a gold focus ring when you reach it with Tab.",
      file: `${dir}/as-link.tsx`,
      Component: BadgeAsLink,
    },
    {
      slug: "count",
      title: "A count",
      description:
        "For a number, add `tabular-nums` so the digits line up, and a `min-w-` class so a single digit still looks round. Hidden words in a `sr-only` span tell screen readers what the number counts.",
      file: `${dir}/count.tsx`,
      Component: BadgeCount,
    },
  ],
  Notes: BadgeNotes,
  toc: [
    { id: "props", title: "Props" },
    { id: "settings", title: "Settings", depth: 2 },
    { id: "accessibility", title: "Accessibility" },
  ],
} satisfies Guide
