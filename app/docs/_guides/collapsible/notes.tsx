import { C, H2 } from "../../_ui/page-shell"
import { BaseUiLink } from "../../_ui/notes-tables"

/** The hand-written part of the Collapsible page: props and accessibility. */
export function CollapsibleNotes() {
  return (
    <>
      <H2 id="props">Props</H2>
      <p>
        threadcn adds no props.{" "}
        <BaseUiLink name="collapsible">
          All props come from Base UI Collapsible
        </BaseUiLink>
        . The ones you need most: <C>defaultOpen</C>, <C>open</C>, <C>onOpenChange</C> and <C>disabled</C> on <C>Collapsible</C>, and{" "}
        <C>render</C> on <C>CollapsibleTrigger</C> to turn it into a threadcn <C>Button</C>.
      </p>
      <p>
        <strong>It has no look of its own.</strong> There is no CSS file. The three parts are a <C>&lt;div&gt;</C>, a <C>&lt;button&gt;</C> and a{" "}
        <C>&lt;div&gt;</C>, and they show only the classes you give them. That is on purpose: you decide what the trigger and the hidden part look
        like. It also does not slide open; the hidden part just appears.
      </p>
      <p>
        Base UI gives you hooks to style each state. The trigger gets <C>data-panel-open</C> while it is open (the first example uses it to flip
        the arrow and swap the words). The panel gets <C>data-open</C> or <C>data-closed</C>, and its height as the CSS variable{" "}
        <C>--collapsible-panel-height</C> if you want to animate it.
      </p>

      <H2 id="accessibility">Accessibility</H2>
      <ul className="grid list-disc gap-2 pl-5">
        <li>
          <strong>Keyboard.</strong> The trigger is a real <C>&lt;button&gt;</C>. Tab moves to it, and Enter or Space opens or closes the panel.
        </li>
        <li>
          <strong>Screen readers</strong> hear the trigger as a button that is expanded or collapsed. Base UI sets <C>aria-expanded</C>, and
          while it is open, <C>aria-controls</C> points at the panel.
        </li>
        <li>
          <strong>Clear words.</strong> Name the trigger after what it shows, like &quot;Show care details&quot;. If it is only an icon, give it an{" "}
          <C>aria-label</C>.
        </li>
        <li>
          <strong>Find in page.</strong> A closed panel is taken out of the page, so the browser&apos;s find (Ctrl+F or ⌘ F) can&apos;t see its
          words. Add <C>hiddenUntilFound</C> to <C>CollapsibleContent</C> and the browser can find them and open the panel.
        </li>
        <li>
          <strong>Motion and high contrast mode.</strong> Collapsible adds no animation and no colors, so there is nothing to turn off. If you add
          a slide, wrap it in <C>motion-safe:</C> or add <C>motion-reduce:transition-none</C>.
        </li>
      </ul>
    </>
  )
}
