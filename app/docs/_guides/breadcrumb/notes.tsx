import { C, H2 } from "../../_ui/page-shell"
import { type PropRow, PropsTable } from "../../_ui/notes-tables"

export const props: PropRow[] = [
  {
    part: "BreadcrumbLink",
    name: "render",
    type: "ReactElement | function",
    def: "none",
    what: (
      <>
        Draws the link as another element, like your router&apos;s link: <C>render=&#123;&lt;Link href=&quot;/shop&quot; /&gt;&#125;</C>. The
        classes and props are merged onto it.
      </>
    ),
  },
  {
    part: "BreadcrumbSeparator",
    name: "children",
    type: "ReactNode",
    def: "a chevron",
    what: "Anything you put inside replaces the chevron. An SVG gets the same small size.",
  },
]

/** The hand-written part of the Breadcrumb page: props and accessibility. */
export function BreadcrumbNotes() {
  return (
    <>
      <H2 id="props">Props</H2>
      <p>
        The parts are plain HTML elements, the same as shadcn/ui: <C>Breadcrumb</C> is a <C>&lt;nav&gt;</C>, <C>BreadcrumbList</C> an{" "}
        <C>&lt;ol&gt;</C>, <C>BreadcrumbItem</C> and <C>BreadcrumbSeparator</C> are <C>&lt;li&gt;</C>, <C>BreadcrumbLink</C> an <C>&lt;a&gt;</C>,
        and <C>BreadcrumbPage</C> and <C>BreadcrumbEllipsis</C> are <C>&lt;span&gt;</C>. All their normal attributes work, like <C>href</C> and{" "}
        <C>className</C>. These two props are worth knowing (<C>render</C> works like Base UI&apos;s{" "}
        <a href="https://base-ui.com/react/utils/use-render" target="_blank" rel="noreferrer" className="font-semibold underline underline-offset-4">
          useRender
        </a>
        ):
      </p>
      <PropsTable rows={props} />
      <p>
        The links take a slightly dimmed version of the text color around them, so the trail reads on denim, on a card and on cream. There are no
        settings to change.
      </p>

      <H2 id="accessibility">Accessibility</H2>
      <ul className="grid list-disc gap-2 pl-5">
        <li>
          <strong>A named landmark.</strong> <C>Breadcrumb</C> is a <C>&lt;nav&gt;</C> with <C>aria-label=&quot;breadcrumb&quot;</C>, so screen
          reader users can jump to it. The trail inside is an ordered list (<C>&lt;ol&gt;</C>).
        </li>
        <li>
          <strong>The current page.</strong> <C>BreadcrumbPage</C> has <C>aria-current=&quot;page&quot;</C>, so screen readers say it is the page
          you are on. It is shown in bold and is not a real link: it has <C>aria-disabled=&quot;true&quot;</C> and no <C>href</C>, so you can not
          Tab to it.
        </li>
        <li>
          <strong>Links.</strong> <C>BreadcrumbLink</C> is a real <C>&lt;a&gt;</C>. Tab moves to it and Enter follows it. A focused link shows a
          gold ring.
        </li>
        <li>
          <strong>Separators are hidden</strong> from screen readers (<C>aria-hidden</C>), so they hear only the page names. A custom separator is
          hidden the same way.
        </li>
        <li>
          <strong>The ellipsis</strong> shows three dots and has the hidden text &quot;More&quot; for screen readers. It is not a button. If you
          want it to open a menu of the hidden pages, put it inside a trigger, like a Dropdown Menu trigger.
        </li>
        <li>
          <strong>Right to left.</strong> The chevron flips in right to left pages.
        </li>
      </ul>
    </>
  )
}
