import DropdownMenuCheckboxes from "./checkboxes"
import DropdownMenuDestructiveDisabled from "./destructive-disabled"
import DropdownMenuGroups from "./groups"
import DropdownMenuInset from "./inset"
import { DropdownMenuNotes } from "./notes"
import DropdownMenuRadios from "./radios"
import DropdownMenuSubmenu from "./submenu"
import type { Guide } from "../types"

const dir = "app/docs/_guides/dropdown-menu"

export default {
  examples: [
    {
      slug: "groups",
      title: "Groups, labels and shortcuts",
      description:
        "Put items in a `DropdownMenuGroup` with a `DropdownMenuLabel` on top, and a `DropdownMenuSeparator` line between groups. The label must sit inside a group. `DropdownMenuShortcut` only shows the keys; it does not listen for them.",
      file: `${dir}/groups.tsx`,
      Component: DropdownMenuGroups,
    },
    {
      slug: "checkboxes",
      title: "Checkbox items",
      description:
        "`DropdownMenuCheckboxItem` turns on and off, and a thread tick shows when it is on. The menu stays open after a click, so people can change a few at once. Use `checked` and `onCheckedChange` to control it, or `defaultChecked` as here.",
      file: `${dir}/checkboxes.tsx`,
      Component: DropdownMenuCheckboxes,
    },
    {
      slug: "radios",
      title: "Radio items",
      description:
        "For one choice out of a few, put `DropdownMenuRadioItem`s in a `DropdownMenuRadioGroup`. A dot marks the picked one. Here `value` and `onValueChange` keep the button text in step.",
      file: `${dir}/radios.tsx`,
      Component: DropdownMenuRadios,
    },
    {
      slug: "submenu",
      title: "A submenu",
      description:
        "Wrap a `DropdownMenuSubTrigger` and a `DropdownMenuSubContent` in `DropdownMenuSub`. The submenu opens to the right (or wherever it fits) when you hover the trigger item, click it, or press the Right arrow key.",
      file: `${dir}/submenu.tsx`,
      Component: DropdownMenuSubmenu,
    },
    {
      slug: "destructive-disabled",
      title: "Destructive and disabled items",
      description:
        "`variant=\"destructive\"` makes the text rust, and the item turns into a rust patch when highlighted. Use it for actions you cannot undo. `disabled` fades an item and stops it from being picked.",
      file: `${dir}/destructive-disabled.tsx`,
      Component: DropdownMenuDestructiveDisabled,
    },
    {
      slug: "inset",
      title: "Inset items",
      description:
        "Checkbox and radio items leave room on the left for their mark. Add `inset` to a plain item or label to push its text in by the same amount, so a mixed menu lines up.",
      file: `${dir}/inset.tsx`,
      Component: DropdownMenuInset,
    },
  ],
  Notes: DropdownMenuNotes,
  toc: [
    { id: "props", title: "Props" },
    { id: "settings", title: "Settings", depth: 2 },
    { id: "accessibility", title: "Accessibility" },
  ],
} satisfies Guide
