import KbdGroupExample from "./group"
import KbdInText from "./in-text"
import { KbdNotes } from "./notes"
import KbdSingle from "./single"
import type { Guide } from "../types"

const dir = "app/docs/_guides/kbd"

export default {
  examples: [
    {
      slug: "single",
      title: "Single keys",
      description:
        "Put the key name inside `Kbd`. For an icon, hide the SVG from screen readers and add the key name in an `sr-only` span.",
      file: `${dir}/single.tsx`,
      Component: KbdSingle,
    },
    {
      slug: "in-text",
      title: "A shortcut in a sentence",
      description: "Keys sit in a line of text like a word. `KbdGroup` keeps the keys of one shortcut, like ⌘ K, together.",
      file: `${dir}/in-text.tsx`,
      Component: KbdInText,
    },
    {
      slug: "group",
      title: "A list of shortcuts",
      description:
        'One `KbdGroup` per shortcut. A "+" between the keys makes it clear they are pressed together.',
      file: `${dir}/group.tsx`,
      Component: KbdGroupExample,
    },
  ],
  Notes: KbdNotes,
  toc: [
    { id: "props", title: "Props" },
    { id: "accessibility", title: "Accessibility" },
  ],
} satisfies Guide
