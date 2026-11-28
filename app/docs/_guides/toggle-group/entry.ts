import ToggleGroupJoined from "./joined"
import ToggleGroupMultiple from "./multiple"
import { ToggleGroupNotes } from "./notes"
import ToggleGroupSingle from "./single"
import ToggleGroupVariantsSizes from "./variants-sizes"
import ToggleGroupVertical from "./vertical"
import type { Guide } from "../types"

const dir = "app/docs/_guides/toggle-group"

export default {
  examples: [
    {
      slug: "single",
      title: "Pick one",
      description: "By default only one item can be on. Turning one on turns the others off, like picking a fit.",
      file: `${dir}/single.tsx`,
      Component: ToggleGroupSingle,
    },
    {
      slug: "multiple",
      title: "Pick many",
      description: "Add `multiple` and any number of items can be on at once, like a set of wash settings.",
      file: `${dir}/multiple.tsx`,
      Component: ToggleGroupMultiple,
    },
    {
      slug: "joined",
      title: "Joined",
      description: "`spacing={0}` joins the items into one strip. With `variant=\"outline\"` one stitch runs around the whole strip, a dashed thread sits between items, and the picked item fills its own segment. Good for a long row of sizes.",
      file: `${dir}/joined.tsx`,
      Component: ToggleGroupJoined,
    },
    {
      slug: "vertical",
      title: "Vertical",
      description: 'orientation="vertical" stacks the items in a column. The Up and Down arrow keys then move between them.',
      file: `${dir}/vertical.tsx`,
      Component: ToggleGroupVertical,
    },
    {
      slug: "variants-sizes",
      title: "Variants and sizes",
      description: "Set `variant` and `size` once on the group and every item follows. Here: small default on top, large outline below.",
      file: `${dir}/variants-sizes.tsx`,
      Component: ToggleGroupVariantsSizes,
    },
  ],
  Notes: ToggleGroupNotes,
  toc: [
    { id: "props", title: "Props" },
    { id: "accessibility", title: "Accessibility" },
  ],
} satisfies Guide
