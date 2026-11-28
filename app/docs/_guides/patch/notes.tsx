import { C, H2, H3 } from "../../_ui/page-shell"
import { type PropRow, PropsTable, type SettingRow, SettingsTable } from "../../_ui/notes-tables"

export const props: PropRow[] = [
  {
    part: "Patch",
    name: "variant",
    type: '"default" | "round"',
    def: '"default"',
    what: "default is a leather label for a brand name or logo. round is a denim patch with a PatchDot on the left.",
  },
  {
    part: "Patch",
    name: "render",
    type: "ReactElement | function",
    def: "none",
    what: (
      <>
        Draws the patch as another element. <C>render=&#123;&lt;a href=&quot;/&quot; /&gt;&#125;</C> makes it a link.
      </>
    ),
  },
  { part: "Patch", name: "className", type: "string", def: "none", what: "Your own Tailwind classes. If they clash with a built-in style, yours win." },
]

export const settings: SettingRow[] = [
  ["--_stitch", "Thread color", "[--_stitch:white]"],
  ["--_thread", "How thick the thread is. The default is 1.5px.", "[--_thread:2.5px]"],
  ["--_inset", "How far the stitch sits inside the edge. The default is 5px.", "[--_inset:7px]"],
  [
    "--_radius",
    "The corner the stitch follows. It does not round the patch itself, so change both together: rounded-[12px] [--_radius:12px].",
    "[--_radius:12px]",
  ],
]

/** The hand-written part of the Patch page: props, settings and accessibility. */
export function PatchNotes() {
  return (
    <>
      <H2 id="props">Props</H2>
      <p>
        Patch is a threadcn extra, not part of shadcn/ui. It is a <C>&lt;span&gt;</C>, so all the normal attributes work.{" "}
        <C>PatchDot</C> is a <C>&lt;span&gt;</C> too: the cream circle for a short number or an icon. Use it inside a round patch. There is no{" "}
        <C>size</C> prop; make a patch bigger or smaller with text and padding classes, as in the size example. To style a link the same way
        without the component, use <C>patchVariants()</C>.
      </p>
      <PropsTable rows={props} />

      <H3 id="settings">What each setting changes</H3>
      <p>
        These change the stitch on the <C>default</C> (leather) patch. Set them with a Tailwind class on <C>Patch</C>. The <C>round</C> patch
        draws its stitch a different way (a dashed outline, so it can follow the lopsided shape), and these settings do not change it.
      </p>
      <SettingsTable rows={settings} />

      <H2 id="accessibility">Accessibility</H2>
      <ul className="grid list-disc gap-2 pl-5">
        <li>
          <strong>Plain text.</strong> A patch is a <C>&lt;span&gt;</C> with no role, so screen readers read its text like any other text. The
          stitch is hidden from them.
        </li>
        <li>
          <strong>Icons and logos</strong> are up to you. If the text already names the brand, add <C>aria-hidden=&quot;true&quot;</C> to the
          SVG, as in the icon example. If the patch is only a logo, give the SVG a name with <C>role=&quot;img&quot;</C> and{" "}
          <C>aria-label</C>.
        </li>
        <li>
          <strong>As a link.</strong> With <C>render=&#123;&lt;a href=&quot;...&quot; /&gt;&#125;</C> it is a real link: Tab moves to it, Enter
          follows it, and a gold focus ring shows around it.
        </li>
        <li>
          <strong>Reduced motion.</strong> A patch has no animation, so there is nothing to turn off.
        </li>
        <li>
          <strong>High contrast mode.</strong> In Windows high contrast mode the patch gets a 1px border, so it keeps its shape.
        </li>
      </ul>
    </>
  )
}
