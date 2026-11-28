import { C, H2, H3 } from "../../_ui/page-shell"
import { BaseUiLink, type SettingRow, SettingsTable } from "../../_ui/notes-tables"

const link = "font-semibold underline underline-offset-4"

export const settings: SettingRow[] = [
  ["--_stitch", "Thread color. It changes in both the empty and the picked option.", "[--_stitch:var(--tx-ring)]"],
  ["--_thread", "How thick the thread is", "[--_thread:2.5px]"],
  ["--_inset", "How far the stitch sits inside the edge (4px by default)", "[--_inset:2px]"],
  [
    "--_radius",
    "How round the stitch is (13px by default). The option itself is always a circle, so a smaller value only makes the stitch squarer. Most of the time, leave it alone.",
    "[--_radius:13px]",
  ],
]

/** The hand-written part of the Radio Group page: props, settings and accessibility. */
export function RadioGroupNotes() {
  return (
    <>
      <H2 id="props">Props</H2>
      <p>
        threadcn adds no props. <C>RadioGroup</C> is Base UI&apos;s RadioGroup and <C>RadioGroupItem</C> is Base UI&apos;s Radio.{" "}
        <BaseUiLink name="radio-group">
          All props come from Base UI Radio Group
        </BaseUiLink>
        , like <C>value</C>, <C>defaultValue</C>, <C>onValueChange</C>, <C>name</C>, <C>required</C> and <C>disabled</C> on the group, and{" "}
        <C>value</C> and <C>disabled</C> on each item. One small change: <C>className</C> takes a plain string on both. Base UI also accepts a
        function there; threadcn does not.
      </p>
      <p>
        The group stacks its items with a small gap. For a row, add <C>className=&quot;flex flex-wrap&quot;</C> and a gap, like the Horizontal
        example above.
      </p>

      <H3 id="settings">What each setting changes</H3>
      <p>
        The Change the look of one option example above uses these. Set them on a <C>RadioGroupItem</C> with a Tailwind class, and only that
        option changes. To change the thread only when the option is picked, add the <C>data-checked:</C> prefix, like{" "}
        <C>data-checked:[--_stitch:var(--tx-ring)]</C>.
      </p>
      <SettingsTable rows={settings} />

      <H2 id="accessibility">Accessibility</H2>
      <ul className="grid list-disc gap-2 pl-5">
        <li>
          <strong>Keyboard.</strong> Tab moves into the group once, onto the picked option (or the first one if none is picked). The arrow keys move
          to the next or previous option and pick it. All four arrows work, in a column or a row, and they wrap around from the last option to the
          first. Space picks the focused option. Enter does nothing. Tab again leaves the group.
        </li>
        <li>
          <strong>Screen readers.</strong> Base UI gives the group <C>role=&quot;radiogroup&quot;</C> and each item <C>role=&quot;radio&quot;</C>,
          and says which one is picked. Name the group with <C>aria-label</C>, or with <C>aria-labelledby</C> pointing at a visible heading. The
          text in each wrapping Label becomes that option&apos;s name. The stitch is hidden from screen readers.
        </li>
        <li>
          <strong>Descriptions.</strong> Put extra text outside the Label and link it with <C>aria-describedby</C> on the item. Then the name stays
          short and the description is read after it.
        </li>
        <li>
          <strong>Errors.</strong> Put <C>aria-invalid=&quot;true&quot;</C> and <C>aria-describedby</C> (pointing at the message) on the group, and{" "}
          <C>aria-invalid=&quot;true&quot;</C> on each item too: that is what draws the red outline around each option. The error color passes the
          WCAG AA contrast check on the fabric; a test checks this.
        </li>
        <li>
          <strong>Focus ring.</strong> When you reach an option with the keyboard, a gold ring shows around it. It is an outline, not a shadow, so a{" "}
          <C>shadow-*</C> class can&apos;t remove it.
        </li>
        <li>
          <strong>Reduced motion.</strong> If the visitor turns motion off in their system, the dot appears at once instead of growing in, and the
          color change has no fade.
        </li>
        <li>
          <strong>High contrast mode.</strong> In Windows high contrast mode the stitch is hidden and a real 1px border shows instead. The dot is
          drawn in the system text color, so you can still see which option is picked.
        </li>
      </ul>
    </>
  )
}
