import { C, H2, H3 } from "../../_ui/page-shell"

const props = [
  {
    name: "size",
    type: '"default" | "sm"',
    def: '"default"',
    what: "How big the strap and thumb are. Same values as shadcn/ui.",
  },
  { name: "className", type: "string", def: "none", what: "Your own Tailwind classes. If they clash with a built-in style, yours win." },
]

const settings = [
  ["--_travel", "How far the thumb slides when you turn it on. Change it together with the width.", "w-16 [--_travel:32px]"],
  ["--_roll", "How far the thumb turns while it slides. 0deg stops the roll.", "[--_roll:0deg]"],
  ["--_stitch", "Thread color, both on and off", "[--_stitch:white]"],
  ["--_thread", "How thick the thread is", "[--_thread:2px]"],
  ["--_inset", "How far the stitch sits inside the edge", "[--_inset:3px]"],
  ["--_radius", "The corner the stitch line follows. The default, 16px, is half the height, so the stitch hugs the round strap.", "[--_radius:12px]"],
]

const cell = "border-b border-dashed border-(--tx-field-border)/50 px-3 py-2.5 text-left align-top"

/** The hand-written part of the Switch page: props, settings, and accessibility. */
export function SwitchNotes() {
  return (
    <>
      <H2 id="props">Props</H2>
      <p>
        Only what threadcn adds or changes is listed here.{" "}
        <a href="https://base-ui.com/react/components/switch" target="_blank" rel="noreferrer" className="font-semibold underline underline-offset-4">
          All other props come from Base UI Switch
        </a>
        , like <C>checked</C>, <C>defaultChecked</C>, <C>onCheckedChange</C>, <C>disabled</C> and <C>name</C>.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[36rem] border-collapse text-[15px]">
          <thead>
            <tr className="font-(family-name:--tx-font-patch)">
              <th className={cell}>Prop</th>
              <th className={cell}>Type</th>
              <th className={cell}>Default</th>
              <th className={cell}>What it does</th>
            </tr>
          </thead>
          <tbody>
            {props.map((p) => (
              <tr key={p.name}>
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
        Each switch reads a few settings (CSS variables). Set them with a Tailwind class and only that switch changes. For example,{" "}
        <C>&lt;Switch className=&quot;[--_roll:0deg]&quot; /&gt;</C> slides the thumb without turning it.
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
          <strong>Keyboard.</strong> Tab moves to the switch. Space or Enter turns it on or off.
        </li>
        <li>
          <strong>Screen readers</strong> hear it as a switch that is on or off (Base UI gives it <C>role=&quot;switch&quot;</C> and{" "}
          <C>aria-checked</C>). The stitch is hidden from them.
        </li>
        <li>
          <strong>Give it a name.</strong> Put a <C>&lt;Label htmlFor=&quot;...&quot;&gt;</C> next to it and the same <C>id</C> on the switch,
          or add an <C>aria-label</C>. For extra help text, point <C>aria-describedby</C> at it, as in the description example.
        </li>
        <li>
          <strong>Focus ring.</strong> When you reach the switch with the keyboard, a gold ring shows around it. It is an outline, not a shadow, so
          a shadow class does not remove it.
        </li>
        <li>
          <strong>Errors.</strong> Add <C>aria-invalid</C> and an outline in the error color shows around it. Screen readers also hear that it is
          invalid.
        </li>
        <li>
          <strong>Reduced motion.</strong> If the visitor turns motion off in their system, the thumb jumps across without rolling or bouncing,
          and the strap changes color at once.
        </li>
        <li>
          <strong>High contrast mode.</strong> In Windows high contrast mode the strap gets a 1px border and the thumb is drawn in solid text
          color, so you can still see where it is.
        </li>
      </ul>
    </>
  )
}
