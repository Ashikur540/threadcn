import ProgressLive from "./live"
import { ProgressNotes } from "./notes"
import ProgressValueExample from "./value"
import ProgressWithLabel from "./with-label"
import type { Guide } from "../types"

const dir = "app/docs/_guides/progress"

export default {
  examples: [
    {
      slug: "value",
      title: "A value",
      description: "Set `value` from 0 to 100 and the gold patch fills that much of the strap. With no label on screen, give it an `aria-label`.",
      file: `${dir}/value.tsx`,
      Component: ProgressValueExample,
    },
    {
      slug: "with-label",
      title: "With a label and the number",
      description:
        "`ProgressLabel` names the bar and `ProgressValue` shows the number, as a percent by default. Set `max` for steps, and pass a function to `ProgressValue` (and to `getAriaValueText` for screen readers) to show your own words.",
      file: `${dir}/with-label.tsx`,
      Component: ProgressWithLabel,
    },
    {
      slug: "live",
      title: "Filling up",
      description: "Change `value` and the fill slides to the new spot. Here a timer adds 10 every 0.4 seconds until it reaches 100.",
      file: `${dir}/live.tsx`,
      Component: ProgressLive,
    },
  ],
  Notes: ProgressNotes,
  toc: [
    { id: "props", title: "Props" },
    { id: "accessibility", title: "Accessibility" },
  ],
} satisfies Guide
