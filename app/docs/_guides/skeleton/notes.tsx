import { C, H2 } from "../../_ui/page-shell"

const link = "font-semibold underline underline-offset-4"

/** The hand-written part of the Skeleton page: props and accessibility. */
export function SkeletonNotes() {
  return (
    <>
      <H2 id="props">Props</H2>
      <p>
        threadcn adds no props. Skeleton is a plain <C>&lt;div&gt;</C> (not a Base UI part), so{" "}
        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div" target="_blank" rel="noreferrer" className={link}>
          every normal div attribute works
        </a>
        . Give it its size and shape with Tailwind classes, like <C>h-4 w-40</C> for a line or <C>size-12 rounded-full</C> for an avatar. The
        corners are 10px round unless you change them.
      </p>
      <p>
        Its color comes from the text color around it (<C>currentColor</C>), with a faint dashed basting stitch just inside the edge. So it shows
        up on the denim, on a card and on a cream panel, with no extra class.
      </p>

      <H2 id="accessibility">Accessibility</H2>
      <ul className="grid list-disc gap-2 pl-5">
        <li>
          <strong>Screen readers find nothing in it.</strong> A Skeleton is an empty box. Add a short hidden text near it, like{" "}
          <C>&lt;span className=&quot;sr-only&quot;&gt;Loading your orders&lt;/span&gt;</C>, so people who can&apos;t see the page know it is
          loading. Both examples above do this.
        </li>
        <li>
          <strong>Keep the layout steady.</strong> Make each Skeleton about the size of the content that will replace it. Then nothing jumps when
          the real content arrives.
        </li>
        <li>
          <strong>Reduced motion.</strong> The gentle pulse is the Tailwind class <C>motion-safe:animate-pulse</C>. If the visitor turns motion
          off in their system, it never starts, and the Skeleton stays still.
        </li>
      </ul>
    </>
  )
}
