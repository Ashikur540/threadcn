import { C, H2 } from "../../_ui/page-shell"

const link = "font-semibold underline underline-offset-4"

/** The hand-written part of the Table page: props and accessibility. */
export function TableNotes() {
  return (
    <>
      <H2 id="props">Props</H2>
      <p>
        threadcn adds no props. Table is plain HTML, not a Base UI part, so{" "}
        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table" target="_blank" rel="noreferrer" className={link}>
          every normal table attribute works
        </a>
        , like <C>colSpan</C> and <C>scope</C>. Each part renders one element: <C>Table</C> a <C>&lt;table&gt;</C>, <C>TableCaption</C> a{" "}
        <C>&lt;caption&gt;</C>, <C>TableHeader</C> a <C>&lt;thead&gt;</C>, <C>TableBody</C> a <C>&lt;tbody&gt;</C>, <C>TableFooter</C> a{" "}
        <C>&lt;tfoot&gt;</C>, <C>TableRow</C> a <C>&lt;tr&gt;</C>, <C>TableHead</C> a <C>&lt;th&gt;</C> and <C>TableCell</C> a <C>&lt;td&gt;</C>.
      </p>
      <p>
        <C>Table</C> wraps the <C>&lt;table&gt;</C> in a box that scrolls sideways. Your <C>className</C> and other props go on the{" "}
        <C>&lt;table&gt;</C>, not on that box. Cells don&apos;t wrap their text, so on a narrow screen the table scrolls instead of squeezing. To make
        a long cell wrap, add <C>whitespace-normal</C> to it.
      </p>
      <p>
        The lines between rows are dashed thread. The text and the row tints come from the text color around the table, so it reads well on the
        denim, in a card, and on cream. The caption shows under the table. Mark a chosen row with <C>data-state=&quot;selected&quot;</C> and it gets a darker tint.
      </p>

      <H2 id="accessibility">Accessibility</H2>
      <ul className="grid list-disc gap-2 pl-5">
        <li>
          <strong>A real table.</strong> It is made of real table elements, so screen readers can move by row and column and read the header of each
          cell.
        </li>
        <li>
          <strong>Caption.</strong> <C>TableCaption</C> is the table&apos;s name for screen readers, even though it shows under the table. Give each
          table one, or an <C>aria-label</C>.
        </li>
        <li>
          <strong>Headers.</strong> Put <C>scope=&quot;col&quot;</C> on each <C>TableHead</C> in the header row. When the first cell of a body row
          names that row (like an order number), make it a <C>TableHead</C> with <C>scope=&quot;row&quot;</C>, as in the wide example.
        </li>
        <li>
          <strong>Selected rows.</strong> The tint from <C>data-state=&quot;selected&quot;</C> is only a look. Screen readers don&apos;t hear it, so
          say it in words too (the size example adds a hidden &quot;your size&quot;).
        </li>
        <li>
          <strong>Reduced motion.</strong> If the visitor turns motion off in their system, the row tint on hover shows at once, without a fade.
        </li>
        <li>
          <strong>High contrast mode.</strong> In Windows high contrast mode each row gets a solid 1px line on top, and a selected row uses the
          system highlight colors.
        </li>
      </ul>
    </>
  )
}
