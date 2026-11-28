import { C, H2, H3 } from "../../_ui/page-shell"
import { type PropRow, PropsTable, type SettingRow, SettingsTable } from "../../_ui/notes-tables"

export const props: PropRow[] = [
  {
    part: "Card",
    name: "size",
    type: '"default" | "sm"',
    def: '"default"',
    what: "How much room there is inside. sm has less padding and smaller gaps, and pulls the stitch closer to the edge (6px instead of 8px).",
  },
  { part: "any part", name: "className", type: "string", def: "none", what: "Your own Tailwind classes. If they clash with a built-in style, yours win." },
]

export const settings: SettingRow[] = [
  ["--_stitch", "Thread color. The default is the theme thread color.", "[--_stitch:white]"],
  ["--_thread", "How thick the thread is", "[--_thread:2.5px]"],
  ["--_inset", "How far the stitch sits inside the edge. The default is 8px, or 6px with size=\"sm\".", "[--_inset:12px]"],
  ["--_radius", "How round the corners are. The card and its stitch both follow it.", "[--_radius:6px]"],
]

/** The hand-written part of the Card page: props, settings, and accessibility. */
export function CardNotes() {
  return (
    <>
      <H2 id="props">Props</H2>
      <p>
        Card is plain HTML, not a Base UI part. Every part renders a <C>&lt;div&gt;</C>, so all the normal <C>div</C> attributes work, like{" "}
        <C>id</C>, <C>role</C> and <C>onClick</C>. The parts are <C>Card</C>, <C>CardHeader</C>, <C>CardTitle</C>, <C>CardDescription</C>,{" "}
        <C>CardAction</C>, <C>CardContent</C> and <C>CardFooter</C>, the same as shadcn/ui.
      </p>
      <PropsTable rows={props} />
      <p>
        <C>CardAction</C> sits in the top right corner of the header, next to the title and description. There is no image part: put an{" "}
        <C>&lt;img&gt;</C> or <C>&lt;svg&gt;</C> straight inside the card, as in the picture example. The padding keeps it inside the stitch.
      </p>
      <p>
        In dark mode (the Quilted night theme) the card gets a soft shadow inside its bottom edge and a light glow near the top, so it looks puffy
        and quilted. In light mode it is flat denim with a drop shadow. You don&apos;t set anything for this.
      </p>

      <H3 id="settings">What each setting changes</H3>
      <p>
        Each card reads a few settings (CSS variables). Set them with a Tailwind class on <C>Card</C> and only that card changes. For example,{" "}
        <C>&lt;Card className=&quot;[--_stitch:white]&quot;&gt;</C> sews it with white thread.
      </p>
      <SettingsTable rows={settings} />

      <H2 id="accessibility">Accessibility</H2>
      <ul className="grid list-disc gap-2 pl-5">
        <li>
          <strong>Headings.</strong> <C>CardTitle</C> is a <C>&lt;div&gt;</C>, not a heading, so screen reader users can&apos;t jump to it. When a
          card is a section of its own, add <C>role=&quot;heading&quot;</C> and an <C>aria-level</C> that fits your page, as the first example does.
        </li>
        <li>
          <strong>Pictures.</strong> Give an image that shows something an <C>alt</C> text (or <C>role=&quot;img&quot;</C> and an{" "}
          <C>aria-label</C> on an SVG). Use <C>alt=&quot;&quot;</C> when it is only decoration.
        </li>
        <li>
          <strong>The stitch</strong> is hidden from screen readers. It is only a drawing.
        </li>
        <li>
          <strong>No motion.</strong> Card has no animation, so there is nothing to turn off for reduced motion.
        </li>
        <li>
          <strong>High contrast mode.</strong> In Windows high contrast mode the stitch is hidden and the card gets a real 1px border, so you can
          still see its edge.
        </li>
      </ul>
    </>
  )
}
