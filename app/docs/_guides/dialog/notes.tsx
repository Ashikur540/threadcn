import { C, H2, H3 } from "../../_ui/page-shell"

const props = [
  {
    part: "DialogContent",
    name: "showCloseButton",
    type: "boolean",
    def: "true",
    what: "Shows the round close X in the top right corner.",
  },
  {
    part: "DialogFooter",
    name: "showCloseButton",
    type: "boolean",
    def: "false",
    what: "Adds a Cancel button that closes the dialog. Changed in threadcn: it is the dark denim (secondary) button. shadcn/ui adds an outline Close button.",
  },
  { part: "any part", name: "className", type: "string", def: "none", what: "Your own Tailwind classes. If they clash with a built-in style, yours win. Use sm:max-w-2xl on DialogContent for a wider box." },
]

const settings = [
  ["--_stitch", "Thread color", "[--_stitch:white]"],
  ["--_thread", "How thick the thread is", "[--_thread:2.5px]"],
  ["--_inset", "How far the stitch sits inside the edge. The default is 8px.", "[--_inset:12px]"],
  ["--_radius", "How round the corners are. The stitch follows the same curve.", "[--_radius:8px]"],
]

const cell = "border-b border-dashed border-(--tx-field-border)/50 px-3 py-2.5 text-left align-top"

/** The hand-written part of the Dialog page: props, settings, and accessibility. */
export function DialogNotes() {
  return (
    <>
      <H2 id="props">Props</H2>
      <p>
        Only what threadcn adds or changes is listed here.{" "}
        <a href="https://base-ui.com/react/components/dialog" target="_blank" rel="noreferrer" className="font-semibold underline underline-offset-4">
          All other props come from Base UI Dialog
        </a>
        , like <C>open</C>, <C>defaultOpen</C>, <C>onOpenChange</C>, <C>modal</C> and <C>disablePointerDismissal</C> on <C>Dialog</C>, and{" "}
        <C>initialFocus</C> and <C>finalFocus</C> on <C>DialogContent</C>.
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
        Any button can close the dialog: wrap it like <C>&lt;DialogClose render=&#123;&lt;Button /&gt;&#125;&gt;Save&lt;/DialogClose&gt;</C>. A
        plain <C>Button</C> inside the dialog does not close it.
      </p>

      <H3 id="settings">What each setting changes</H3>
      <p>
        The dialog box reads a few settings (CSS variables). Set them with a Tailwind class on <C>DialogContent</C> and only that dialog changes.
        For example, <C>&lt;DialogContent className=&quot;[--_stitch:white]&quot;&gt;</C> sews it with white thread. Alert Dialog, Sheet and
        Drawer read the same settings.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[36rem] border-collapse text-[15px]">
          <thead>
            <tr className="font-(family-name:--tx-font-patch)">
              <th className={cell}>Setting</th>
              <th className={cell}>What it changes</th>
              <th className={cell}>Example class</th>
            </tr>
          </thead>
          <tbody>
            {settings.map(([name, what, example]) => (
              <tr key={name}>
                <td className={`${cell} whitespace-nowrap`}>
                  <C>{name}</C>
                </td>
                <td className={cell}>{what}</td>
                <td className={`${cell} font-mono text-[13px] whitespace-nowrap`}>{example}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <H2 id="accessibility">Accessibility</H2>
      <ul className="grid list-disc gap-2 pl-5">
        <li>
          <strong>Keyboard.</strong> Enter or Space on the trigger opens the dialog. Tab and Shift+Tab move between the buttons and fields inside
          it. Escape closes it.
        </li>
        <li>
          <strong>Focus.</strong> When it opens, focus moves to the first thing you can Tab to inside the dialog (opened by touch, the box itself
          gets focus, so the phone keyboard does not pop up). While it is open, Tab stays inside the dialog. When it closes, focus goes back to
          the trigger.
        </li>
        <li>
          <strong>Screen readers</strong> hear it as a dialog (Base UI gives it <C>role=&quot;dialog&quot;</C>). Its name is the{" "}
          <C>DialogTitle</C> and its description is the <C>DialogDescription</C>, so always add a title. The close X is read as &quot;Close&quot;,
          and the stitch is hidden from them.
        </li>
        <li>
          <strong>The page behind.</strong> While it is open, the page behind is dimmed, does not scroll, and can&apos;t be clicked. A click on the
          dimmed part closes the dialog. To stop that, add <C>disablePointerDismissal</C> to <C>Dialog</C>, or use Alert Dialog.
        </li>
        <li>
          <strong>Hiding the X.</strong> With <C>showCloseButton=&#123;false&#125;</C>, keep a <C>DialogClose</C> button inside. Base UI asks for
          one so people on touch screen readers can still get out.
        </li>
        <li>
          <strong>Reduced motion.</strong> If the visitor turns motion off in their system, the dialog and the dim layer appear and hide at once,
          without the fade and grow.
        </li>
        <li>
          <strong>High contrast mode.</strong> In Windows high contrast mode the stitch is hidden and the box gets a real 1px border, so you can
          still see its edge.
        </li>
      </ul>
    </>
  )
}
