import { C, H2, H3 } from "../../_ui/page-shell"
import { type PropRow, PropsTable, type SettingRow, SettingsTable } from "../../_ui/notes-tables"

export const props: PropRow[] = [
  {
    part: "Alert",
    name: "variant",
    type: '"default" | "destructive"',
    def: '"default"',
    what: "The look. default is a cream care label with a brown stitch. destructive is a rust patch, for errors. Same values as shadcn/ui.",
  },
  { part: "any part", name: "className", type: "string", def: "none", what: "Your own Tailwind classes. If they clash with a built-in style, yours win." },
]

export const settings: SettingRow[] = [
  ["--_stitch", "Thread color", "[--_stitch:white]"],
  ["--_thread", "How thick the thread is", "[--_thread:2.5px]"],
  ["--_inset", "How far the stitch sits inside the edge. The default is 5px.", "[--_inset:8px]"],
  ["--_radius", "How round the corners are. The stitch follows the same curve.", "[--_radius:4px]"],
]

/** The hand-written part of the Alert page: props, settings, and accessibility. */
export function AlertNotes() {
  return (
    <>
      <H2 id="props">Props</H2>
      <p>
        Alert is a plain <C>&lt;div&gt;</C> (not a Base UI part), and so are <C>AlertTitle</C>, <C>AlertDescription</C> and <C>AlertAction</C>.
        Every normal <C>div</C> attribute works on them, like <C>id</C> and <C>aria-*</C>. The parts and props match shadcn/ui.
      </p>
      <PropsTable rows={props} />
      <p>
        Put an SVG icon before the title and it sits in its own column, 18px wide, next to the title and description. <C>AlertAction</C> pins
        a button or link to the top right corner, and the Alert makes room for it on the right.
      </p>

      <H3 id="settings">What each setting changes</H3>
      <p>
        Each alert reads a few settings (CSS variables). Set them with a Tailwind class and only that alert changes. For example,{" "}
        <C>&lt;Alert className=&quot;[--_stitch:white]&quot;&gt;</C> sews it with white thread.
      </p>
      <SettingsTable rows={settings} />

      <H2 id="accessibility">Accessibility</H2>
      <ul className="grid list-disc gap-2 pl-5">
        <li>
          <strong>Screen readers.</strong> Every Alert has <C>role=&quot;alert&quot;</C>, like in shadcn/ui. When an alert is added to the page
          after it loads (for example after a failed checkout), screen readers read it out at once, even in the middle of something else. So
          keep it for messages that matter. For a calm note that is always on the page, pass your own role, like{" "}
          <C>role=&quot;note&quot;</C>: it replaces the default.
        </li>
        <li>
          <strong>Icons</strong> are decoration. Add <C>aria-hidden=&quot;true&quot;</C> to your SVG, and say everything in the title and
          description. The stitch is already hidden from screen readers.
        </li>
        <li>
          <strong>Keyboard.</strong> The alert itself can&apos;t be focused. A button or link inside <C>AlertAction</C> is reached with Tab like
          any other.
        </li>
        <li>
          <strong>Color is not the only sign.</strong> The destructive alert is rust colored, but people who can&apos;t see the color still need
          the words. Write the problem in the title, like &quot;Waist 32 is sold out&quot;.
        </li>
        <li>
          <strong>High contrast mode.</strong> In Windows high contrast mode the stitch is hidden and the alert gets a real 1px border. The
          destructive alert gets a thicker double border, so you can tell the two apart.
        </li>
      </ul>
    </>
  )
}
