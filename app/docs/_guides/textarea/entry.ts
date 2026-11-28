import TextareaCharacterHint from "./character-hint"
import TextareaHeight from "./height"
import { TextareaNotes } from "./notes"
import TextareaStates from "./states"
import type { Guide } from "../types"

const dir = "app/docs/_guides/textarea"

export default {
  examples: [
    {
      slug: "states",
      title: "States",
      description:
        "Every look a textarea can have, side by side. They match Input, so a form with both looks the same.",
      file: `${dir}/states.tsx`,
      Component: TextareaStates,
    },
    {
      slug: "character-hint",
      title: "With a character count",
      description:
        "`maxLength` stops typing at the limit, and the count below tells people how much room is left. The count is linked with `aria-describedby`.",
      file: `${dir}/character-hint.tsx`,
      Component: TextareaCharacterHint,
    },
    {
      slug: "height",
      title: "Height",
      description:
        "By default the textarea grows as you type, and you can drag its corner to make it taller. For a box that never changes size, add `field-sizing-fixed resize-none` and set `rows`. Longer text then scrolls inside it.",
      file: `${dir}/height.tsx`,
      Component: TextareaHeight,
    },
  ],
  Notes: TextareaNotes,
  toc: [
    { id: "props", title: "Props" },
    { id: "accessibility", title: "Accessibility" },
  ],
} satisfies Guide
