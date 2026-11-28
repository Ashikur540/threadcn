import { C, H2, H3 } from "../../_ui/page-shell"
import { BaseUiLink, type PropRow, PropsTable, type SettingRow, SettingsTable } from "../../_ui/notes-tables"

export const props: PropRow[] = [
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

export const settings: SettingRow[] = [
  ["--_bg", "Patch color"],
  ["--_fg", "Text color"],
  ["--_edge", "Color of the edge you see under the patch"],
  ["--_lift", "How high the patch sits, and so how far it sinks when pressed"],
  ["--_shadow", "The soft shadow under the patch"],
  ["--_stitch", "Thread color"],
  ["--_inset", "How far the stitch sits inside the edge"],
  ["--_radius", "How round the corners are"],
]

/** The hand-written part of the Button page: props, changing one button, and accessibility. */
export function ButtonNotes() {
  return (
    <>
      <H2 id="props">Props</H2>
      <p>
        Only what threadcn adds or changes is listed here.{" "}
        <BaseUiLink name="button">
          All other props come from Base UI Button
        </BaseUiLink>
        , like <C>disabled</C>, <C>render</C> and <C>focusableWhenDisabled</C>.
      </p>
      <PropsTable rows={props} />

      <H3 id="settings">What each setting changes</H3>
      <p>
        The Change the look of one button example above uses these. Set them with a Tailwind class like <C>[--_bg:#5f7f43]</C>, and only that button
        changes. To change every button at once, set the shared colors instead (like <C>--tx-patch</C>) on <C>:root</C>.
      </p>
      <SettingsTable rows={settings} />

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
