import { C, H2 } from "../../_ui/page-shell"
import { BaseUiLink, type PropRow, PropsTable } from "../../_ui/notes-tables"

export const props: PropRow[] = [
  {
    name: "value / defaultValue",
    type: "number | number[]",
    def: "min",
    what: "Changed in threadcn. A number (or nothing) gives one thumb, as in Base UI. An array of two numbers gives two thumbs for a range. shadcn/ui draws two thumbs when you pass nothing.",
  },
  {
    name: "aria-label",
    type: "string",
    def: "none",
    what: 'Changed in threadcn. It is passed on to each thumb, the part a screen reader reads out. With two thumbs they become "Price, minimum" and "Price, maximum".',
  },
  {
    name: "thumbAlignment",
    type: '"center" | "edge" | "edge-client-only"',
    def: '"edge"',
    what: 'threadcn sets "edge", so at the lowest and highest value the thumb stays inside the strap. Base UI uses "center".',
  },
  { name: "className", type: "string", def: "none", what: "Your own Tailwind classes. If they clash with a built-in style, yours win." },
]

/** The hand-written part of the Slider page: props and accessibility. */
export function SliderNotes() {
  return (
    <>
      <H2 id="props">Props</H2>
      <p>
        Only what threadcn adds or changes is listed here.{" "}
        <BaseUiLink name="slider">
          All other props come from Base UI Slider
        </BaseUiLink>
        , like <C>min</C>, <C>max</C>, <C>step</C>, <C>largeStep</C>, <C>onValueChange</C>, <C>orientation</C> and <C>disabled</C>.
      </p>
      <PropsTable rows={props} />
      <p>
        <C>onValueChange</C> gives you a number when there is one thumb, and an array when there are two.
      </p>

      <H2 id="accessibility">Accessibility</H2>
      <ul className="grid list-disc gap-2 pl-5">
        <li>
          <strong>Keyboard.</strong> Tab moves to a thumb (with two thumbs, Tab moves to each in turn). The arrow keys move it by one{" "}
          <C>step</C>. Shift with an arrow key, or Page Up and Page Down, move it by <C>largeStep</C> (10 unless you set it). Home and End move it
          as far down or up as it can go.
        </li>
        <li>
          <strong>Screen readers.</strong> Each thumb holds a real <C>&lt;input type=&quot;range&quot;&gt;</C>, so it is read as a slider with
          its current value. Always pass <C>aria-label</C>: threadcn puts it on each thumb, and with two thumbs it adds &quot;minimum&quot; and
          &quot;maximum&quot;. Pass <C>format</C>, like <C>{'{ style: "currency", currency: "USD" }'}</C>, and the value is read as a price.
        </li>
        <li>
          <strong>Focus ring.</strong> When a thumb has keyboard focus, a gold ring shows around that thumb.
        </li>
        <li>
          <strong>Reduced motion.</strong> If the visitor turns motion off in their system, the thumb does not animate when it squishes as you
          drag it.
        </li>
        <li>
          <strong>High contrast mode.</strong> In Windows high contrast mode the strap gets a border, and the filled part and the thumbs are
          drawn in solid text color.
        </li>
      </ul>
    </>
  )
}
