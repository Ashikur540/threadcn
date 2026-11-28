import { C, H2, H3 } from "../../_ui/page-shell"

const props = [
  { part: "ContextMenuContent", name: "side", type: '"top" | "right" | "bottom" | "left" | ...', def: '"right"', what: "Which side of the pointer the menu opens on." },
  { part: "ContextMenuContent", name: "sideOffset", type: "number", def: "0", what: "Gap in pixels between the pointer and the menu." },
  { part: "ContextMenuContent", name: "align", type: '"start" | "center" | "end"', def: '"start"', what: "How the menu lines up with the pointer. start puts its top at the pointer." },
  { part: "ContextMenuContent", name: "alignOffset", type: "number", def: "4", what: "Moves the menu along that line, in pixels." },
  { part: "ContextMenuSubContent", name: "side / sideOffset", type: "same as above", def: '"right" / 2', what: "The submenu opens to the right of its item, 2px away." },
  { part: "ContextMenuSubContent", name: "align / alignOffset", type: "same as above", def: '"start" / -6', what: "It lines up with the top of its item. The -6 makes the first item sit level with the trigger item." },
  {
    part: "ContextMenuItem",
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
  { part: "ContextMenuShortcut", name: "(part)", type: "span", def: "none", what: "A plain span for a key hint at the end of an item. It only shows text; it does not listen for the keys." },
  { part: "ContextMenuTrigger", name: "className", type: "string", def: "none", what: "The area people right-click. threadcn adds select-none, so a long press does not select its text. Give it a size and a border so people can see it." },
  { part: "any part", name: "className", type: "string", def: "none", what: "Your own Tailwind classes. If they clash with a built-in style, yours win." },
]

const settings = [
  ["--_mark", "Color of the tick on a checked item and the dot on a picked radio item. A highlighted item uses its text color instead.", "[--_mark:var(--tx-leather)]"],
  ["--_divider", "The dashed line drawn by ContextMenuSeparator. It is a background image, so a gradient works.", "[--_divider:linear-gradient(white,white)]"],
  ["--_stitch", "Thread color of the pocket's outline", "[--_stitch:white]"],
  ["--_thread", "How thick that thread is", "[--_thread:2px]"],
  ["--_inset", "How far the stitch sits inside the edge", "[--_inset:4px]"],
  ["--_radius", "How round the pocket's corners are. The stitch follows it.", "[--_radius:8px]"],
]

const cell = "border-b border-dashed border-(--tx-field-border)/50 px-3 py-2.5 text-left align-top"
const link = "font-semibold underline underline-offset-4"

/** The hand-written part of the Context Menu page: props, settings, and accessibility. */
export function ContextMenuNotes() {
  return (
    <>
      <H2 id="props">Props</H2>
      <p>
        Only what threadcn adds or changes is listed here.{" "}
        <a href="https://base-ui.com/react/components/context-menu" target="_blank" rel="noreferrer" className={link}>
          All other props come from Base UI Context Menu
        </a>
        , like <C>open</C>, <C>onOpenChange</C> and <C>disabled</C> on <C>ContextMenu</C>, <C>onClick</C>, <C>disabled</C> and{" "}
        <C>closeOnClick</C> on items, <C>checked</C> and <C>onCheckedChange</C> on checkbox items, and <C>value</C> and <C>onValueChange</C> on{" "}
        <C>ContextMenuRadioGroup</C>. The parts inside the menu are the same as in Dropdown Menu.
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

      <H3 id="settings">What each setting changes</H3>
      <p>
        The menu reads a few settings (CSS variables). Set them with a Tailwind class on <C>ContextMenuContent</C> and only that menu changes. Each
        item sets its own stitch for the highlight, so the last four change the pocket&apos;s outline only.
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
          <strong>Opening.</strong> A right-click opens it at the pointer. On a touch screen, press and hold for half a second. Moving your finger more than 10px
          before then cancels it.
        </li>
        <li>
          <strong>Keyboard users cannot Tab to the area.</strong> <C>ContextMenuTrigger</C> draws a plain <C>&lt;div&gt;</C> with no tab stop.
          Many people never think to right-click, too. So always put the same actions somewhere else as well, like a Dropdown Menu button.
        </li>
        <li>
          <strong>Inside the open menu</strong> the keys are the same as Dropdown Menu. Up and Down move and loop round, Home and End jump to the
          ends, typing jumps to an item, Enter or Space picks it, Right opens a submenu, Left closes it, and Escape closes the menu.
        </li>
        <li>
          <strong>Disabled items</strong> can still be reached with the arrow keys, so screen reader users know they exist, but they cannot be
          picked.
        </li>
        <li>
          <strong>Screen readers</strong> hear a <C>menu</C> with <C>menuitem</C>, <C>menuitemcheckbox</C> and <C>menuitemradio</C> items, and
          whether each checkbox or radio item is checked. A group with a label is read as a named group. The tick, the dot and the stitch are drawn
          in CSS, so nothing extra is read out.
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
