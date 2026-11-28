import { C, H2, H3 } from "../../_ui/page-shell"
import { type SettingRow, SettingsTable } from "../../_ui/notes-tables"

export const settings: SettingRow[] = [
  ["--_stitch", "Thread color. If neither the box nor a parent sets it, the shared thread color (--tx-thread) is used.", "[--_stitch:white]"],
  ["--_thread", "Thread width, like 2.5px. If neither the box nor a parent sets it, the shared width (--tx-thread-width) is used.", "[--_thread:2.5px]"],
  ["--_inset", "How far the stitch sits inside the edge. It has no default, so always set it.", "[--_inset:6px]"],
  [
    "--_radius",
    "The corner radius of the box. The stitch takes away the inset, so its curve sits neatly inside the corner. Set it to the same value as your rounded class.",
    "[--_radius:14px]",
  ],
]

/** The hand-written part of the Stitch page: how it works, settings and accessibility. */
export function StitchNotes() {
  return (
    <>
      <H2 id="props">Props</H2>
      <p>
        <C>Stitch</C> renders an <C>&lt;svg&gt;</C> with one <C>&lt;rect&gt;</C> inside, and all the normal SVG attributes work, like{" "}
        <C>className</C>. It has no props of its own. Everything it needs comes from CSS.
      </p>

      <H2 id="how-it-works">How it works</H2>
      <p>
        Stitch is the building block almost every stitched threadcn part uses: Button, Tabs, Patch, Toggle, Card and more each put a <C>&lt;Stitch /&gt;</C>{" "}
        inside and set the four settings below. You can do the same on your own boxes:
      </p>
      <ol className="grid list-decimal gap-2 pl-5">
        <li>
          Give the box <C>position: relative</C> (the <C>relative</C> class). The stitch is placed with <C>position: absolute</C> and fills the
          nearest box that has a position.
        </li>
        <li>
          Put <C>&lt;Stitch /&gt;</C> inside it.
        </li>
        <li>
          Set the settings with Tailwind classes. CSS variables pass down to children (this is called inheritance), so you can set them on the box
          itself or on any parent of it. The nearest one wins. That is also why setting them on the outside of a threadcn part often does nothing:
          the part sets its own values on the element that holds its stitch.
        </li>
        <li>
          Inheritance works the other way too. If your box sits inside a threadcn part that sets these values, like a Tabs panel or a Card,
          your stitch picks up that part&apos;s values for anything you leave out. To be safe, set all four on your own box.
        </li>
      </ol>

      <H3 id="settings">What each setting changes</H3>
      <SettingsTable rows={settings} />

      <H2 id="accessibility">Accessibility</H2>
      <ul className="grid list-disc gap-2 pl-5">
        <li>
          <strong>Decoration only.</strong> The SVG has <C>aria-hidden=&quot;true&quot;</C> and <C>focusable=&quot;false&quot;</C>, so screen
          readers skip it and the keyboard never stops on it. It also ignores the mouse (<C>pointer-events: none</C>), so clicks go through to
          your box.
        </li>
        <li>
          <strong>Do not rely on it.</strong> The stitch is only a look. If a box needs an edge to be seen, give it a background or a border too.
        </li>
        <li>
          <strong>High contrast mode.</strong> In Windows high contrast mode every stitch is hidden. threadcn parts draw a real border there
          instead; for your own boxes, add one with the <C>forced-colors:</C> Tailwind variant, like <C>forced-colors:border</C>.
        </li>
        <li>
          <strong>Reduced motion.</strong> A stitch never moves, so there is nothing to turn off.
        </li>
      </ul>
    </>
  )
}
