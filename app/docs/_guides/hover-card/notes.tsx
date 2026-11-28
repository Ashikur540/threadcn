import { C, H2, H3 } from "../../_ui/page-shell"

const props = [
  { part: "HoverCardContent", name: "side", type: '"top" | "right" | "bottom" | "left" | ...', def: '"bottom"', what: "Which side of the link the card opens on." },
  { part: "HoverCardContent", name: "sideOffset", type: "number", def: "6", what: "Gap in pixels between the link and the card." },
  { part: "HoverCardContent", name: "align", type: '"start" | "center" | "end"', def: '"center"', what: "How the card lines up with the link." },
  { part: "HoverCardContent", name: "alignOffset", type: "number", def: "4", what: "Moves the card along that line, in pixels." },
  { part: "any part", name: "className", type: "string", def: "none", what: "Your own Tailwind classes. If they clash with a built-in style, yours win. The width is w-64; change it with a class like w-80." },
]

const settings = [
  ["--_stitch", "Thread color", "[--_stitch:white]"],
  ["--_thread", "How thick the thread is", "[--_thread:2px]"],
  ["--_inset", "How far the stitch sits inside the edge", "[--_inset:10px]"],
  ["--_radius", "How round the corners are. The stitch follows it.", "[--_radius:8px]"],
]

const cell = "border-b border-dashed border-(--tx-field-border)/50 px-3 py-2.5 text-left align-top"
const link = "font-semibold underline underline-offset-4"

/** The hand-written part of the Hover Card page: props, settings, and accessibility. */
export function HoverCardNotes() {
  return (
    <>
      <H2 id="props">Props</H2>
      <p>
        Only what threadcn adds or changes is listed here. Base UI calls this part Preview Card.{" "}
        <a href="https://base-ui.com/react/components/preview-card" target="_blank" rel="noreferrer" className={link}>
          All other props come from Base UI Preview Card
        </a>
        , like <C>open</C>, <C>defaultOpen</C> and <C>onOpenChange</C> on <C>HoverCard</C>, and <C>href</C>, <C>delay</C> and{" "}
        <C>closeDelay</C> on <C>HoverCardTrigger</C>.
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
        <C>delay</C> (default 600) and <C>closeDelay</C> (default 300) are Base UI&apos;s. threadcn does not change them.
      </p>

      <H3 id="settings">What each setting changes</H3>
      <p>
        The card is the same pocket as Popover and reads the same settings (CSS variables). Set them with a Tailwind class on{" "}
        <C>HoverCardContent</C> and only that card changes.
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
          <strong>It is a link first.</strong> <C>HoverCardTrigger</C> draws a real <C>&lt;a&gt;</C>. Tab reaches it and Enter follows it, like
          any link. The card is only a preview of where the link goes.
        </li>
        <li>
          <strong>Mouse and keyboard.</strong> The card opens when a mouse rests on the link, or when you Tab to it, after the same wait. Escape
          closes it.
        </li>
        <li>
          <strong>Touch screens.</strong> A tap does not open the card. Hover only counts for a mouse, and focus only opens it when you reach the
          link with the keyboard. A tap just follows the link.
        </li>
        <li>
          <strong>Screen readers</strong> hear the link, not the card. Base UI does not give the card a role or link it to the link. So keep
          anything people need, like a button, on the page the link opens, not only in the card.
        </li>
        <li>
          <strong>Reduced motion.</strong> If the visitor turns motion off in their system, the card appears and hides without fading or growing.
        </li>
        <li>
          <strong>High contrast mode.</strong> In Windows high contrast mode the stitch is hidden and the card gets a real 1px border in the
          system text color.
        </li>
      </ul>
    </>
  )
}
