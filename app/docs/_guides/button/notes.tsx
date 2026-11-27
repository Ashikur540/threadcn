import { C, H2, H3 } from "../../_ui/page-shell"

const props = [
  {
    name: "variant",
    type: '"default" | "secondary" | "destructive" | "leather" | "outline" | "ghost" | "link"',
    def: '"default"',
    what: "The look. leather is new in threadcn; the rest match shadcn/ui.",
  },
  {
    name: "size",
    type: '"default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg"',
    def: '"default"',
    what: "Height and padding. The icon sizes make a square for a single icon.",
  },
  { name: "shape", type: '"default" | "round"', def: '"default"', what: "New in threadcn. round makes a circle; use it with an icon size." },
  { name: "className", type: "string", def: "none", what: "Your own Tailwind classes. If they clash with a built-in style, yours win." },
]

const settings = [
  ["--_bg", "Patch color"],
  ["--_fg", "Text color"],
  ["--_edge", "Color of the edge you see under the patch"],
  ["--_lift", "How high the patch sits, and so how far it sinks when pressed"],
  ["--_shadow", "The soft shadow under the patch"],
  ["--_stitch", "Thread color"],
  ["--_inset", "How far the stitch sits inside the edge"],
  ["--_radius", "How round the corners are"],
]

const cell = "border-b border-dashed border-(--tx-field-border)/50 px-3 py-2.5 text-left align-top"

/** The hand-written part of the Button page: props, changing one button, and accessibility. */
export function ButtonNotes() {
  return (
    <>
      <H2 id="props">Props</H2>
      <p>
        Only what threadcn adds or changes is listed here.{" "}
        <a href="https://base-ui.com/react/components/button" className="font-semibold underline underline-offset-4">
          All other props come from Base UI Button
        </a>
        , like <C>disabled</C>, <C>render</C> and <C>focusableWhenDisabled</C>.
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
        The Change the look of one button example above uses these. Set them with a Tailwind class like <C>[--_bg:#5f7f43]</C>, and only that button
        changes. To change every button at once, set the shared colors instead (like <C>--tx-patch</C>) on <C>:root</C>.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[28rem] border-collapse text-[15px]">
          <thead>
            <tr className="font-(family-name:--tx-font-patch)">
              <th className={cell}>Setting</th>
              <th className={cell}>What it changes</th>
            </tr>
          </thead>
          <tbody>
            {settings.map(([name, what]) => (
              <tr key={name}>
                <td className={cell}>
                  <C>{name}</C>
                </td>
                <td className={cell}>{what}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <H2 id="accessibility">Accessibility</H2>
      <ul className="grid list-disc gap-2 pl-5">
        <li>
          <strong>Keyboard.</strong> It is a real <C>&lt;button&gt;</C> from Base UI. Tab moves to it, and Enter or Space presses it.
        </li>
        <li>
          <strong>Focus ring.</strong> When you reach the button with the keyboard, a clear gold ring shows around it. It is an outline, not a shadow,
          so removing the shadow with a class does not remove it, and it still shows in high contrast mode.
        </li>
        <li>
          <strong>Reduced motion.</strong> If the visitor turns motion off in their system, the button does not sink when pressed. It changes color
          instead.
        </li>
        <li>
          <strong>High contrast mode.</strong> In Windows high contrast mode a real 1px border shows, so the button keeps its shape.
        </li>
        <li>
          <strong>Icon-only buttons</strong> need an <C>aria-label</C>, like <C>aria-label=&quot;Save to wishlist&quot;</C>. The stitch is hidden
          from screen readers.
        </li>
        <li>
          <strong>Contrast.</strong> Text on every button is easy to read: it passes the WCAG AA contrast check, also in the darker hover color. A test
          checks this.
        </li>
      </ul>
    </>
  )
}
