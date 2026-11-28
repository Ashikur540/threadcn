import TabsDisabled from "./disabled"
import { TabsNotes } from "./notes"
import TabsVariants from "./variants"
import TabsVertical from "./vertical"
import TabsWithIcons from "./with-icons"
import type { Guide } from "../types"

const dir = "app/docs/_guides/tabs"

export default {
  examples: [
    {
      slug: "variants",
      title: "Variants",
      description:
        "Set `variant` on `TabsList`. `default` is sewn-on label tabs, and the open one is stitched onto the panel. `line` is flat tabs with a thread line under the open one. `leather` turns the open tab into a leather strap folded over the panel, with a small snap.",
      file: `${dir}/variants.tsx`,
      Component: TabsVariants,
    },
    {
      slug: "vertical",
      title: "Vertical",
      description:
        '`orientation="vertical"` on `Tabs` puts the tabs in a column next to the panel. The Up and Down arrow keys then move between them.',
      file: `${dir}/vertical.tsx`,
      Component: TabsVertical,
    },
    {
      slug: "disabled",
      title: "A disabled tab",
      description: "Add `disabled` to a `TabsTrigger`. It fades and can not be opened, for example while there are no reviews yet.",
      file: `${dir}/disabled.tsx`,
      Component: TabsDisabled,
    },
    {
      slug: "with-icons",
      title: "With icons",
      description:
        "Put an SVG icon before the text. Give it a size class like `size-4` and `aria-hidden`, since the text already says what the tab is. Keep labels short: when the row runs out of room, the tabs wrap onto a second line.",
      file: `${dir}/with-icons.tsx`,
      Component: TabsWithIcons,
    },
  ],
  Notes: TabsNotes,
  toc: [
    { id: "props", title: "Props" },
    { id: "settings", title: "Settings", depth: 2 },
    { id: "accessibility", title: "Accessibility" },
  ],
} satisfies Guide
