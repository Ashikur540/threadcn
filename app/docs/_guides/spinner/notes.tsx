import { C, H2 } from "../../_ui/page-shell"

/** The hand-written part of the Spinner page: props and accessibility. */
export function SpinnerNotes() {
  return (
    <>
      <H2 id="props">Props</H2>
      <p>
        threadcn adds no props. Spinner is a plain <C>&lt;svg&gt;</C> (not a Base UI part), so every normal SVG attribute works on it, like{" "}
        <C>className</C> and <C>aria-label</C>. The dashes in the ring use the same stitch rhythm as every other stitch in threadcn.
      </p>

      <H2 id="accessibility">Accessibility</H2>
      <ul className="grid list-disc gap-2 pl-5">
        <li>
          <strong>Its screen reader label.</strong> The Spinner has <C>role=&quot;status&quot;</C> and <C>aria-label=&quot;Loading&quot;</C>, so
          screen readers call it &quot;Loading&quot;. Pass your own <C>aria-label</C> to say more, like <C>aria-label=&quot;Saving&quot;</C>: it
          replaces the default.
        </li>
        <li>
          <strong>Inside a button with words,</strong> the Spinner&apos;s label becomes part of the button&apos;s name. A button with a Spinner and
          the word &quot;Saving&quot; is read as &quot;Loading Saving&quot;. Add <C>aria-hidden=&quot;true&quot;</C> to the Spinner there, so
          only the words are read. On a button with no words, put an <C>aria-label</C> on the button, like{" "}
          <C>aria-label=&quot;Loading repairs&quot;</C>, and hide the Spinner the same way.
        </li>
        <li>
          <strong>Disabled while loading.</strong> Disable the button so it can&apos;t be pressed twice. With <C>focusableWhenDisabled</C> (a
          Base UI Button prop) keyboard focus stays on the button instead of jumping away.
        </li>
        <li>
          <strong>Reduced motion.</strong> The turning is the Tailwind class <C>motion-safe:animate-spin</C>. If the visitor turns motion off in
          their system, the ring stays still, so pair it with words like &quot;Saving&quot; that say what is happening.
        </li>
      </ul>
    </>
  )
}
