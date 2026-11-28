import SliderDisabled from "./disabled"
import { SliderNotes } from "./notes"
import SliderRange from "./range"
import SliderSingle from "./single"
import SliderStates from "./states"
import SliderSteps from "./steps"
import type { Guide } from "../types"

const dir = "app/docs/_guides/slider"

export default {
  examples: [
    {
      slug: "single",
      title: "Single value",
      description: "Pass one number and you get one thumb. Use it to pick one amount, like the rise of a pair of jeans.",
      file: `${dir}/single.tsx`,
      Component: SliderSingle,
    },
    {
      slug: "range",
      title: "Range",
      description:
        "Pass an array of two numbers and you get two thumbs, one for the lowest and one for the highest value. Use it for a price filter.",
      file: `${dir}/range.tsx`,
      Component: SliderRange,
    },
    {
      slug: "steps",
      title: "Steps",
      description: "`step` makes the thumb snap to fixed points. Here it moves 10 degrees at a time, from 20 to 60.",
      file: `${dir}/steps.tsx`,
      Component: SliderSteps,
    },
    {
      slug: "disabled",
      title: "Disabled",
      description: "A disabled slider fades to half strength and the thumb can't be moved. Use it when another setting decides the value.",
      file: `${dir}/disabled.tsx`,
      Component: SliderDisabled,
    },
    {
      slug: "states",
      title: "States",
      description: "Every look a slider can have, side by side: default, keyboard focus and disabled.",
      file: `${dir}/states.tsx`,
      Component: SliderStates,
    },
  ],
  Notes: SliderNotes,
  toc: [
    { id: "props", title: "Props" },
    { id: "accessibility", title: "Accessibility" },
  ],
} satisfies Guide
