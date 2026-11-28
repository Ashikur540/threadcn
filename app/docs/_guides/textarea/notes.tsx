import { C, H2 } from "../../_ui/page-shell"

const link = "font-semibold underline underline-offset-4"

/** The hand-written part of the Textarea page: props and accessibility. */
export function TextareaNotes() {
  return (
    <>
      <H2 id="props">Props</H2>
      <p>
        threadcn adds no props. Textarea is a plain <C>&lt;textarea&gt;</C> (not a Base UI part), so{" "}
        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea" target="_blank" rel="noreferrer" className={link}>
          every normal textarea attribute works
        </a>
        , like <C>rows</C>, <C>maxLength</C>, <C>disabled</C> and <C>required</C>.
      </p>
      <p>
        Two things differ from a bare textarea. It grows with its text (the CSS <C>field-sizing: content</C> rule), starting at 92px tall
        (about three lines). And people can drag its corner to make it taller (<C>resize-y</C>). For a fixed height, add{" "}
        <C>className=&quot;field-sizing-fixed resize-none&quot;</C> and set <C>rows</C>, like the Height example above.
      </p>

      <H2 id="accessibility">Accessibility</H2>
      <ul className="grid list-disc gap-2 pl-5">
        <li>
          <strong>Give it a name.</strong> Put a <C>Label</C> next to it with <C>htmlFor</C> set to the textarea&apos;s <C>id</C>. A placeholder is
          not a label: it disappears when you type.
        </li>
        <li>
          <strong>Keyboard.</strong> It is a real <C>&lt;textarea&gt;</C>. Tab moves to it, Enter starts a new line, and Tab moves on to the next
          field.
        </li>
        <li>
          <strong>Hints and counters.</strong> Give the hint an <C>id</C> and point to it with <C>aria-describedby</C>, so screen readers read it
          after the label.
        </li>
        <li>
          <strong>Errors.</strong> Add <C>aria-invalid=&quot;true&quot;</C>. Screen readers say the field is invalid, and the dashed stitch turns into
          a solid red edge. Link the message with <C>aria-describedby</C>. For the message text, use <C>text-(--tx-invalid)</C>, the shared error
          color: a test checks that it is easy to read on the fabric.
        </li>
        <li>
          <strong>Focus ring.</strong> Textarea shares its look with Input. With the keyboard, the dashed stitch gets darker and a gold ring shows
          around the edge.
        </li>
        <li>
          <strong>Reduced motion.</strong> If the visitor turns motion off in their system, the stitch and ring change at once, with no fade.
        </li>
        <li>
          <strong>High contrast mode.</strong> In Windows high contrast mode focus shows as a thick solid outline in the system highlight color, and
          an error shows as a double line.
        </li>
      </ul>
    </>
  )
}
