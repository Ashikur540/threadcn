import { C, H2 } from "../../_ui/page-shell"

const link = "font-semibold underline underline-offset-4"

/** The hand-written part of the Label page: props and accessibility. */
export function LabelNotes() {
  return (
    <>
      <H2 id="props">Props</H2>
      <p>
        threadcn adds no props. Label is a plain <C>&lt;label&gt;</C> (not a Base UI part), so{" "}
        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label" className={link}>
          every normal label attribute works
        </a>
        . The one you need most is <C>htmlFor</C>: set it to the <C>id</C> of the field.
      </p>
      <p>
        It has no color of its own. It takes the text color of whatever it sits on, so it is light on the denim and dark on a cream panel. It lays
        out its children in a row with a small gap, so a box and its text, or a word and a * marker, line up on their own.
      </p>
      <p>
        It fades by itself in one case only: when it comes after a disabled field that has the <C>peer</C> class, inside the same parent. When the label sits above
        the field, add <C>opacity-50</C> to it yourself, like the On a disabled field example above.
      </p>

      <H2 id="accessibility">Accessibility</H2>
      <ul className="grid list-disc gap-2 pl-5">
        <li>
          <strong>Linking.</strong> With <C>htmlFor</C> pointing at the field&apos;s <C>id</C>, screen readers read the label when the field gets
          focus, and clicking the label focuses the field. A bigger click area helps on phones.
        </li>
        <li>
          <strong>Wrapping.</strong> For Checkbox and RadioGroupItem, put the box inside the Label. Base UI links them, so clicking the text ticks
          the box and screen readers read the text as its name.
        </li>
        <li>
          <strong>Required fields.</strong> Screen readers may read a * as &quot;star&quot; or skip it, so it does not tell them the field is required. Hide it with{" "}
          <C>aria-hidden=&quot;true&quot;</C> and put <C>required</C> on the field: screen readers then say &quot;required&quot;. Checkbox and
          RadioGroup also take <C>required</C>, and Base UI turns it into <C>aria-required</C> for you. Say what * means somewhere on the form.
        </li>
        <li>
          <strong>No motion.</strong> Label has no animation and no CSS file, so there is nothing to turn off for reduced motion.
        </li>
      </ul>
    </>
  )
}
