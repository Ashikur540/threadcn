import { C, H2, H3 } from "../../_ui/page-shell"
import { BaseUiLink, type PropRow, PropsTable, type SettingRow, SettingsTable } from "../../_ui/notes-tables"

export const props: PropRow[] = [
  {
    part: "TabsList",
    name: "variant",
    type: '"default" | "line" | "leather"',
    def: '"default"',
    what: "The look of the tabs. default and line match shadcn/ui. leather is new in threadcn.",
  },
  {
    part: "Tabs",
    name: "orientation",
    type: '"horizontal" | "vertical"',
    def: '"horizontal"',
    what: "From Base UI. threadcn also uses it for the layout: horizontal puts the tabs on top of the panel, vertical puts them in a column on the left.",
  },
  { part: "Any part", name: "className", type: "string", def: "none", what: "Your own Tailwind classes. If they clash with a built-in style, yours win." },
]

export const settings: SettingRow[] = [
  [
    "--_stitch",
    "Thread color. On a tab the default is the thread color; on the panel it is the darker field border. The line variant makes it transparent on its tabs.",
    "[--_stitch:white]",
  ],
  ["--_thread", "How thick the thread is, like 2.5px.", "[--_thread:2.5px]"],
  ["--_inset", "How far the stitch sits inside the edge. 5px on a tab, 7px on the panel.", "[--_inset:4px]"],
  [
    "--_radius",
    "The corner the stitch follows. On the panel it also rounds the panel itself. On a tab it only moves the stitch, so change the tab corners with a rounded class too.",
    "[--_radius:6px]",
  ],
]

/** The hand-written part of the Tabs page: props, settings and accessibility. */
export function TabsNotes() {
  return (
    <>
      <H2 id="props">Props</H2>
      <p>
        The parts are <C>Tabs</C>, <C>TabsList</C>, <C>TabsTrigger</C> and <C>TabsContent</C>, the same as shadcn/ui. Only what threadcn adds or
        changes is listed here.{" "}
        <BaseUiLink name="tabs">
          All other props come from Base UI Tabs
        </BaseUiLink>
        , like <C>value</C>, <C>defaultValue</C> and <C>onValueChange</C> on <C>Tabs</C>, <C>activateOnFocus</C> and <C>loopFocus</C> on{" "}
        <C>TabsList</C>, <C>disabled</C> on <C>TabsTrigger</C>, and <C>keepMounted</C> on <C>TabsContent</C>. Each trigger and its panel share the
        same <C>value</C>.
      </p>
      <PropsTable rows={props} />

      <H3 id="settings">What each setting changes</H3>
      <p>
        Each tab and each panel draws its own stitch and sets these values itself. So put the class on the <C>TabsTrigger</C> or the{" "}
        <C>TabsContent</C> you want to change, not on <C>Tabs</C>. One thing to know: the open tab in a horizontal row hides its normal stitch and
        draws a three sided one that joins the panel, and that line does not read these settings.
      </p>
      <SettingsTable rows={settings} />

      <H2 id="accessibility">Accessibility</H2>
      <ul className="grid list-disc gap-2 pl-5">
        <li>
          <strong>Roles.</strong> Base UI gives the list <C>role=&quot;tablist&quot;</C>, each trigger <C>role=&quot;tab&quot;</C> with{" "}
          <C>aria-selected</C>, and each panel <C>role=&quot;tabpanel&quot;</C>. Tabs and panels are linked with <C>aria-controls</C> and{" "}
          <C>aria-labelledby</C>, so a screen reader knows which tab a panel belongs to. A vertical list also gets{" "}
          <C>aria-orientation=&quot;vertical&quot;</C>.
        </li>
        <li>
          <strong>Give the list a name</strong> with <C>aria-label</C>, like <C>aria-label=&quot;Model 08&quot;</C>, so people know what the tabs
          are about.
        </li>
        <li>
          <strong>Keyboard.</strong> Tab moves into the list once, not to every tab. The arrow keys move between tabs: Left and Right in a row, Up
          and Down in a column. Home and End jump to the first and last tab, and focus loops around at the ends. Moving with the arrows does not
          open a tab: press Enter or Space. Add <C>activateOnFocus</C> to <C>TabsList</C> if you want a tab to open as soon as it gets focus. From
          the list, Tab moves on to the open panel.
        </li>
        <li>
          <strong>Disabled tabs</strong> fade to half strength and can not be opened. The arrow keys still stop on them, so screen reader users
          know the tab is there.
        </li>
        <li>
          <strong>Hidden panels</strong> are not in the page at all until their tab opens. If a panel must stay in the page, for example for a
          form inside it, add <C>keepMounted</C>.
        </li>
        <li>
          <strong>Focus ring.</strong> A focused tab or panel shows a gold ring. It is an outline, not a shadow, so a shadow class does not remove
          it. The stitches are hidden from screen readers.
        </li>
        <li>
          <strong>Reduced motion.</strong> Tabs have no animation, so there is nothing to turn off.
        </li>
        <li>
          <strong>High contrast mode.</strong> In Windows high contrast mode every tab and the panel get a 1px border, and the open tab a 3px one,
          so you can still tell which tab is open.
        </li>
      </ul>
    </>
  )
}
