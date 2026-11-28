import SwitchDisabled from "./disabled"
import { SwitchNotes } from "./notes"
import SwitchSizes from "./sizes"
import SwitchStates from "./states"
import SwitchWithDescription from "./with-description"
import type { Guide } from "../types"

const dir = "app/docs/_guides/switch"

export default {
  examples: [
    {
      slug: "states",
      title: "States",
      description: "Every look a switch can have, side by side: off, on, keyboard focus, error and disabled.",
      file: `${dir}/states.tsx`,
      Component: SwitchStates,
    },
    {
      slug: "sizes",
      title: "Sizes",
      description: 'sm makes a smaller strap and thumb for tight rows. Leave size out for the default.',
      file: `${dir}/sizes.tsx`,
      Component: SwitchSizes,
    },
    {
      slug: "with-description",
      title: "With a label and description",
      description:
        "A label says what the switch does and a line under it explains more. Clicking the label flips the switch, and `aria-describedby` lets screen readers hear the extra line too.",
      file: `${dir}/with-description.tsx`,
      Component: SwitchWithDescription,
    },
    {
      slug: "disabled",
      title: "Disabled",
      description: "A disabled switch fades to half strength and can't be changed. Use it when an option is not available right now.",
      file: `${dir}/disabled.tsx`,
      Component: SwitchDisabled,
    },
  ],
  Notes: SwitchNotes,
  toc: [
    { id: "props", title: "Props" },
    { id: "settings", title: "Settings", depth: 2 },
    { id: "accessibility", title: "Accessibility" },
  ],
} satisfies Guide
