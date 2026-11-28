import { C, H2, H3 } from "../../_ui/page-shell"

const props = [
  {
    part: "Drawer",
    name: "showSwipeHandle",
    type: "boolean",
    def: "false",
    what: "New in threadcn. Adds a short dashed thread to grab. It lies flat on top and bottom drawers and stands up on left and right ones.",
  },
  {
    part: "Drawer",
    name: "swipeDirection",
    type: '"down" | "up" | "left" | "right"',
    def: '"down"',
    what: "From Base UI. The way you swipe to close it, which also picks the edge it sits on: down sits at the bottom, up at the top, left and right on that side.",
  },
  { part: "any part", name: "className", type: "string", def: "none", what: "Your own Tailwind classes. If they clash with a built-in style, yours win." },
]

const settings = [
  ["--_stitch", "Thread color", "[--_stitch:white]"],
  ["--_thread", "How thick the thread is", "[--_thread:2.5px]"],
  ["--_inset", "How far the stitch sits inside the edge. The default is 8px.", "[--_inset:12px]"],
  ["--_radius", "How round the corners are. The stitch follows the same curve. The corners against the screen edge stay square.", "[--_radius:8px]"],
]

const cell = "border-b border-dashed border-(--tx-field-border)/50 px-3 py-2.5 text-left align-top"

/** The hand-written part of the Drawer page: Drawer vs Sheet, props, settings, and accessibility. */
export function DrawerNotes() {
  return (
    <>
      <H2 id="drawer-or-sheet">Drawer or Sheet?</H2>
      <p>Both slide a panel in from an edge of the screen. They close in different ways.</p>
      <ul className="grid list-disc gap-2 pl-5">
        <li>
          <strong>Drawer</strong> follows your finger. Drag it toward its edge (with a finger or a mouse) and it closes. With{" "}
          <C>snapPoints</C> it can also rest half open and be pulled taller. It sits flat against the screen edge. It is made for phones, like a
          bag or a menu that slides up from the bottom.
        </li>
        <li>
          <strong>Sheet</strong> just slides in and stays put. You close it with its X, with Escape, or by clicking outside. It floats a little off
          the edge and has a close X built in. It suits filters or settings on a big screen.
        </li>
      </ul>
      <p>
        A Drawer has no close X of its own, so add a <C>DrawerClose</C> button. Escape and a click on the dimmed page close it too.
      </p>

      <H2 id="props">Props</H2>
      <p>
        Only what threadcn adds, and the one Base UI prop every drawer needs, are listed here.{" "}
        <a href="https://base-ui.com/react/components/drawer" target="_blank" rel="noreferrer" className="font-semibold underline underline-offset-4">
          All other props come from Base UI Drawer
        </a>
        , like <C>open</C>, <C>onOpenChange</C>, <C>modal</C>, <C>snapPoints</C>, <C>snapPoint</C>, <C>defaultSnapPoint</C> and{" "}
        <C>onSnapPointChange</C> on <C>Drawer</C>.
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
        <strong>Snap points.</strong> Each value in <C>snapPoints</C> is a height the drawer can rest at. A number from 0 to 1 is a part of the
        screen height (0.5 is half), a bigger number is pixels, and a string like <C>&quot;30rem&quot;</C> or <C>&quot;148px&quot;</C> works too.
        It opens at the first one unless you set <C>defaultSnapPoint</C>. Snap points only work on drawers that move up and down, with{" "}
        <C>swipeDirection</C> set to <C>down</C> or <C>up</C>.
      </p>
      <p>
        <strong>Sizes.</strong> There is no <C>size</C> prop. Top and bottom drawers are as tall as their content, up to the screen height minus
        6rem. Left and right drawers are 75% of the screen wide, and 24rem from the <C>sm</C> breakpoint up.
      </p>
      <p>
        <strong>Not modal.</strong> With <C>modal=&#123;false&#125;</C> or <C>modal=&quot;trap-focus&quot;</C>, the dim layer is not drawn and the
        page behind stays usable.
      </p>

      <H3 id="settings">What each setting changes</H3>
      <p>
        The drawer reads a few settings (CSS variables). Set them with a Tailwind class on <C>DrawerContent</C> and only that drawer changes. For
        example, <C>&lt;DrawerContent className=&quot;[--_stitch:white]&quot;&gt;</C> sews it with white thread.
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
          <strong>Keyboard.</strong> Enter or Space on the trigger opens the drawer. Tab and Shift+Tab move between the buttons inside. Escape
          closes it.
        </li>
        <li>
          <strong>Swiping is not for everyone.</strong> Swiping needs a finger or a mouse, and snap points can&apos;t be changed from the keyboard.
          Always add a <C>DrawerClose</C> button, and if a snap point hides content, add a button that sets <C>snapPoint</C>, like the snap
          example does.
        </li>
        <li>
          <strong>Focus.</strong> When it opens, focus moves to the drawer itself, not to the first button. While a modal drawer is open, Tab stays
          inside it. When it closes, focus goes back to the trigger.
        </li>
        <li>
          <strong>Screen readers</strong> hear it as a dialog (Base UI gives it <C>role=&quot;dialog&quot;</C>). Its name is the{" "}
          <C>DrawerTitle</C> and its description is the <C>DrawerDescription</C>, so always add a title. The stitch and the swipe handle are
          hidden from them.
        </li>
        <li>
          <strong>The page behind</strong> is dimmed, does not scroll, and can&apos;t be clicked while a modal drawer is open (the default).
        </li>
        <li>
          <strong>Reduced motion.</strong> If the visitor turns motion off in their system, the drawer and the dim layer appear and hide at once,
          without sliding. It still follows your finger when you swipe it.
        </li>
        <li>
          <strong>High contrast mode.</strong> In Windows high contrast mode the stitch is hidden and the drawer gets a real 1px border.
        </li>
      </ul>
    </>
  )
}
