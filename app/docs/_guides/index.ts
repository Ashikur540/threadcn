// The hand-written part of each component page lives in its own folder:
// <name>/entry.ts (examples, notes) plus the example files it lists.
// Components without a folder here get the generated page only.
import buttonGuide from "./button/entry"
import inputGuide from "./input/entry"
import textareaGuide from "./textarea/entry"
import labelGuide from "./label/entry"
import checkboxGuide from "./checkbox/entry"
import radioGroupGuide from "./radio-group/entry"
import switchGuide from "./switch/entry"
import selectGuide from "./select/entry"
import sliderGuide from "./slider/entry"
import toggleGuide from "./toggle/entry"
import toggleGroupGuide from "./toggle-group/entry"
import type { Guide } from "./types"

export const guides: Record<string, Guide> = {
  "button": buttonGuide,
  "input": inputGuide,
  "textarea": textareaGuide,
  "label": labelGuide,
  "checkbox": checkboxGuide,
  "radio-group": radioGroupGuide,
  "switch": switchGuide,
  "select": selectGuide,
  "slider": sliderGuide,
  "toggle": toggleGuide,
  "toggle-group": toggleGroupGuide,
}
