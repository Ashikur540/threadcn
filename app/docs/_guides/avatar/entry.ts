import AvatarWithBadge from "./badge"
import AvatarFallbackExample from "./fallback"
import AvatarGroupExample from "./group"
import AvatarWithImage from "./image"
import { AvatarNotes } from "./notes"
import AvatarSizes from "./sizes"
import type { Guide } from "../types"

const dir = "app/docs/_guides/avatar"

export default {
  examples: [
    {
      slug: "image",
      title: "With a photo",
      description:
        "Put an `AvatarImage` and an `AvatarFallback` inside `Avatar`. Over a photo, the ring is a soft white thread. Here the photo is a small SVG drawn in the code; use your real photo URL.",
      file: `${dir}/image.tsx`,
      Component: AvatarWithImage,
    },
    {
      slug: "fallback",
      title: "Initials when there is no photo",
      description:
        "If the photo fails to load, or there is no `AvatarImage` at all, the `AvatarFallback` shows instead: initials on cream canvas, with a brown thread ring.",
      file: `${dir}/fallback.tsx`,
      Component: AvatarFallbackExample,
    },
    {
      slug: "sizes",
      title: "Sizes",
      description: "`sm`, `default` and `lg`. The initials get smaller or bigger with the circle.",
      file: `${dir}/sizes.tsx`,
      Component: AvatarSizes,
    },
    {
      slug: "group",
      title: "A group",
      description:
        "Put avatars in an `AvatarGroup` and they overlap, each cut out from the fabric behind it. `AvatarGroupCount` at the end says how many more people there are.",
      file: `${dir}/group.tsx`,
      Component: AvatarGroupExample,
    },
    {
      slug: "badge",
      title: "With a status dot",
      description:
        "`AvatarBadge` inside the `Avatar` adds a small gold dot, like for \"online\". It is only a color, so it holds a hidden word for screen readers.",
      file: `${dir}/badge.tsx`,
      Component: AvatarWithBadge,
    },
  ],
  Notes: AvatarNotes,
  toc: [
    { id: "props", title: "Props" },
    { id: "settings", title: "Settings", depth: 2 },
    { id: "accessibility", title: "Accessibility" },
  ],
} satisfies Guide
