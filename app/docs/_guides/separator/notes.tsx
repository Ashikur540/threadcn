import { C, H2 } from "../../_ui/page-shell"
import { BaseUiLink } from "../../_ui/notes-tables"

/** The hand-written part of the Separator page: props and accessibility. */
export function SeparatorNotes() {
  return (
    <>
      <H2 id="props">Props</H2>
      <p>
        threadcn adds no props.{" "}
        <BaseUiLink name="separator">
          All props come from Base UI Separator
        </BaseUiLink>
        . The one you need most is <C>orientation</C>: <C>&quot;horizontal&quot;</C> (the default) draws a line across, <C>&quot;vertical&quot;</C>{" "}
        draws a line down. A horizontal line fills the width. A vertical line stretches to the height of the row it sits in, so give the row a
        height (like <C>h-5</C>) or let its content set one.
      </p>
      <p>
        The line is a dashed border in the thread color, as thick as the theme thread. It has no settings of its own. To change it, use normal
        border classes, like <C>border-white</C>.
      </p>
      <p>
        <strong>Meaning or decoration.</strong> Base UI 1.9 has no <C>decorative</C> prop (the older Radix version of shadcn/ui had one). Every
        Separator gets <C>role=&quot;separator&quot;</C>, so screen readers hear that one part ends and the next begins. That is right between real
        sections. If the line is only an ornament, pass <C>role=&quot;none&quot;</C> and screen readers skip it, as in the last example.
      </p>

      <H2 id="accessibility">Accessibility</H2>
      <ul className="grid list-disc gap-2 pl-5">
        <li>
          <strong>Screen readers</strong> hear a separator. Base UI also sets <C>aria-orientation</C> from the <C>orientation</C> prop, so they
          know which way it runs.
        </li>
        <li>
          <strong>Keyboard.</strong> A separator is not a control, so Tab skips it.
        </li>
        <li>
          <strong>No motion.</strong> Separator has no animation, so there is nothing to turn off for reduced motion.
        </li>
        <li>
          <strong>High contrast mode.</strong> The line is a real border, not a picture, so it still shows in Windows high contrast mode.
        </li>
      </ul>
    </>
  )
}
