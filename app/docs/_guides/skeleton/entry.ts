import SkeletonCard from "./card"
import SkeletonList from "./list"
import { SkeletonNotes } from "./notes"
import type { Guide } from "../types"

const dir = "app/docs/_guides/skeleton"

export default {
  examples: [
    {
      slug: "card",
      title: "A card while it loads",
      description:
        "A Skeleton holds the place of content that is still loading, so the layout is ready before the data is. Here a review card waits: a circle for the avatar, then lines for the name and the text. Shape each one with Tailwind classes. The pulse stops when the visitor asks their system for less motion.",
      file: `${dir}/card.tsx`,
      Component: SkeletonCard,
    },
    {
      slug: "list",
      title: "A list",
      description:
        "Repeat one row shape for a list, like these orders: a square for the photo, two lines for the name and size, and a short one for the price.",
      file: `${dir}/list.tsx`,
      Component: SkeletonList,
    },
  ],
  Notes: SkeletonNotes,
  toc: [
    { id: "props", title: "Props" },
    { id: "accessibility", title: "Accessibility" },
  ],
} satisfies Guide
