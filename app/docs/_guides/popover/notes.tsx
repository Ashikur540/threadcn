import { C, H2, H3 } from "../../_ui/page-shell"
import { BaseUiLink, type PropRow, PropsTable, type SettingRow, SettingsTable } from "../../_ui/notes-tables"

export const props: PropRow[] = [
  { part: "PopoverContent", name: "side", type: '"top" | "right" | "bottom" | "left" | ...', def: '"bottom"', what: "Which side of the button the pocket opens on." },
  { part: "PopoverContent", name: "sideOffset", type: "number", def: "6", what: "Gap in pixels between the button and the pocket." },
  { part: "PopoverContent", name: "align", type: '"start" | "center" | "end"', def: '"center"', what: "How the pocket lines up with the button." },
  { part: "PopoverContent", name: "alignOffset", type: "number", def: "0", what: "Moves the pocket along that line, in pixels." },
  { part: "PopoverHeader", name: "(part)", type: "div", def: "none", what: "New in threadcn. A plain div that stacks the title and the text with a small gap." },
  { part: "any part", name: "className", type: "string", def: "none", what: "Your own Tailwind classes. If they clash with a built-in style, yours win. The width is w-72; change it with a class like w-80." },
]

export const settings: SettingRow[] = [
  ["--_stitch", "Thread color", "[--_stitch:white]"],
  ["--_thread", "How thick the thread is", "[--_thread:2px]"],
  ["--_inset", "How far the stitch sits inside the edge", "[--_inset:10px]"],
  ["--_radius", "How round the corners are. The stitch follows it.", "[--_radius:8px]"],
]

/** The hand-written part of the Popover page: props, settings, and accessibility. */
export function PopoverNotes() {
  return (
    <>
      <H2 id="props">Props</H2>
      <p>
        Only what threadcn adds or changes is listed here.{" "}
        <BaseUiLink name="popover">
          All other props come from Base UI Popover
        </BaseUiLink>
        , like <C>open</C>, <C>defaultOpen</C>, <C>onOpenChange</C> and <C>modal</C> on <C>Popover</C>, <C>openOnHover</C> on{" "}
        <C>PopoverTrigger</C>, and <C>initialFocus</C> and <C>finalFocus</C> on <C>PopoverContent</C>.
      </p>
      <PropsTable rows={props} />
      <p>
        <C>PopoverContent</C> passes only these four placement props to Base UI&apos;s positioner (the part that places the pocket). Others, like{" "}
        <C>collisionPadding</C>, are not passed on. To use them, edit <C>popover.tsx</C>.
      </p>

      <H3 id="settings">What each setting changes</H3>
      <p>
        The pocket reads a few settings (CSS variables). Set them with a Tailwind class on <C>PopoverContent</C> and only that pocket changes. For
        example, <C>&lt;PopoverContent className=&quot;[--_stitch:white]&quot;&gt;</C> sews it with white thread. The same settings work on Hover Card,
        Dropdown Menu and Context Menu, since they share one pocket style.
      </p>
      <SettingsTable rows={settings} />

      <H2 id="accessibility">Accessibility</H2>
      <ul className="grid list-disc gap-2 pl-5">
        <li>
          <strong>Keyboard.</strong> The trigger is a real <C>&lt;button&gt;</C>. Tab moves to it, and Enter or Space opens the pocket. Escape
          closes it. A click outside closes it too.
        </li>
        <li>
          <strong>Focus.</strong> When it opens, focus moves to the first thing you can Tab to inside, like the field in the form example. If it
          was opened by touch, focus goes to the pocket itself, so the phone keyboard does not pop up. When it closes, focus goes back to the
          button.
        </li>
        <li>
          <strong>Screen readers</strong> hear the button say it opens a dialog, and whether it is open (Base UI sets <C>aria-haspopup</C> and{" "}
          <C>aria-expanded</C>). The pocket is a <C>dialog</C>, named by <C>PopoverTitle</C> and described by <C>PopoverDescription</C>. The
          stitch is hidden from them.
        </li>
        <li>
          <strong>Not modal by default.</strong> People can still scroll and click the rest of the page while it is open. Set <C>modal</C> on{" "}
          <C>Popover</C> to change that. Base UI explains the options.
        </li>
        <li>
          <strong>Reduced motion.</strong> If the visitor turns motion off in their system, the pocket appears and hides without fading or
          growing.
        </li>
        <li>
          <strong>High contrast mode.</strong> In Windows high contrast mode the stitch is hidden and the pocket gets a real 1px border in the
          system text color.
        </li>
      </ul>
    </>
  )
}
