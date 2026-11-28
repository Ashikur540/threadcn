import { C, H2 } from "../../_ui/page-shell"
import { BaseUiLink, type PropRow, PropsTable } from "../../_ui/notes-tables"

export const props: PropRow[] = [
  {
    part: "AccordionContent",
    name: "className",
    type: "string",
    def: "none",
    what: "Changed in threadcn: it goes on the inner box that holds the answer (the one with the bottom padding), not on the panel that slides. So padding and text classes work without breaking the slide.",
  },
  { part: "other parts", name: "className", type: "string", def: "none", what: "Your own Tailwind classes. If they clash with a built-in style, yours win." },
]

/** The hand-written part of the Accordion page: props and accessibility. */
export function AccordionNotes() {
  return (
    <>
      <H2 id="props">Props</H2>
      <p>
        threadcn adds no new props.{" "}
        <BaseUiLink name="accordion">
          All props come from Base UI Accordion
        </BaseUiLink>
        . The ones you need most: on <C>Accordion</C>, <C>multiple</C> (let more than one answer be open), <C>defaultValue</C>, <C>value</C>,{" "}
        <C>onValueChange</C> and <C>disabled</C>. On <C>AccordionItem</C>, <C>value</C> and <C>disabled</C>.
      </p>
      <p>
        The value is always an array of item values, even when only one can be open. For example <C>defaultValue=&#123;[&quot;fit&quot;]&#125;</C>{" "}
        opens the item with <C>value=&quot;fit&quot;</C>. Give each item its own <C>value</C> when you want to open it from code.
      </p>
      <PropsTable rows={props} />
      <p>
        Base UI also has <C>hiddenUntilFound</C> on <C>Accordion</C>. With it, the browser&apos;s own find in page (Ctrl+F or ⌘ F) can find words in
        a closed answer and opens it for you. That is handy for a long FAQ.
      </p>

      <H2 id="accessibility">Accessibility</H2>
      <ul className="grid list-disc gap-2 pl-5">
        <li>
          <strong>Keyboard.</strong> Each question is a real <C>&lt;button&gt;</C>. Tab moves from one question to the next, and Enter or Space
          opens or closes it. Base UI 1.9 no longer moves between questions with the arrow keys; it follows the updated ARIA guidance.
        </li>
        <li>
          <strong>Screen readers</strong> hear each question as a button that is expanded or collapsed (<C>aria-expanded</C>). Each question sits
          in an <C>&lt;h3&gt;</C> heading, so people can jump from question to question. An open answer is a region named by its question.
        </li>
        <li>
          <strong>Heading level.</strong> The heading is always an <C>&lt;h3&gt;</C>. <C>AccordionTrigger</C> does not let you change it, so place
          the accordion under an <C>&lt;h2&gt;</C> to keep your page outline in order.
        </li>
        <li>
          <strong>Disabled items</strong> can&apos;t be opened, and Tab skips them.
        </li>
        <li>
          <strong>Focus ring.</strong> When you reach a question with the keyboard, a gold ring shows around it. It is an outline, not a shadow,
          so a shadow class does not remove it.
        </li>
        <li>
          <strong>Reduced motion.</strong> If the visitor turns motion off in their system, the answer opens at once without sliding, and the
          arrow flips without turning.
        </li>
      </ul>
    </>
  )
}
