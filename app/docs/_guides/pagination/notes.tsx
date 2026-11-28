import { C, H2 } from "../../_ui/page-shell"
import { type PropRow, PropsTable } from "../../_ui/notes-tables"

export const props: PropRow[] = [
  {
    part: "PaginationLink",
    name: "isActive",
    type: "boolean",
    def: "false",
    what: "Marks the page you are on. It turns into the leather patch and gets aria-current=\"page\".",
  },
  {
    part: "PaginationLink",
    name: "size",
    type: '"default" | "sm" | "icon" | "icon-sm"',
    def: '"icon"',
    what: "Uses the Button sizes. icon and icon-sm make a square for a page number. Previous and Next use default; pass sm to make them smaller.",
  },
  {
    part: "PaginationPrevious, PaginationNext",
    name: "text",
    type: "string",
    def: '"Previous", "Next"',
    what: "The word next to the arrow. It shows on screens 640px and wider; on phones only the arrow shows.",
  },
]

/** The hand-written part of the Pagination page: props and accessibility. */
export function PaginationNotes() {
  return (
    <>
      <H2 id="props">Props</H2>
      <p>
        The parts are plain HTML elements, the same as shadcn/ui: <C>Pagination</C> is a <C>&lt;nav&gt;</C>, <C>PaginationContent</C> a{" "}
        <C>&lt;ul&gt;</C>, <C>PaginationItem</C> an <C>&lt;li&gt;</C>, <C>PaginationLink</C>, <C>PaginationPrevious</C> and{" "}
        <C>PaginationNext</C> are <C>&lt;a&gt;</C>, and <C>PaginationEllipsis</C> is a <C>&lt;span&gt;</C>. All their normal attributes work,
        like <C>href</C> and <C>className</C>. The links wear the Button look: a ghost button for other pages and the leather patch for the
        current one. These are the props threadcn adds:
      </p>
      <PropsTable rows={props} />
      <p>
        There is no <C>disabled</C> prop, because a link can not be disabled. On the first page, leave <C>PaginationPrevious</C> out, and on the
        last page leave out <C>PaginationNext</C>. There are no settings of its own: the links use the Button styles.
      </p>

      <H2 id="accessibility">Accessibility</H2>
      <ul className="grid list-disc gap-2 pl-5">
        <li>
          <strong>A named landmark.</strong> <C>Pagination</C> is a <C>&lt;nav&gt;</C> with <C>aria-label=&quot;pagination&quot;</C>. If a page has
          more than one, give each its own name, like <C>aria-label=&quot;Reviews, pages&quot;</C>. Your label replaces the built-in one.
        </li>
        <li>
          <strong>The current page</strong> has <C>aria-current=&quot;page&quot;</C>, so screen readers say it is the page you are on.
        </li>
        <li>
          <strong>Real links.</strong> Each page is an <C>&lt;a&gt;</C>, and screen readers call it a link. shadcn/ui&apos;s version is announced
          as a button; threadcn keeps the link role, because it takes you to a new page. Tab moves to each link and Enter follows it. A link needs an <C>href</C>, or the keyboard
          can not reach it.
        </li>
        <li>
          <strong>Previous and Next</strong> have <C>aria-label=&quot;Go to previous page&quot;</C> and <C>&quot;Go to next page&quot;</C>, so they
          still have a name on phones, where the word is hidden. If you change <C>text</C>, change the <C>aria-label</C> to match, as in the labels
          example. The arrows are hidden from screen readers and flip in right to left pages.
        </li>
        <li>
          <strong>The ellipsis</strong> has the hidden text &quot;More pages&quot; for screen readers. It is not a link.
        </li>
        <li>
          <strong>Focus ring, reduced motion and high contrast mode</strong> work the same as on the Button: a gold ring on focus, no sink when
          pressed if the visitor turns motion off, and a 1px border in Windows high contrast mode.
        </li>
      </ul>
    </>
  )
}
