import { C, H2, H3 } from "../../_ui/page-shell"
import { BaseUiLink, type PropRow, PropsTable, type SettingRow, SettingsTable } from "../../_ui/notes-tables"

export const props: PropRow[] = [
  {
    part: "SheetContent",
    name: "side",
    type: '"top" | "right" | "bottom" | "left"',
    def: '"right"',
    what: "The screen edge the sheet slides in from. Left and right sheets are full height, and at most 24rem wide on bigger screens. Top and bottom sheets are full width, and at most 85% of the screen tall.",
  },
  {
    part: "SheetContent",
    name: "showCloseButton",
    type: "boolean",
    def: "true",
    what: "Shows the round close X in the top right corner.",
  },
  { part: "any part", name: "className", type: "string", def: "none", what: "Your own Tailwind classes. If they clash with a built-in style, yours win." },
]

export const settings: SettingRow[] = [
  ["--_stitch", "Thread color", "[--_stitch:white]"],
  ["--_thread", "How thick the thread is", "[--_thread:2.5px]"],
  ["--_inset", "How far the stitch sits inside the edge. The default is 8px.", "[--_inset:12px]"],
  ["--_radius", "How round the corners are. The stitch follows the same curve.", "[--_radius:8px]"],
]

/** The hand-written part of the Sheet page: how it differs, props, settings, and accessibility. */
export function SheetNotes() {
  return (
    <>
      <H2 id="props">Props</H2>
      <p>
        Only what threadcn adds or changes is listed here. A Sheet is a Base UI Dialog that slides in from an edge, so{" "}
        <BaseUiLink name="dialog">
          all other props come from Base UI Dialog
        </BaseUiLink>
        , like <C>open</C>, <C>defaultOpen</C>, <C>onOpenChange</C> and <C>disablePointerDismissal</C> on <C>Sheet</C>.
      </p>
      <PropsTable rows={props} />
      <p>Two things differ from shadcn/ui:</p>
      <ul className="grid list-disc gap-2 pl-5">
        <li>
          The sheet floats 12px off the screen edge, so all four stitched corners stay round.
        </li>
        <li>
          Everything you put in <C>SheetContent</C> goes into an inner box (<C>data-slot=&quot;sheet-body&quot;</C>). When it is too tall, only
          that box scrolls. The stitch and the close X stay where they are.
        </li>
      </ul>

      <H3 id="settings">What each setting changes</H3>
      <p>
        The sheet reads a few settings (CSS variables). Set them with a Tailwind class on <C>SheetContent</C> and only that sheet changes. For
        example, <C>&lt;SheetContent className=&quot;[--_stitch:white]&quot;&gt;</C> sews it with white thread.
      </p>
      <SettingsTable rows={settings} />

      <H2 id="accessibility">Accessibility</H2>
      <ul className="grid list-disc gap-2 pl-5">
        <li>
          <strong>Keyboard.</strong> Enter or Space on the trigger opens the sheet. Tab and Shift+Tab move between the fields and buttons inside.
          Escape closes it.
        </li>
        <li>
          <strong>Focus.</strong> When it opens, focus moves to the first thing you can Tab to inside the sheet (opened by touch, the sheet itself
          gets focus, so the phone keyboard does not pop up). While it is open, Tab stays inside. When it closes, focus goes back to the trigger.
        </li>
        <li>
          <strong>Screen readers</strong> hear it as a dialog (Base UI gives it <C>role=&quot;dialog&quot;</C>). Its name is the{" "}
          <C>SheetTitle</C> and its description is the <C>SheetDescription</C>, so always add a title. The close X is read as &quot;Close&quot;,
          and the stitch is hidden from them.
        </li>
        <li>
          <strong>The page behind</strong> is dimmed, does not scroll, and can&apos;t be clicked while the sheet is open. A click on the dimmed
          part closes the sheet.
        </li>
        <li>
          <strong>Hiding the X.</strong> With <C>showCloseButton=&#123;false&#125;</C>, keep a <C>SheetClose</C> button inside so there is a
          clear way out, also for people on touch screen readers.
        </li>
        <li>
          <strong>Reduced motion.</strong> If the visitor turns motion off in their system, the sheet and the dim layer appear and hide at once,
          without sliding.
        </li>
        <li>
          <strong>High contrast mode.</strong> In Windows high contrast mode the stitch is hidden and the sheet gets a real 1px border.
        </li>
      </ul>
    </>
  )
}
