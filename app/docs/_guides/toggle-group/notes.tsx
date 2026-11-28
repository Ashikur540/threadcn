import { C, H2 } from "../../_ui/page-shell"

const props = [
  {
    name: "variant",
    type: '"default" | "outline"',
    def: "none",
    what: "Set it on the group and every item gets it. An item's own variant is used only when the group has none.",
  },
  {
    name: "size",
    type: '"default" | "sm" | "lg"',
    def: "none",
    what: "Set it on the group and every item gets it. An item's own size is used only when the group has none.",
  },
  { name: "spacing", type: "number", def: "2", what: "The gap between items, in Tailwind spacing units (2 is 0.5rem). 0 joins them into one strip with square inner corners (and one stitch around it for the outline variant)." },
  {
    name: "orientation",
    type: '"horizontal" | "vertical"',
    def: '"horizontal"',
    what: "vertical stacks the items in a column, all the same width. It also tells Base UI which arrow keys to use.",
  },
  { name: "className", type: "string", def: "none", what: "Your own Tailwind classes. If they clash with a built-in style, yours win." },
]

const cell = "border-b border-dashed border-(--tx-field-border)/50 px-3 py-2.5 text-left align-top"

/** The hand-written part of the Toggle Group page: props and accessibility. */
export function ToggleGroupNotes() {
  return (
    <>
      <H2 id="props">Props</H2>
      <p>
        These are the <C>ToggleGroup</C> props threadcn adds. They match shadcn/ui.{" "}
        <a href="https://base-ui.com/react/components/toggle-group" target="_blank" rel="noreferrer" className="font-semibold underline underline-offset-4">
          All other props come from Base UI Toggle Group
        </a>
        , like <C>multiple</C>, <C>value</C>, <C>defaultValue</C>, <C>onValueChange</C>, <C>loopFocus</C> and <C>disabled</C>. The value is
        always an array, even when only one item can be on.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[36rem] border-collapse text-[15px]">
          <thead>
            <tr className="font-(family-name:--tx-font-patch)">
              <th className={cell}>Prop</th>
              <th className={cell}>Type</th>
              <th className={cell}>Default</th>
              <th className={cell}>What it does</th>
            </tr>
          </thead>
          <tbody>
            {props.map((p) => (
              <tr key={p.name}>
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
        Each <C>ToggleGroupItem</C> needs a <C>value</C> and has the same look as a Toggle, so the Toggle settings (like <C>--_radius</C>) work
        on it too.
      </p>

      <H2 id="accessibility">Accessibility</H2>
      <ul className="grid list-disc gap-2 pl-5">
        <li>
          <strong>Keyboard.</strong> Tab moves into the group once, not to every item. Then the arrow keys move between items: Left and Right in a
          row, Up and Down in a column. Home and End jump to the first and last item. At the end, focus loops back to the start (turn this off
          with <C>loopFocus=&#123;false&#125;</C>). Enter or Space turns the focused item on or off.
        </li>
        <li>
          <strong>Screen readers</strong> hear a group, and each item as a button that is pressed or not pressed. Give the group a name with{" "}
          <C>aria-label</C>, like <C>aria-label=&quot;Fit&quot;</C>. The stitch is hidden from them.
        </li>
        <li>
          <strong>Focus ring.</strong> The focused item shows the same gold ring as a Toggle. It is lifted above its neighbours, so the ring is
          not hidden when the items touch.
        </li>
        <li>
          <strong>Reduced motion and high contrast mode</strong> work as on the Toggle: no color fade when motion is off, and in Windows high
          contrast mode every item gets a border, a thick one when it is on.
        </li>
      </ul>
    </>
  )
}
