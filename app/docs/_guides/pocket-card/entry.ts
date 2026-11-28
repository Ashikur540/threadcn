import PocketCardGrid from "./grid"
import PocketCardNoTag from "./no-tag"
import { PocketCardNotes } from "./notes"
import PocketCardProduct from "./product"
import type { Guide } from "../types"

const dir = "app/docs/_guides/pocket-card"

export default {
  examples: [
    {
      slug: "product",
      title: "A product",
      description:
        "Every part together. The card draws its own stitching and rivets. `PocketCardTag` hangs off the right edge, `PocketCardAction` holds the price, and `PocketCardFooter` lines up the buttons.",
      file: `${dir}/product.tsx`,
      Component: PocketCardProduct,
    },
    {
      slug: "no-tag",
      title: "Without a tag",
      description:
        "The tag is optional. The header and description keep room on the right for it, so add `pr-0` when you leave it out. Here the card is a repair ticket.",
      file: `${dir}/no-tag.tsx`,
      Component: PocketCardNoTag,
    },
    {
      slug: "grid",
      title: "A row of products",
      description:
        "Put cards in a list with a grid. `h-full` makes cards in the same row the same height. Each title holds an `h3`, so screen reader users can jump between products.",
      file: `${dir}/grid.tsx`,
      Component: PocketCardGrid,
    },
  ],
  Notes: PocketCardNotes,
  toc: [
    { id: "props", title: "Props" },
    { id: "accessibility", title: "Accessibility" },
  ],
} satisfies Guide
