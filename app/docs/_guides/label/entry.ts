import LabelDisabled from "./disabled"
import { LabelNotes } from "./notes"
import LabelRequired from "./required"
import LabelWithCheckbox from "./with-checkbox"
import LabelWithInput from "./with-input"
import type { Guide } from "../types"

const dir = "app/docs/_guides/label"

export default {
  examples: [
    {
      slug: "with-input",
      title: "Next to an input",
      description: "Set `htmlFor` to the input's `id`. Clicking the label then puts the cursor in the field.",
      file: `${dir}/with-input.tsx`,
      Component: LabelWithInput,
    },
    {
      slug: "required",
      title: "Required field",
      description:
        "The `*` is for sighted people, so it is hidden from screen readers. The `required` attribute on the input tells screen readers instead.",
      file: `${dir}/required.tsx`,
      Component: LabelRequired,
    },
    {
      slug: "with-checkbox",
      title: "Wrapping a checkbox",
      description: "Put the checkbox inside the label. The whole line becomes clickable, and the text becomes the checkbox's name.",
      file: `${dir}/with-checkbox.tsx`,
      Component: LabelWithCheckbox,
    },
    {
      slug: "disabled",
      title: "On a disabled field",
      description: "The label fades by itself when its field is disabled: above an input, wrapped around a checkbox, or after a switch. Wrapped, only the text fades, so the box isn't faded twice.",
      file: `${dir}/disabled.tsx`,
      Component: LabelDisabled,
    },
  ],
  Notes: LabelNotes,
  toc: [
    { id: "props", title: "Props" },
    { id: "accessibility", title: "Accessibility" },
  ],
} satisfies Guide
