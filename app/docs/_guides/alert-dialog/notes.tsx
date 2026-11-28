import { C, H2, H3 } from "../../_ui/page-shell"
import { BaseUiLink, type PropRow, PropsTable, type SettingRow, SettingsTable } from "../../_ui/notes-tables"

export const props: PropRow[] = [
  {
    part: "AlertDialogContent",
    name: "size",
    type: '"default" | "sm"',
    def: '"default"',
    what: "sm makes a narrow box, and the two footer buttons sit side by side at the same width. Same values as shadcn/ui.",
  },
  {
    part: "AlertDialogCancel",
    name: "variant",
    type: "Button variants",
    def: '"secondary"',
    what: "Changed in threadcn: the button that backs out is the dark denim (secondary) button. shadcn/ui uses outline.",
  },
  { part: "AlertDialogCancel", name: "size", type: "Button sizes", def: '"default"', what: "Button size of the back-out button." },
  {
    part: "AlertDialogAction",
    name: "all Button props",
    type: "Button props",
    def: "none",
    what: "It is a threadcn Button, so it takes variant, size and onClick. It does not close the dialog by itself.",
  },
  { part: "any part", name: "className", type: "string", def: "none", what: "Your own Tailwind classes. If they clash with a built-in style, yours win." },
]

export const settings: SettingRow[] = [
  ["--_stitch", "Thread color", "[--_stitch:white]"],
  ["--_thread", "How thick the thread is", "[--_thread:2.5px]"],
  ["--_inset", "How far the stitch sits inside the edge. The default is 8px.", "[--_inset:12px]"],
  ["--_radius", "How round the corners are. The stitch follows the same curve.", "[--_radius:8px]"],
]

/** The hand-written part of the Alert Dialog page: when to use it, props, settings, and accessibility. */
export function AlertDialogNotes() {
  return (
    <>
      <H2 id="when-to-use">Alert Dialog or Dialog?</H2>
      <p>
        Both open a box over a dimmed page. The difference is how you get out.
      </p>
      <ul className="grid list-disc gap-2 pl-5">
        <li>
          <strong>Alert Dialog</strong> asks a question that needs an answer. A click on the dimmed page does nothing, and there is no close X. You
          leave by picking a button, or by pressing Escape. Use it before something you can&apos;t undo, like cancelling a repair or deleting a
          saved address.
        </li>
        <li>
          <strong>Dialog</strong> is for everything else: a form, details, a message. A click outside, the X or Escape closes it, and nothing is
          lost.
        </li>
      </ul>
      <p>
        Base UI makes this rule for you: an Alert Dialog is always modal, and you can&apos;t turn the outside click back on.
      </p>

      <H2 id="props">Props</H2>
      <p>
        Only what threadcn adds or changes is listed here.{" "}
        <BaseUiLink name="alert-dialog">
          All other props come from Base UI Alert Dialog
        </BaseUiLink>
        , like <C>open</C>, <C>defaultOpen</C> and <C>onOpenChange</C> on <C>AlertDialog</C>, and <C>initialFocus</C> and <C>finalFocus</C> on{" "}
        <C>AlertDialogContent</C>.
      </p>
      <PropsTable rows={props} />
      <p>
        <C>AlertDialogCancel</C> closes the dialog. <C>AlertDialogAction</C> does not, so you can run your work first. Control the dialog with{" "}
        <C>open</C> and <C>onOpenChange</C>, and set <C>open</C> to false when the work is done, like the examples above. <C>AlertDialogMedia</C>{" "}
        is a cream circle for an icon above the title.
      </p>

      <H3 id="settings">What each setting changes</H3>
      <p>
        The box reads a few settings (CSS variables). Set them with a Tailwind class on <C>AlertDialogContent</C> and only that box changes. For
        example, <C>&lt;AlertDialogContent className=&quot;[--_stitch:white]&quot;&gt;</C> sews it with white thread.
      </p>
      <SettingsTable rows={settings} />

      <H2 id="accessibility">Accessibility</H2>
      <ul className="grid list-disc gap-2 pl-5">
        <li>
          <strong>Keyboard.</strong> Enter or Space on the trigger opens it. Tab and Shift+Tab move between the buttons. Escape closes it, the same
          as the Cancel button.
        </li>
        <li>
          <strong>Focus.</strong> When it opens, focus moves to the first button in the footer, which is the Cancel button in these examples. So a
          quick Enter backs out instead of doing the risky thing. Tab stays inside while it is open, and focus goes back to the trigger when it
          closes.
        </li>
        <li>
          <strong>Screen readers</strong> hear it as an alert dialog (Base UI gives it <C>role=&quot;alertdialog&quot;</C>), so they know it
          needs an answer. Its name is the <C>AlertDialogTitle</C> and its description is the <C>AlertDialogDescription</C>. The stitch is hidden
          from them.
        </li>
        <li>
          <strong>The page behind</strong> is dimmed, does not scroll, and can&apos;t be clicked while it is open.
        </li>
        <li>
          <strong>Reduced motion.</strong> If the visitor turns motion off in their system, the box and the dim layer appear and hide at once,
          without the fade and grow.
        </li>
        <li>
          <strong>High contrast mode.</strong> In Windows high contrast mode the stitch is hidden and the box gets a real 1px border.
        </li>
      </ul>
    </>
  )
}
