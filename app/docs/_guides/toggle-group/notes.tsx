import { C, H2, H3 } from "../../_ui/page-shell"
import { BaseUiLink, type PropRow, PropsTable, type SettingRow, SettingsTable } from "../../_ui/notes-tables"

export const settings: SettingRow[] = [
  ["--_stitch", "Thread color of the one stitch around a joined outline group", "[--_stitch:white]"],
  ["--_thread", "How thick that thread is", "[--_thread:2.5px]"],
  ["--_inset", "How far the stitch sits inside the edge", "[--_inset:6px]"],
  ["--_radius", "How round the two end corners are. The stitch follows the same curve.", "[--_radius:6px]"],
]

export const props: PropRow[] = [
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

/** The hand-written part of the Toggle Group page: props and accessibility. */
export function ToggleGroupNotes() {
  return (
    <>
      <H2 id="props">Props</H2>
      <p>
        These are the <C>ToggleGroup</C> props threadcn adds. They match shadcn/ui.{" "}
        <BaseUiLink name="toggle-group">
          All other props come from Base UI Toggle Group
        </BaseUiLink>
        , like <C>multiple</C>, <C>value</C>, <C>defaultValue</C>, <C>onValueChange</C>, <C>loopFocus</C> and <C>disabled</C>. The value is
        always an array, even when only one item can be on.
      </p>
      <PropsTable rows={props} />
      <p>
        Each <C>ToggleGroupItem</C> needs a <C>value</C> and has the same look as a Toggle, so the Toggle settings (like <C>--_radius</C>) work
        on it too.
      </p>

      <H3 id="settings">What each setting changes</H3>
      <p>
        These change the stitch around a joined group (<C>spacing={"{0}"}</C> with <C>variant=&quot;outline&quot;</C>). Set them with a Tailwind
        class on <C>ToggleGroup</C>. To change the items themselves, use the Toggle settings on <C>ToggleGroupItem</C>.
      </p>
      <SettingsTable rows={settings} />

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
