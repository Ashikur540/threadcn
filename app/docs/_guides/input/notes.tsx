import { C, H2 } from "../../_ui/page-shell"

const link = "font-semibold underline underline-offset-4"

/** The hand-written part of the Input page: props and accessibility. */
export function InputNotes() {
  return (
    <>
      <H2 id="props">Props</H2>
      <p>
        threadcn adds no props. Input is Base UI&apos;s Input, which draws a normal <C>&lt;input&gt;</C>, so{" "}
        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input" target="_blank" rel="noreferrer" className={link}>
          every normal input attribute works
        </a>
        , like <C>type</C>, <C>placeholder</C>, <C>disabled</C> and <C>required</C>. Base UI adds a few more, like <C>onValueChange</C>, see{" "}
        <a href="https://base-ui.com/react/components/input" target="_blank" rel="noreferrer" className={link}>
          Base UI Input
        </a>
        . One small change: <C>className</C> takes a plain string. Base UI also accepts a function there; threadcn does not.
      </p>

      <H2 id="accessibility">Accessibility</H2>
      <ul className="grid list-disc gap-2 pl-5">
        <li>
          <strong>Give it a name.</strong> Put a <C>Label</C> next to it with <C>htmlFor</C> set to the input&apos;s <C>id</C>. Screen readers then
          read the label, and clicking the label puts the cursor in the field. A placeholder is not a label: it disappears when you type.
        </li>
        <li>
          <strong>Keyboard.</strong> It is a real <C>&lt;input&gt;</C>, so Tab moves to it and typing works as usual.
        </li>
        <li>
          <strong>Helper text.</strong> Give the hint an <C>id</C> and point to it with <C>aria-describedby</C> on the input. Screen readers read it
          after the label.
        </li>
        <li>
          <strong>Errors.</strong> Add <C>aria-invalid=&quot;true&quot;</C>. Screen readers say the field is invalid, and the dashed stitch turns into
          a solid red edge. Link the message with <C>aria-describedby</C> so it is read out too. For the message text, use{" "}
          <C>text-(--tx-invalid)</C>, the shared error color: a test checks that it is easy to read on the fabric.
        </li>
        <li>
          <strong>Focus ring.</strong> When you reach the field with the keyboard, the dashed stitch gets darker and a gold ring shows around the
          edge. The ring is a shadow, so a <C>shadow-*</C> class can remove it, but the darker stitch still shows where you are.
        </li>
        <li>
          <strong>Placeholder.</strong> The placeholder is lighter than typed text but still passes the WCAG AA contrast check. A test checks this.
        </li>
        <li>
          <strong>Disabled.</strong> A disabled field fades and shows a not-allowed cursor. The browser skips it when you press Tab and does not send
          its value with the form.
        </li>
        <li>
          <strong>Reduced motion.</strong> If the visitor turns motion off in their system, the stitch and ring change at once, with no fade.
        </li>
        <li>
          <strong>High contrast mode.</strong> In Windows high contrast mode shadows disappear, so focus shows as a thick solid outline in the system
          highlight color, and an error shows as a double line. The two look different, so you can tell them apart.
        </li>
      </ul>
    </>
  )
}
