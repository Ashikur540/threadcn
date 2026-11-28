import { C, H2 } from "../../_ui/page-shell"
import { BaseUiLink, type PropRow, PropsTable } from "../../_ui/notes-tables"

export const props: PropRow[] = [
  {
    part: "ScrollBar",
    name: "orientation",
    type: '"vertical" | "horizontal"',
    def: '"vertical"',
    what: "Which way the bar runs. ScrollArea already has a vertical bar, so you only add a ScrollBar for horizontal scrolling.",
  },
  { part: "ScrollArea", name: "className", type: "string", def: "none", what: "Goes on the outer box. Set its size here, like h-48 or w-full max-w-md." },
]

/** The hand-written part of the Scroll Area page: props and accessibility. */
export function ScrollAreaNotes() {
  return (
    <>
      <H2 id="props">Props</H2>
      <p>
        threadcn adds no new props.{" "}
        <BaseUiLink name="scroll-area">
          All other props come from Base UI Scroll Area
        </BaseUiLink>
        . threadcn has two parts, <C>ScrollArea</C> (the box) and <C>ScrollBar</C> (an extra bar), and the table shows the props you use most on
        them.
      </p>
      <PropsTable rows={props} />
      <p>
        <C>ScrollArea</C> builds the Base UI parts for you: the box, the scrolling inside (the viewport), one vertical bar and the corner. Your
        content goes in the viewport. A bar only shows when there is something to scroll that way. To scroll sideways, put{" "}
        <C>&lt;ScrollBar orientation=&quot;horizontal&quot; /&gt;</C> inside, after your content, and give the content a width wider than the box
        (like <C>w-max</C>).
      </p>
      <p>
        <strong>Give it a size.</strong> The box only scrolls when it is smaller than what is inside. Set a height for up and down (<C>h-48</C>) or
        a width for sideways (<C>max-w-md</C>). The bar floats over the edge of the content, so leave a little room for it, like <C>pr-3</C> on the{" "}
        <C>ScrollArea</C> or <C>pb-4</C> on your content.
      </p>
      <p>
        The bar is a thin line in the thread color. It gets brighter while you hover the bar or scroll.
      </p>

      <H2 id="accessibility">Accessibility</H2>
      <ul className="grid list-disc gap-2 pl-5">
        <li>
          <strong>Real scrolling.</strong> The browser still does the scrolling, so the mouse wheel, a trackpad, touch and the keyboard all work as
          usual. Only the bar you see is drawn by Base UI.
        </li>
        <li>
          <strong>Keyboard.</strong> When there is something to scroll, Tab can move to the scrolling box itself. Then the arrow keys, Page Up, Page
          Down, Home and End scroll it. When there is nothing to scroll, Tab skips it.
        </li>
        <li>
          <strong>Focus ring.</strong> When the box has keyboard focus, a gold ring shows just inside its edge.
        </li>
        <li>
          <strong>Screen readers</strong> skip the bars (Base UI hides them with <C>aria-hidden</C>) and read the content as normal.
        </li>
        <li>
          <strong>Reduced motion.</strong> If the visitor turns motion off in their system, the bar changes color at once, without a fade.
        </li>
        <li>
          <strong>High contrast mode.</strong> In Windows high contrast mode the bar is drawn in the solid text color, so you can still see it.
        </li>
      </ul>
    </>
  )
}
