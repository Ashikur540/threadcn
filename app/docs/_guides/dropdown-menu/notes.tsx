import { C, H2, H3 } from "../../_ui/page-shell"

const props = [
  { part: "DropdownMenuContent", name: "side", type: '"top" | "right" | "bottom" | "left" | ...', def: '"bottom"', what: "Which side of the button the menu opens on." },
  { part: "DropdownMenuContent", name: "sideOffset", type: "number", def: "6", what: "Gap in pixels between the button and the menu." },
  { part: "DropdownMenuContent", name: "align", type: '"start" | "center" | "end"', def: '"start"', what: "How the menu lines up with the button. start lines up the left edges (in left-to-right text)." },
  { part: "DropdownMenuContent", name: "alignOffset", type: "number", def: "0", what: "Moves the menu along that line, in pixels." },
  { part: "DropdownMenuSubContent", name: "side / sideOffset", type: "same as above", def: '"right" / 2', what: "The submenu opens to the right of its item, 2px away." },
  { part: "DropdownMenuSubContent", name: "align / alignOffset", type: "same as above", def: '"start" / -6', what: "It lines up with the top of its item. The -6 makes the first item sit level with the trigger item." },
  {
    part: "DropdownMenuItem",
    name: "variant",
    type: '"default" | "destructive"',
    def: '"default"',
    what: "New in threadcn. destructive makes the text rust and the highlight a rust patch, for actions you cannot undo.",
  },
  {
    part: "Item, SubTrigger, Label",
    name: "inset",
    type: "boolean",
    def: "false",
    what: "New in threadcn. Pushes the text in so it lines up with checkbox and radio items, which always leave that room.",
  },
  { part: "DropdownMenuShortcut", name: "(part)", type: "span", def: "none", what: "A plain span for a key hint at the end of an item. It only shows text; it does not listen for the keys." },
  { part: "any part", name: "className", type: "string", def: "none", what: "Your own Tailwind classes. If they clash with a built-in style, yours win." },
]

const settings = [
  ["--_mark", "Color of the tick on a checked item and the dot on a picked radio item. A highlighted item uses its text color instead.", "[--_mark:var(--tx-leather)]"],
  ["--_divider", "The dashed line drawn by DropdownMenuSeparator. It is a background image, so a gradient works.", "[--_divider:linear-gradient(white,white)]"],
  ["--_stitch", "Thread color of the pocket's outline", "[--_stitch:white]"],
  ["--_thread", "How thick that thread is", "[--_thread:2px]"],
  ["--_inset", "How far the stitch sits inside the edge", "[--_inset:4px]"],
  ["--_radius", "How round the pocket's corners are. The stitch follows it.", "[--_radius:8px]"],
]

const cell = "border-b border-dashed border-(--tx-field-border)/50 px-3 py-2.5 text-left align-top"
const link = "font-semibold underline underline-offset-4"

/** The hand-written part of the Dropdown Menu page: props, settings, and accessibility. */
export function DropdownMenuNotes() {
  return (
    <>
      <H2 id="props">Props</H2>
      <p>
        Only what threadcn adds or changes is listed here. Base UI calls this part Menu.{" "}
        <a href="https://base-ui.com/react/components/menu" target="_blank" rel="noreferrer" className={link}>
          All other props come from Base UI Menu
        </a>
        , like <C>open</C>, <C>onOpenChange</C> and <C>modal</C> on <C>DropdownMenu</C>, <C>openOnHover</C> on <C>DropdownMenuTrigger</C>,{" "}
        <C>onClick</C>, <C>disabled</C> and <C>closeOnClick</C> on items, <C>checked</C> and <C>onCheckedChange</C> on checkbox items, and{" "}
        <C>value</C> and <C>onValueChange</C> on <C>DropdownMenuRadioGroup</C>.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[44rem] border-collapse text-[15px]">
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
        A plain item closes the menu when picked. Checkbox and radio items keep it open. Change either with <C>closeOnClick</C>.
      </p>

      <H3 id="settings">What each setting changes</H3>
      <p>
        The menu reads a few settings (CSS variables). Set them with a Tailwind class on <C>DropdownMenuContent</C> and only that menu changes. For
        example, <C>&lt;DropdownMenuContent className=&quot;[--_mark:var(--tx-leather)]&quot;&gt;</C> sews the ticks in leather brown. Each item
        sets its own stitch for the highlight, so the last four change the pocket&apos;s outline only.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[40rem] border-collapse text-[15px]">
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
                <td className={cell}>
                  <C>{name}</C>
                </td>
                <td className={cell}>{what}</td>
                <td className={`${cell} font-mono text-[13px]`}>{example}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <H2 id="accessibility">Accessibility</H2>
      <ul className="grid list-disc gap-2 pl-5">
        <li>
          <strong>Opening.</strong> The trigger is a real <C>&lt;button&gt;</C>. Tab moves to it. Enter, Space or the Down arrow opens the menu
          and highlights the first item.
        </li>
        <li>
          <strong>Moving around.</strong> Up and Down move through the items, and loop round at the ends. Home and End jump to the first and last
          item. Type the first letters of an item to jump to it. Enter or Space picks the highlighted item.
        </li>
        <li>
          <strong>Submenus.</strong> On a submenu item, the Right arrow (or Enter) opens the submenu and moves into it. The Left arrow closes it and
          goes back. In right-to-left pages these two arrows swap.
        </li>
        <li>
          <strong>Closing.</strong> Escape closes the menu, and so does a click outside. Focus goes back to the button.
        </li>
        <li>
          <strong>Disabled items</strong> can still be reached with the arrow keys, so screen reader users know they exist, but they cannot be
          picked. They are read as disabled.
        </li>
        <li>
          <strong>Screen readers</strong> hear the button say it opens a menu. The list is a <C>menu</C>, plain items are <C>menuitem</C>,
          checkbox items are <C>menuitemcheckbox</C> and radio items are <C>menuitemradio</C>, and both say if they are checked. A group with a
          label is read as a named group. The tick, the dot and the stitch are drawn in CSS, so nothing extra is read out.
        </li>
        <li>
          <strong>Modal by default.</strong> While the menu is open, the page behind cannot be scrolled or clicked. Set <C>modal={"{false}"}</C>{" "}
          on <C>DropdownMenu</C> to allow it.
        </li>
        <li>
          <strong>Reduced motion.</strong> If the visitor turns motion off in their system, the menu appears and hides without fading or
          growing.
        </li>
        <li>
          <strong>High contrast mode.</strong> In Windows high contrast mode the menu gets a real 1px border, the highlighted item uses the
          system highlight colors, and the tick and dot use the system text color.
        </li>
      </ul>
    </>
  )
}
