import CardCustom from "./custom"
import CardFull from "./full"
import { CardNotes } from "./notes"
import CardSizes from "./sizes"
import CardWithImage from "./with-image"
import type { Guide } from "../types"

const dir = "app/docs/_guides/card"

export default {
  examples: [
    {
      slug: "full",
      title: "Every part",
      description:
        "`CardHeader` holds the `CardTitle` and `CardDescription`. `CardAction` puts a small thing, like a badge, in the top right corner. The main text goes in `CardContent`, and the buttons in `CardFooter`.",
      file: `${dir}/full.tsx`,
      Component: CardFull,
    },
    {
      slug: "sizes",
      title: "Sizes",
      description: "`sm` makes a tighter card with less padding, for lists and side panels. Leave `size` out for the default.",
      file: `${dir}/sizes.tsx`,
      Component: CardSizes,
    },
    {
      slug: "with-image",
      title: "With a picture",
      description:
        "There is no image part. Put an `<img>` or `<svg>` straight inside the card, first, and the padding keeps it inside the stitch. Here the picture is an SVG drawn in the code.",
      file: `${dir}/with-image.tsx`,
      Component: CardWithImage,
    },
    {
      slug: "custom",
      title: "Change the look of one card",
      description:
        "You don't need to edit `card.tsx`. Each card reads a few settings (CSS variables). Set them with a Tailwind class and only that card changes. The table below lists them.",
      file: `${dir}/custom.tsx`,
      Component: CardCustom,
    },
  ],
  Notes: CardNotes,
  toc: [
    { id: "props", title: "Props" },
    { id: "settings", title: "Settings", depth: 2 },
    { id: "accessibility", title: "Accessibility" },
  ],
} satisfies Guide
