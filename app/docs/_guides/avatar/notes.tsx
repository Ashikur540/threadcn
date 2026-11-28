import { C, H2, H3 } from "../../_ui/page-shell"
import { BaseUiLink, type PropRow, PropsTable, type SettingRow, SettingsTable } from "../../_ui/notes-tables"

export const props: PropRow[] = [
  {
    part: "Avatar",
    name: "size",
    type: '"default" | "sm" | "lg"',
    def: '"default"',
    what: "How big the circle is: sm is 32px, default 40px, lg 56px. The initials and the badge dot grow and shrink with it.",
  },
  { part: "any part", name: "className", type: "string", def: "none", what: "Your own Tailwind classes. If they clash with a built-in style, yours win." },
]

export const settings: SettingRow[] = [
  ["--_stitch", "Thread color of the ring. It is a soft white over a photo, and brown thread on the cream when there is no photo.", "[--_stitch:white]"],
  ["--_thread", "How thick the ring thread is. The default is 1.2px.", "[--_thread:2px]"],
  ["--_inset", "How far the ring sits inside the edge. The default is 3px.", "[--_inset:5px]"],
  ["--_radius", "The corner the ring follows. The default, 999px, keeps it a circle; leave it unless you also change the shape.", "[--_radius:12px]"],
]

/** The hand-written part of the Avatar page: props, settings, and accessibility. */
export function AvatarNotes() {
  return (
    <>
      <H2 id="props">Props</H2>
      <p>
        Only what threadcn adds or changes is listed here.{" "}
        <BaseUiLink name="avatar">
          All other props come from Base UI Avatar
        </BaseUiLink>
        , like <C>src</C>, <C>alt</C> and <C>onLoadingStatusChange</C> on <C>AvatarImage</C>, and <C>delay</C> on <C>AvatarFallback</C> (wait a
        few milliseconds before showing the initials, so they don&apos;t flash while a fast photo loads).
      </p>
      <PropsTable rows={props} />
      <p>
        threadcn also adds three plain HTML parts. <C>AvatarBadge</C> is a small gold dot in the bottom right corner (put it inside{" "}
        <C>Avatar</C>). <C>AvatarGroup</C> lays avatars in a row that overlap, each with a ring in the fabric color so it looks cut out.{" "}
        <C>AvatarGroupCount</C> is the &quot;+3&quot; circle at the end. It is always 40px, the default size, so in a group of <C>sm</C> or{" "}
        <C>lg</C> avatars give it a matching size class, like <C>size-8</C> or <C>size-14</C>.
      </p>

      <H3 id="settings">What each setting changes</H3>
      <p>
        Each avatar reads a few settings (CSS variables) for its stitched ring. Set them with a Tailwind class on <C>Avatar</C> and only that
        avatar changes. For example, <C>&lt;Avatar className=&quot;[--_thread:2px]&quot;&gt;</C> sews a thicker ring.
      </p>
      <SettingsTable rows={settings} />

      <H2 id="accessibility">Accessibility</H2>
      <ul className="grid list-disc gap-2 pl-5">
        <li>
          <strong>Alt text.</strong> <C>AvatarImage</C> is a real <C>&lt;img&gt;</C>. Set <C>alt</C> to the person&apos;s name. If the name is
          already written right next to the photo, <C>alt=&quot;&quot;</C> stops screen readers from saying it twice.
        </li>
        <li>
          <strong>Fallback.</strong> Base UI shows <C>AvatarFallback</C> until the photo has loaded, and keeps it if the photo fails, so there is
          never an empty circle or a broken image icon. Screen readers read the fallback text as it is, so initials like &quot;MN&quot; are read
          as two letters.
        </li>
        <li>
          <strong>Initials alone</strong> don&apos;t say who someone is. Write the name next to the avatar, or show it in a Tooltip as the home page
          does.
        </li>
        <li>
          <strong>Badge and count.</strong> The badge dot is only a color, so put hidden words inside it, like{" "}
          <C>&lt;span className=&quot;sr-only&quot;&gt;Online&lt;/span&gt;</C>. The same works for the count: &quot;+3 more&quot; reads better
          than &quot;+3&quot;.
        </li>
        <li>
          <strong>The ring</strong> is hidden from screen readers. It is only a drawing.
        </li>
        <li>
          <strong>No motion.</strong> Avatar has no animation, so there is nothing to turn off for reduced motion.
        </li>
        <li>
          <strong>High contrast mode.</strong> In Windows high contrast mode the stitched ring is hidden, and each avatar and the count get a real
          1px border.
        </li>
      </ul>
    </>
  )
}
