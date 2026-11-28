import SelectDisabledOption from "./disabled-option"
import SelectGroups from "./groups"
import { SelectNotes } from "./notes"
import SelectSizes from "./sizes"
import SelectStates from "./states"
import type { Guide } from "../types"

const dir = "app/docs/_guides/select"

export default {
  examples: [
    {
      slug: "states",
      title: "States",
      description: "Every look the closed field can have, side by side: default, keyboard focus, error and disabled.",
      file: `${dir}/states.tsx`,
      Component: SelectStates,
    },
    {
      slug: "sizes",
      title: "Sizes",
      description: 'Put size="sm" on SelectTrigger for a shorter field in tight rows. Leave it out for the default.',
      file: `${dir}/sizes.tsx`,
      Component: SelectSizes,
    },
    {
      slug: "groups",
      title: "Groups",
      description:
        "Sort a long list into named groups with `SelectGroup` and `SelectLabel`, and put a `SelectSeparator` line between them.",
      file: `${dir}/groups.tsx`,
      Component: SelectGroups,
    },
    {
      slug: "disabled-option",
      title: "A disabled option",
      description: "Add `disabled` to one `SelectItem` to show it but stop people picking it, like a wash that is sold out.",
      file: `${dir}/disabled-option.tsx`,
      Component: SelectDisabledOption,
    },
  ],
  Notes: SelectNotes,
  toc: [
    { id: "props", title: "Props" },
    { id: "accessibility", title: "Accessibility" },
  ],
} satisfies Guide
