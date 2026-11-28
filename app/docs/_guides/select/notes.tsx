import { C, H2 } from "../../_ui/page-shell"

const props = [
  {
    part: "SelectTrigger",
    name: "size",
    type: '"default" | "sm"',
    def: '"default"',
    what: "Height, padding and text size of the closed field. Same values as shadcn/ui.",
  },
  {
    part: "SelectContent",
    name: "alignItemWithTrigger",
    type: "boolean",
    def: "false",
    what: "Changed in threadcn. The list opens below the field instead of covering it. Set it to true to put the picked option over the field, as Base UI does.",
  },
  { part: "SelectContent", name: "side", type: '"top" | "bottom" | "left" | "right" | ...', def: '"bottom"', what: "Which side of the field the list opens on." },
  { part: "SelectContent", name: "sideOffset", type: "number", def: "6", what: "Gap in pixels between the field and the list." },
  { part: "SelectContent", name: "align", type: '"start" | "center" | "end"', def: '"center"', what: "How the list lines up with the field." },
  { part: "any part", name: "className", type: "string", def: "none", what: "Your own Tailwind classes. If they clash with a built-in style, yours win." },
]

const cell = "border-b border-dashed border-(--tx-field-border)/50 px-3 py-2.5 text-left align-top"

/** The hand-written part of the Select page: props and accessibility. */
export function SelectNotes() {
  return (
    <>
      <H2 id="props">Props</H2>
      <p>
        Only what threadcn adds or changes is listed here.{" "}
        <a href="https://base-ui.com/react/components/select" target="_blank" rel="noreferrer" className="font-semibold underline underline-offset-4">
          All other props come from Base UI Select
        </a>
        , like <C>items</C>, <C>value</C>, <C>onValueChange</C>, <C>multiple</C> and <C>disabled</C> on <C>Select</C>, and <C>disabled</C> on{" "}
        <C>SelectItem</C>.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[40rem] border-collapse text-[15px]">
          <thead>
            <tr className="font-(family-name:--tx-font-patch)">
              <th className={cell}>Part</th>
              <th className={cell}>Prop</th>
              <th className={cell}>Type</th>
              <th className={cell}>Default</th>
              <th className={cell}>What it does</th>
            </tr>
          </thead>
          <tbody>
            {props.map((p) => (
              <tr key={`${p.part}-${p.name}`}>
                <td className={cell}>{p.part}</td>
                <td className={cell}>
                  <C>{p.name}</C>
                </td>
                <td className={`${cell} font-mono text-[13px]`}>{p.type}</td>
                <td className={`${cell} font-mono text-[13px]`}>{p.def}</td>
                <td className={cell}>{p.what}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Pass <C>items</C> to <C>Select</C> (a list of <C>{"{ label, value }"}</C>) so the closed field shows the label, like &quot;Waist 32&quot;,
        and not the raw value.
      </p>

      <H2 id="accessibility">Accessibility</H2>
      <ul className="grid list-disc gap-2 pl-5">
        <li>
          <strong>Keyboard.</strong> Tab moves to the field. Enter, Space or the arrow keys open the list. Up and Down move through the options,
          Enter picks one, and Escape closes the list without a change.
        </li>
        <li>
          <strong>Typing to jump.</strong> Type the first letters of an option to jump to it. If the list is closed, typing picks that option
          straight away. Disabled options are skipped.
        </li>
        <li>
          <strong>Screen readers</strong> hear the field as a combobox that opens a list, and whether it is open. Each option says if it is
          selected. A <C>SelectGroup</C> with a <C>SelectLabel</C> is read as a named group. The tick and chevron are drawn in CSS, so no stray
          symbols are read out, and the stitch is hidden from them.
        </li>
        <li>
          <strong>Give it a name.</strong> Put a <C>&lt;Label htmlFor=&quot;...&quot;&gt;</C> above it and the same <C>id</C> on{" "}
          <C>SelectTrigger</C>, or add an <C>aria-label</C> to <C>SelectTrigger</C>.
        </li>
        <li>
          <strong>Focus ring.</strong> When the field has keyboard focus, or its list is open, the stitch darkens and a gold ring hugs the edge.
          If a shadow class removes the ring, the darker stitch still shows focus.
        </li>
        <li>
          <strong>Errors.</strong> Add <C>aria-invalid</C> to <C>SelectTrigger</C> and the dashed stitch becomes a solid outline in the error
          color.
        </li>
        <li>
          <strong>Reduced motion.</strong> If the visitor turns motion off in their system, the list appears and hides without fading, and the
          chevron flips without turning.
        </li>
        <li>
          <strong>High contrast mode.</strong> In Windows high contrast mode focus shows as a thick outline in the system highlight color, and an
          error as a double line. The list gets a border, and the highlighted option uses the system highlight colors.
        </li>
      </ul>
    </>
  )
}
