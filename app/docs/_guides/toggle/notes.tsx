import { C, H2, H3 } from "../../_ui/page-shell"
import { BaseUiLink, type PropRow, PropsTable, type SettingRow, SettingsTable } from "../../_ui/notes-tables"

export const props: PropRow[] = [
  {
    name: "variant",
    type: '"default" | "outline"',
    def: '"default"',
    what: "default is plain fabric with no thread until it is on. outline shows a thread line all the time. Same values as shadcn/ui.",
  },
  { name: "size", type: '"default" | "sm" | "lg"', def: '"default"', what: "Height and padding. Same values as shadcn/ui." },
  { name: "className", type: "string", def: "none", what: "Your own Tailwind classes. If they clash with a built-in style, yours win." },
]

export const settings: SettingRow[] = [
  ["--_stitch", "Thread color. A class sets it for on and off, so the default variant shows the thread too.", "[--_stitch:white]"],
  ["--_thread", "How thick the thread is", "[--_thread:2px]"],
  ["--_inset", "How far the stitch sits inside the edge", "[--_inset:6px]"],
  ["--_radius", "How round the corners are. The stitch follows it.", "[--_radius:999px]"],
]

/** The hand-written part of the Toggle page: props, settings, and accessibility. */
export function ToggleNotes() {
  return (
    <>
      <H2 id="props">Props</H2>
      <p>
        Only what threadcn adds or changes is listed here.{" "}
        <BaseUiLink name="toggle">
          All other props come from Base UI Toggle
        </BaseUiLink>
        , like <C>pressed</C>, <C>defaultPressed</C>, <C>onPressedChange</C> and <C>disabled</C>. <C>toggleVariants()</C> is also exported, if
        you need the same classes somewhere else.
      </p>
      <PropsTable rows={props} />

      <H3 id="settings">What each setting changes</H3>
      <p>
        Each toggle reads a few settings (CSS variables). Set them with a Tailwind class and only that toggle changes. For example,{" "}
        <C>&lt;Toggle className=&quot;[--_radius:999px]&quot;&gt;</C> makes a pill. They work on a <C>ToggleGroupItem</C> too.
      </p>
      <SettingsTable rows={settings} />

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
