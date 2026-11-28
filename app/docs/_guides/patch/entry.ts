import PatchAsLink from "./as-link"
import PatchCustom from "./custom"
import { PatchNotes } from "./notes"
import PatchVariants from "./variants"
import PatchWithIcon from "./with-icon"
import type { Guide } from "../types"

const dir = "app/docs/_guides/patch"

export default {
  examples: [
    {
      slug: "variants",
      title: "Variants",
      description:
        '`default` is a stitched leather label, good for a brand name. `variant="round"` is a denim patch, rounded on the left for a `PatchDot` with a short number.',
      file: `${dir}/variants.tsx`,
      Component: PatchVariants,
    },
    {
      slug: "with-icon",
      title: "With a logo or icon",
      description:
        "Put an SVG before the text, or inside `PatchDot` on a round patch. Give it a size class like `size-5`. It is hidden from screen readers here, because the text already says it all.",
      file: `${dir}/with-icon.tsx`,
      Component: PatchWithIcon,
    },
    {
      slug: "as-link",
      title: "As a link",
      description: 'Pass `render={<a href="/" />}` and the patch becomes a real link, with a gold focus ring. Good for a logo that goes home.',
      file: `${dir}/as-link.tsx`,
      Component: PatchAsLink,
    },
    {
      slug: "custom",
      title: "Size and stitch",
      description:
        "There is no `size` prop. Use text and padding classes for a bigger patch, and the settings below to change the stitch. If you round the corners more, set `--_radius` to the same value so the stitch follows.",
      file: `${dir}/custom.tsx`,
      Component: PatchCustom,
    },
  ],
  Notes: PatchNotes,
  toc: [
    { id: "props", title: "Props" },
    { id: "settings", title: "Settings", depth: 2 },
    { id: "accessibility", title: "Accessibility" },
  ],
} satisfies Guide
