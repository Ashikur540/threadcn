import TooltipDisabled from "./disabled"
import TooltipIconButton from "./icon-button"
import { TooltipNotes } from "./notes"
import TooltipWithProvider from "./provider"
import TooltipSides from "./sides"
import type { Guide } from "../types"

const dir = "app/docs/_guides/tooltip"

export default {
  examples: [
    {
      slug: "icon-button",
      title: "On an icon button",
      description:
        "The most common use: a button with only an icon. Hover it or Tab to it to see the tag. Give the button an `aria-label` with the same words, because screen readers do not read the tag.",
      file: `${dir}/icon-button.tsx`,
      Component: TooltipIconButton,
    },
    {
      slug: "sides",
      title: "Sides",
      description:
        "Set `side` on `TooltipContent` to `top` (the default), `right`, `bottom` or `left`. The pointer follows. If there is no room on that side, it moves to a side that fits.",
      file: `${dir}/sides.tsx`,
      Component: TooltipSides,
    },
    {
      slug: "provider",
      title: "A row of tooltips",
      description:
        "Wrap a group in `TooltipProvider`. Here `delay={500}` makes the first tag wait half a second. Once one is open, moving to the next button opens its tag at once, with no wait.",
      file: `${dir}/provider.tsx`,
      Component: TooltipWithProvider,
    },
    {
      slug: "disabled",
      title: "On a disabled button",
      description:
        "A normal disabled button cannot get focus, so keyboard users would never see the tag. Add `focusableWhenDisabled` to the Button: it still looks and acts disabled, but hover and Tab reach it, so the tag can say why.",
      file: `${dir}/disabled.tsx`,
      Component: TooltipDisabled,
    },
  ],
  Notes: TooltipNotes,
  toc: [
    { id: "props", title: "Props" },
    { id: "settings", title: "Settings", depth: 2 },
    { id: "accessibility", title: "Accessibility" },
  ],
} satisfies Guide
