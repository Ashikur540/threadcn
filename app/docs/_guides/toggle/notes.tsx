import { C, H2, H3 } from "../../_ui/page-shell"

const props = [
  {
    name: "variant",
    type: '"default" | "outline"',
    def: '"default"',
    what: "default is plain fabric with no thread until it is on. outline shows a thread line all the time. Same values as shadcn/ui.",
  },
  { name: "size", type: '"default" | "sm" | "lg"', def: '"default"', what: "Height and padding. Same values as shadcn/ui." },
  { name: "className", type: "string", def: "none", what: "Your own Tailwind classes. If they clash with a built-in style, yours win." },
]

const settings = [
  ["--_stitch", "Thread color. A class sets it for on and off, so the default variant shows the thread too.", "[--_stitch:white]"],
  ["--_thread", "How thick the thread is", "[--_thread:2px]"],
  ["--_inset", "How far the stitch sits inside the edge", "[--_inset:6px]"],
  ["--_radius", "How round the corners are. The stitch follows it.", "[--_radius:999px]"],
]

const cell = "border-b border-dashed border-(--tx-field-border)/50 px-3 py-2.5 text-left align-top"

/** The hand-written part of the Toggle page: props, settings, and accessibility. */
export function ToggleNotes() {
  return (
    <>
      <H2 id="props">Props</H2>
      <p>
        Only what threadcn adds or changes is listed here.{" "}
        <a href="https://base-ui.com/react/components/toggle" target="_blank" rel="noreferrer" className="font-semibold underline underline-offset-4">
          All other props come from Base UI Toggle
        </a>
        , like <C>pressed</C>, <C>defaultPressed</C>, <C>onPressedChange</C> and <C>disabled</C>. <C>toggleVariants()</C> is also exported, if
        you need the same classes somewhere else.
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
        Each toggle reads a few settings (CSS variables). Set them with a Tailwind class and only that toggle changes. For example,{" "}
        <C>&lt;Toggle className=&quot;[--_radius:999px]&quot;&gt;</C> makes a pill. They work on a <C>ToggleGroupItem</C> too.
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
          <strong>Keyboard.</strong> It is a real <C>&lt;button&gt;</C> from Base UI. Tab moves to it, and Enter or Space turns it on or off.
        </li>
        <li>
          <strong>Screen readers</strong> hear it as a button that is pressed or not pressed (Base UI sets <C>aria-pressed</C>). The stitch is
          hidden from them.
        </li>
        <li>
          <strong>Icon-only toggles</strong> need an <C>aria-label</C>, like <C>aria-label=&quot;Save to wishlist&quot;</C>. The icon is hidden from screen readers with
          <C>aria-hidden=&quot;true&quot;</C>, as in the example.
        </li>
        <li>
          <strong>Focus ring.</strong> When you reach the toggle with the keyboard, a gold ring shows around it. It is an outline, not a shadow,
          so a shadow class does not remove it.
        </li>
        <li>
          <strong>Reduced motion.</strong> If the visitor turns motion off in their system, the color and thread change at once, with no fade.
        </li>
        <li>
          <strong>High contrast mode.</strong> In Windows high contrast mode every toggle gets a 1px border, and a toggle that is on gets a thick
          3px border, since the leather color is replaced there.
        </li>
      </ul>
    </>
  )
}
