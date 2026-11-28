import { C, H2, H3 } from "../../_ui/page-shell"
import { BaseUiLink, type PropRow, PropsTable, type SettingRow, SettingsTable } from "../../_ui/notes-tables"

export const props: PropRow[] = [
  {
    part: "TooltipProvider",
    name: "delay",
    type: "number",
    def: "0",
    what: "Changed in threadcn. How long to wait, in milliseconds, before a tag opens on hover. Inside the provider it opens at once unless you set it. Without a provider, Base UI waits 600.",
  },
  { part: "TooltipContent", name: "side", type: '"top" | "right" | "bottom" | "left" | ...', def: '"top"', what: "Which side of the trigger the tag opens on." },
  { part: "TooltipContent", name: "sideOffset", type: "number", def: "8", what: "Gap in pixels between the trigger and the tag." },
  { part: "TooltipContent", name: "align", type: '"start" | "center" | "end"', def: '"center"', what: "How the tag lines up with the trigger." },
  { part: "TooltipContent", name: "alignOffset", type: "number", def: "0", what: "Moves the tag along that line, in pixels." },
  { part: "any part", name: "className", type: "string", def: "none", what: "Your own Tailwind classes. If they clash with a built-in style, yours win. The tag is at most 220px wide." },
]

export const settings: SettingRow[] = [
  ["--_stitch", "Thread color", "[--_stitch:white]"],
  ["--_thread", "How thick the thread is", "[--_thread:2px]"],
  ["--_inset", "How far the stitch sits inside the edge", "[--_inset:3px]"],
  ["--_radius", "How round the corners are. The stitch follows it.", "[--_radius:999px]"],
]

const link = "font-semibold underline underline-offset-4"

/** The hand-written part of the Tooltip page: props, settings, and accessibility. */
export function TooltipNotes() {
  return (
    <>
      <H2 id="props">Props</H2>
      <p>
        Only what threadcn adds or changes is listed here.{" "}
        <BaseUiLink name="tooltip">
          All other props come from Base UI Tooltip
        </BaseUiLink>
        , like <C>open</C>, <C>onOpenChange</C> and <C>disabled</C> on <C>Tooltip</C>, <C>delay</C> and <C>closeDelay</C> on{" "}
        <C>TooltipTrigger</C>, and <C>closeDelay</C> and <C>timeout</C> on <C>TooltipProvider</C>. A <C>delay</C> on one trigger beats the
        provider&apos;s.
      </p>
      <PropsTable rows={props} />
      <p>
        <C>TooltipProvider</C> is optional. A <C>Tooltip</C> works on its own. Use the provider when you have a row of them, like a toolbar.
      </p>

      <H3 id="settings">What each setting changes</H3>
      <p>
        The tag reads a few settings (CSS variables). Set them with a Tailwind class on <C>TooltipContent</C> and only that tag changes. For
        example, <C>&lt;TooltipContent className=&quot;[--_radius:999px]&quot;&gt;</C> makes a pill.
      </p>
      <SettingsTable rows={settings} />

      <H2 id="accessibility">Accessibility</H2>
      <ul className="grid list-disc gap-2 pl-5">
        <li>
          <strong>Mouse and keyboard.</strong> The tag opens when a mouse rests on the trigger, or when you Tab to it. Escape closes it, and so
          does a click on the trigger.
        </li>
        <li>
          <strong>Screen readers do not hear the tag.</strong> Base UI does not link the tag to the trigger, so its words are not read out. Give
          the trigger its own name, like <C>aria-label=&quot;Wash settings&quot;</C> on an icon button. The pointer and the stitch are hidden from
          them too.
        </li>
        <li>
          <strong>Touch screens.</strong> A tap does not open it. Hover only counts for a mouse, and focus only opens it when you reach the trigger
          with the keyboard. So phone users never see the tag.
        </li>
        <li>
          <strong>Never put the only copy of important info in a tooltip.</strong> Because of the two points above, many people will miss it.
          Use it for a short hint, like the name of an icon. Put prices, errors and rules on the page itself.
        </li>
        <li>
          <strong>Reduced motion.</strong> If the visitor turns motion off in their system, the tag appears and hides without fading or growing.
        </li>
        <li>
          <strong>High contrast mode.</strong> In Windows high contrast mode the stitch is hidden and the tag gets a real 1px border in the system
          text color.
        </li>
      </ul>
    </>
  )
}
