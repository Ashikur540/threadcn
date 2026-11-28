import { C, H2, H3 } from "../../_ui/page-shell"
import { type PropRow, PropsTable, type SettingRow, SettingsTable } from "../../_ui/notes-tables"

const link = "font-semibold underline underline-offset-4"

export const props: PropRow[] = [
  {
    name: "variant",
    type: '"default" | "secondary" | "destructive" | "outline" | "ghost" | "link"',
    def: '"default"',
    what: "The look. Same values as shadcn/ui. default, secondary and destructive are woven labels. outline, ghost and link have no fill and take the text color of whatever they sit on.",
  },
  {
    name: "render",
    type: "ReactElement | function",
    def: "none",
    what: "Draw the badge as another element, like <a href=\"...\" /> for a link. The badge classes and the stitch go onto it.",
  },
  { name: "className", type: "string", def: "none", what: "Your own Tailwind classes. If they clash with a built-in style, yours win." },
]

export const settings: SettingRow[] = [
  ["--_bg", "Label color. On default and destructive badges the stitch is a pale tint of it, so the stitch follows when you change it.", "[--_bg:#5f7f43]"],
  ["--_fg", "Text color", "[--_fg:#f3f7ea]"],
  ["--_stitch", "Thread color", "[--_stitch:white]"],
  ["--_thread", "How thick the thread is. The default is 1.2px.", "[--_thread:2px]"],
  ["--_inset", "How far the stitch sits inside the edge. The default is 3px.", "[--_inset:2px]"],
  [
    "--_radius",
    "The corner the stitch line follows. The badge itself is fully round (rounded-full), so change both together.",
    "rounded-md [--_radius:6px]",
  ],
]

/** The hand-written part of the Badge page: props, settings, and accessibility. */
export function BadgeNotes() {
  return (
    <>
      <H2 id="props">Props</H2>
      <p>
        Badge is a <C>&lt;span&gt;</C>, so every normal span attribute works on it. It is not a Base UI component, but it uses Base UI&apos;s{" "}
        <a href="https://base-ui.com/react/utils/use-render" target="_blank" rel="noreferrer" className={link}>
          useRender
        </a>{" "}
        for the <C>render</C> prop, the same way shadcn/ui does. <C>badgeVariants()</C> is exported too, for the badge classes on your own
        element.
      </p>
      <PropsTable rows={props} />

      <H3 id="settings">What each setting changes</H3>
      <p>
        Each badge reads a few settings (CSS variables). Set them with a Tailwind class and only that badge changes. For example,{" "}
        <C>&lt;Badge className=&quot;[--_bg:#5f7f43] [--_fg:#f3f7ea]&quot;&gt;</C> makes a moss green label.
      </p>
      <SettingsTable rows={settings} />

      <H2 id="accessibility">Accessibility</H2>
      <ul className="grid list-disc gap-2 pl-5">
        <li>
          <strong>Screen readers</strong> read the badge text like any other text. It has no role of its own. The stitch is hidden from them.
        </li>
        <li>
          <strong>Counts need words.</strong> A lone &quot;3&quot; does not say what it counts. Add hidden words, like{" "}
          <C>3&lt;span className=&quot;sr-only&quot;&gt; items&lt;/span&gt;</C>, as in the count example.
        </li>
        <li>
          <strong>Icons</strong> are decoration. Add <C>aria-hidden=&quot;true&quot;</C> to your SVG and let the text say it.
        </li>
        <li>
          <strong>As a link</strong> it is a real <C>&lt;a&gt;</C>. Tab moves to it and Enter opens it. When you reach it with the keyboard, a gold
          ring shows around it. It is an outline, not a shadow, so a shadow class does not remove it. A plain badge (a span) can&apos;t be
          focused.
        </li>
        <li>
          <strong>Color is not the only sign.</strong> A red badge alone does not tell everyone it means &quot;Sold out&quot;. Write it in the text.
        </li>
        <li>
          <strong>High contrast mode.</strong> In Windows high contrast mode the stitch is hidden and every badge gets a real 1px border.
        </li>
      </ul>
    </>
  )
}
