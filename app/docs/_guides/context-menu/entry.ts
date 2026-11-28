import ContextMenuCheckboxesRadios from "./checkboxes-radios"
import ContextMenuDestructive from "./destructive"
import { ContextMenuNotes } from "./notes"
import ContextMenuSubmenu from "./submenu"
import type { Guide } from "../types"

const dir = "app/docs/_guides/context-menu"

export default {
  examples: [
    {
      slug: "checkboxes-radios",
      title: "Checkbox and radio items",
      description:
        "Right-click the area, or press and hold it for half a second on a touch screen. The menu opens where you clicked. Checkbox and radio items work just like in Dropdown Menu, and the menu stays open while you change them.",
      file: `${dir}/checkboxes-radios.tsx`,
      Component: ContextMenuCheckboxesRadios,
    },
    {
      slug: "submenu",
      title: "A submenu",
      description:
        "Wrap a `ContextMenuSubTrigger` and a `ContextMenuSubContent` in `ContextMenuSub`. The submenu opens to the right of its item (or wherever it fits) on hover, click or the Right arrow key.",
      file: `${dir}/submenu.tsx`,
      Component: ContextMenuSubmenu,
    },
    {
      slug: "destructive",
      title: "Destructive and disabled items",
      description:
        "`variant=\"destructive\"` makes an item rust, for actions you cannot undo. `disabled` fades an item and stops it from being picked.",
      file: `${dir}/destructive.tsx`,
      Component: ContextMenuDestructive,
    },
  ],
  Notes: ContextMenuNotes,
  toc: [
    { id: "props", title: "Props" },
    { id: "settings", title: "Settings", depth: 2 },
    { id: "accessibility", title: "Accessibility" },
  ],
} satisfies Guide
