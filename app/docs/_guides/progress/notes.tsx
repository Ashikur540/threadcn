import { C, H2 } from "../../_ui/page-shell"
import { BaseUiLink } from "../../_ui/notes-tables"

/** The hand-written part of the Progress page: props and accessibility. */
export function ProgressNotes() {
  return (
    <>
      <H2 id="props">Props</H2>
      <p>
        threadcn adds no props, and the parts match shadcn/ui. One thing differs from bare Base UI: <C>Progress</C> already draws the track and
        the fill inside it, so you only add <C>ProgressLabel</C> and <C>ProgressValue</C> when you want them.{" "}
        <BaseUiLink name="progress">All props come from Base UI Progress</BaseUiLink>, like <C>value</C>, <C>min</C>, <C>max</C>,{" "}
        <C>format</C> and <C>getAriaValueText</C>. <C>ProgressValue</C> also takes a function as its child, to show your own text instead of a
        percent.
      </p>
      <p>
        <C>value</C> is required. <C>value=&#123;null&#125;</C> means &quot;we don&apos;t know how far yet&quot; (indeterminate). Screen readers
        hear that, but threadcn draws no moving bar for it: the strap just shows empty. For that case, a Spinner is often clearer.
      </p>

      <H2 id="accessibility">Accessibility</H2>
      <ul className="grid list-disc gap-2 pl-5">
        <li>
          <strong>Screen readers</strong> hear a progress bar with its name and its value. Base UI gives it{" "}
          <C>role=&quot;progressbar&quot;</C> with <C>aria-valuenow</C>, <C>aria-valuemin</C>, <C>aria-valuemax</C> and{" "}
          <C>aria-valuetext</C>. Use <C>getAriaValueText</C> when a percent is not the right words, like &quot;Step 3 of 5&quot;.
        </li>
        <li>
          <strong>Give it a name.</strong> <C>ProgressLabel</C> names the bar for you. Without a label, add an <C>aria-label</C>, like{" "}
          <C>aria-label=&quot;Repair progress&quot;</C>.
        </li>
        <li>
          <strong>The number is read once.</strong> <C>ProgressValue</C> is hidden from screen readers, because the bar already says its value.
        </li>
        <li>
          <strong>Changes are not read out on their own.</strong> It is not a live region (a part of the page that screen readers watch for
          changes). A screen reader hears the new value when the person moves to the bar. To tell people the work is done, show a message, like a
          toast.
        </li>
        <li>
          <strong>Reduced motion.</strong> The fill slides to each new value. If the visitor turns motion off in their system, it jumps there at
          once.
        </li>
        <li>
          <strong>High contrast mode.</strong> In Windows high contrast mode the strap gets a 1px border and the fill is drawn in the system
          highlight color, so you can still see how far it is.
        </li>
      </ul>
    </>
  )
}
