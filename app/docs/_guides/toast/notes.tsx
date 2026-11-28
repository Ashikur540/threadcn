import { C, H2, H3 } from "../../_ui/page-shell"
import { BaseUiLink, type PropRow, PropsTable, type SettingRow, SettingsTable } from "../../_ui/notes-tables"

export const props: PropRow[] = [
  {
    part: "Toaster",
    name: "toastManager",
    type: "ToastManager",
    def: "toast",
    what: "Which manager the Toaster listens to. New in threadcn: it is the shared toast you import, so toast.add() works from any file. Pass one from createToastManager() for a second, separate set of toasts.",
  },
  {
    part: "toast.add()",
    name: "type",
    type: '"success" | "info" | "warning" | "error" | "loading"',
    def: "none",
    what: "Picks the small icon at the start. Base UI takes any word here; threadcn draws an icon for these five. error also sews the toast in the error color. loading shows a Spinner and stays until you change it.",
  },
  {
    part: "ToastAction",
    name: "render",
    type: "ReactElement",
    def: '<Button variant="secondary" size="sm" />',
    what: "What the action button is drawn as. Changed in threadcn: a small dark denim Button.",
  },
  {
    part: "ToastClose",
    name: "render",
    type: "ReactElement",
    def: '<Button variant="ghost" size="icon-xs" shape="round" />',
    what: "What the close button is drawn as. Changed in threadcn: a small round ghost Button with an X inside, named \"Close toast\".",
  },
  { part: "any part", name: "className", type: "string", def: "none", what: "Your own Tailwind classes. If they clash with a built-in style, yours win." },
]

export const settings: SettingRow[] = [
  ["--_stitch", "Thread color. An error toast uses the error color instead.", "[--_stitch:white]"],
  ["--_thread", "How thick the thread is", "[--_thread:2.5px]"],
  ["--_inset", "How far the stitch sits inside the edge. The default is 6px.", "[--_inset:8px]"],
  ["--_radius", "How round the corners are. The stitch follows the same curve.", "[--_radius:8px]"],
]

/** The hand-written part of the Toast page: setup, props, settings, and accessibility. */
export function ToastNotes() {
  return (
    <>
      <H2 id="props">Props</H2>
      <p>
        Toasts take two steps. Put <C>&lt;Toaster /&gt;</C> once near the root of your app, for example in your root layout. Then call{" "}
        <C>toast.add(&#123; title, description, type &#125;)</C> from any click handler. Only mount one Toaster: two Toasters with the same
        manager each draw every toast, so you would see each one twice.
      </p>
      <p>
        Only what threadcn adds or changes is listed here.{" "}
        <BaseUiLink name="toast">
          All other options come from Base UI Toast
        </BaseUiLink>
        , like <C>timeout</C> (5000 ms by default, <C>0</C> keeps the toast open), <C>priority</C>, <C>actionProps</C> and <C>onClose</C>{" "}
        on <C>toast.add()</C>, the <C>limit</C> and <C>timeout</C> props on <C>Toaster</C>, and <C>toast.close()</C>, <C>toast.update()</C>{" "}
        and <C>toast.promise()</C>.
      </p>
      <PropsTable rows={props} />

      <H3 id="settings">What each setting changes</H3>
      <p>
        Each toast reads a few settings (CSS variables). The ready <C>&lt;Toaster /&gt;</C> draws the toasts for you, so it has no place for a
        class on each toast. To change all of them, add a rule to your global CSS, like{" "}
        <C>[data-slot=&quot;toast&quot;] &#123; --_stitch: white; &#125;</C>. If you build your own list from the <C>Toast</C> parts, you can
        set a Tailwind class on <C>Toast</C> instead.
      </p>
      <SettingsTable rows={settings} />

      <H2 id="accessibility">Accessibility</H2>
      <ul className="grid list-disc gap-2 pl-5">
        <li>
          <strong>Screen readers</strong> read each new toast out loud, without moving focus. The toast area is a live region (a part of the page
          that screen readers watch for changes) named &quot;Notifications&quot;, and it waits until the reader is done talking. For something
          urgent, like a failed payment, add <C>priority: &quot;high&quot;</C> and it is read out at once.
        </li>
        <li>
          <strong>Keyboard.</strong> F6 jumps to the toasts. Tab moves between them and their buttons. Escape closes the toast that has focus.
          Shift+Tab from the toast area takes you back to where you were.
        </li>
        <li>
          <strong>Time to read.</strong> A toast closes itself after 5 seconds. The timer stops while the mouse is over the toasts, while you are
          in them with F6, and while the browser window is in the background. Never put the only way to do something in a toast, because it goes
          away.
        </li>
        <li>
          <strong>Touch.</strong> Swipe a toast down or to the right to close it.
        </li>
        <li>
          <strong>Focus ring.</strong> A toast that has keyboard focus shows a gold ring. It is an outline, not a shadow, so a shadow class does not
          remove it.
        </li>
        <li>
          <strong>Reduced motion.</strong> If the visitor turns motion off in their system, toasts appear and leave in place, without sliding.
        </li>
        <li>
          <strong>High contrast mode.</strong> In Windows high contrast mode the stitch is hidden and each toast gets a real 1px border. An error
          toast gets a thicker double border.
        </li>
      </ul>
    </>
  )
}
