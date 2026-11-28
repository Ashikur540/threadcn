import { C, H2 } from "../../_ui/page-shell"

const link = "font-semibold underline underline-offset-4"

/** The hand-written part of the Kbd page: props and accessibility. */
export function KbdNotes() {
  return (
    <>
      <H2 id="props">Props</H2>
      <p>
        threadcn adds no props. Kbd is plain HTML, not a Base UI part. <C>Kbd</C> and <C>KbdGroup</C> both render a{" "}
        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/kbd" target="_blank" rel="noreferrer" className={link}>
          <C>&lt;kbd&gt;</C> element
        </a>
        , so all its normal attributes work, like <C>title</C> and <C>className</C>.
      </p>
      <p>
        <C>Kbd</C> is one key cap: cream, with a small edge under it like a button. <C>KbdGroup</C> lines up several keys in a row with a small gap,
        for a shortcut like ⌘ K. An SVG icon inside a key is sized for you. A key can&apos;t be clicked or selected: it is a label, not a button.
      </p>

      <H2 id="accessibility">Accessibility</H2>
      <ul className="grid list-disc gap-2 pl-5">
        <li>
          <strong>Meaning.</strong> <C>&lt;kbd&gt;</C> marks text as a key the visitor types. Screen readers read the text inside it as normal, so
          the key name is what they hear.
        </li>
        <li>
          <strong>Symbols.</strong> Keys like ⌘, ⇧ and ⌥ may not be read the way you expect, or may be skipped. Where it matters, write the name in
          words (Cmd, Shift, Option) or add hidden words with <C>sr-only</C>, as the arrow key in the first example does.
        </li>
        <li>
          <strong>Icons.</strong> An icon on its own says nothing to a screen reader. Hide the SVG with <C>aria-hidden=&quot;true&quot;</C> and put
          the key name in an <C>sr-only</C> span next to it.
        </li>
        <li>
          <strong>Not a control.</strong> A Kbd does not do anything when pressed or clicked. If a shortcut matters, also give people a button or
          link that does the same thing.
        </li>
        <li>
          <strong>No motion.</strong> Kbd has no animation, so there is nothing to turn off for reduced motion.
        </li>
        <li>
          <strong>High contrast mode.</strong> In Windows high contrast mode each key gets a real 1px border, so it still looks like a key.
        </li>
      </ul>
    </>
  )
}
