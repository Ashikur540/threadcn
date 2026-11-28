import { C, H2, H3 } from "../../_ui/page-shell"
import { BaseUiLink, type SettingRow, SettingsTable } from "../../_ui/notes-tables"

export const settings: SettingRow[] = [
  ["--_stitch", "Thread color. It changes in both the empty and the ticked box.", "[--_stitch:var(--tx-ring)]"],
  ["--_thread", "How thick the thread is", "[--_thread:2.5px]"],
  ["--_inset", "How far the stitch sits inside the edge (4px by default)", "[--_inset:3px]"],
  ["--_radius", "How round the corners of the box and the stitch are (7px by default)", "[--_radius:3px]"],
]

/** The hand-written part of the Checkbox page: props, settings and accessibility. */
export function CheckboxNotes() {
  return (
    <>
      <H2 id="props">Props</H2>
      <p>
        threadcn adds no props.{" "}
        <BaseUiLink name="checkbox">
          All props come from Base UI Checkbox
        </BaseUiLink>
        , like <C>checked</C>, <C>defaultChecked</C>, <C>onCheckedChange</C>, <C>indeterminate</C>, <C>disabled</C>, <C>required</C> and{" "}
        <C>name</C>. One small change: <C>className</C> takes a plain string. Base UI also accepts a function there; threadcn does not.
      </p>
      <p>
        Base UI draws the box as a <C>&lt;span&gt;</C> with a hidden <C>&lt;input&gt;</C> next to it, so it still sends its value with a form. That
        is why the examples wrap the box and its text in a <C>Label</C>: Base UI links the two for you.
      </p>

      <H3 id="settings">What each setting changes</H3>
      <p>
        The Change the look of one checkbox example above uses these. Set them with a Tailwind class, and only that checkbox changes. To change the
        thread only when the box is ticked, add the <C>data-checked:</C> prefix, like <C>data-checked:[--_stitch:var(--tx-ring)]</C>.
      </p>
      <SettingsTable rows={settings} />

      <H2 id="accessibility">Accessibility</H2>
      <ul className="grid list-disc gap-2 pl-5">
        <li>
          <strong>Keyboard.</strong> Tab moves to the box and Space ticks or unticks it. Enter does not tick it, the same as a native checkbox.
        </li>
        <li>
          <strong>Screen readers.</strong> Base UI gives the box <C>role=&quot;checkbox&quot;</C> and says whether it is ticked. A mixed box is read as
          &quot;mixed&quot; (<C>aria-checked=&quot;mixed&quot;</C>). The text in the wrapping Label becomes its name. The stitch is hidden from screen
          readers.
        </li>
        <li>
          <strong>Errors.</strong> Add <C>aria-invalid=&quot;true&quot;</C>. Screen readers say it is invalid, and a red outline shows around the box.
          Link the message with <C>aria-describedby</C>. The error color passes the WCAG AA contrast check on the fabric; a test checks this.
        </li>
        <li>
          <strong>Required.</strong> Add <C>required</C> and Base UI sets <C>aria-required</C>, so screen readers say the box must be ticked.
        </li>
        <li>
          <strong>Focus ring.</strong> When you reach the box with the keyboard, a gold ring shows around it. It is an outline, not a shadow, so a{" "}
          <C>shadow-*</C> class can&apos;t remove it.
        </li>
        <li>
          <strong>Reduced motion.</strong> If the visitor turns motion off in their system, the tick appears at once instead of popping in, and the
          color change has no fade.
        </li>
        <li>
          <strong>High contrast mode.</strong> In Windows high contrast mode the stitch is hidden and a real 1px border shows instead. The tick is
          drawn in the system text color, so you can still see it.
        </li>
      </ul>
    </>
  )
}
