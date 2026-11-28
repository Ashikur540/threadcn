import InputDisabled from "./disabled"
import InputHelperText from "./helper-text"
import { InputNotes } from "./notes"
import InputStates from "./states"
import InputTypes from "./types"
import type { Guide } from "../types"

const dir = "app/docs/_guides/input"

export default {
  examples: [
    {
      slug: "states",
      title: "States",
      description:
        "Every look an input can have, side by side. Use `aria-invalid` for errors and `aria-describedby` to link the message or hint to the field.",
      file: `${dir}/states.tsx`,
      Component: InputStates,
    },
    {
      slug: "helper-text",
      title: "With a label and helper text",
      description: "A label on top and a short hint below. Use a hint when people need to know something before they type.",
      file: `${dir}/helper-text.tsx`,
      Component: InputHelperText,
    },
    {
      slug: "types",
      title: "Types",
      description: "Set `type` like on any input. Email, password, number, search and file all get the same cream canvas.",
      file: `${dir}/types.tsx`,
      Component: InputTypes,
    },
    {
      slug: "disabled",
      title: "Disabled",
      description: "A disabled input fades and can't be clicked or reached with Tab. Use it for a value people can see but not change right now.",
      file: `${dir}/disabled.tsx`,
      Component: InputDisabled,
    },
  ],
  Notes: InputNotes,
  toc: [
    { id: "props", title: "Props" },
    { id: "accessibility", title: "Accessibility" },
  ],
} satisfies Guide
