import { C, H2 } from "../../_ui/page-shell"
/** The hand-written part of the Pocket Card page: parts and accessibility. */
export function PocketCardNotes() {
  return (
    <>
      <H2 id="props">Props</H2>
      <p>
        Pocket Card is a threadcn extra, not part of shadcn/ui. Its parts are named like the Card parts and are plain HTML elements, so all their
        normal attributes work, like <C>className</C> and <C>id</C>. threadcn adds no props of its own.
      </p>
      <ul className="grid list-disc gap-2 pl-5">
        <li>
          <C>PocketCard</C> is a <C>&lt;div&gt;</C>. It draws the pocket shape, the two lines of stitching and the two copper rivets at the top
          for you.
        </li>
        <li>
          <C>PocketCardTag</C> is a <C>&lt;span&gt;</C>: the cream hang tag on the right edge, for a size or a short note. It is placed on the edge
          for you, wherever it sits inside the card.
        </li>
        <li>
          <C>PocketCardHeader</C> holds <C>PocketCardTitle</C> and <C>PocketCardAction</C> (the right side, like a price). All three are{" "}
          <C>&lt;div&gt;</C>.
        </li>
        <li>
          <C>PocketCardDescription</C> is a <C>&lt;p&gt;</C> in a softer color. <C>PocketCardContent</C> and <C>PocketCardFooter</C> are{" "}
          <C>&lt;div&gt;</C>; the footer lines up buttons in a row.
        </li>
      </ul>
      <p>
        The header and the description keep some space free on the right (<C>pr-14</C>) so the tag does not cover the text. Without a tag, add{" "}
        <C>pr-0</C> to give that space back, as in the no tag example. There are no settings to change: the colors come from the shared threadcn
        colors, like <C>--tx-surface</C>, <C>--tx-thread</C> and <C>--tx-rivet</C>.
      </p>

      <H2 id="accessibility">Accessibility</H2>
      <ul className="grid list-disc gap-2 pl-5">
        <li>
          <strong>No special role.</strong> The card is a plain box, so screen readers just read what is inside it. <C>PocketCardTitle</C> is not a
          heading. If the card needs one, put an <C>&lt;h3&gt;</C> (or the right level) inside it, as in the grid example.
        </li>
        <li>
          <strong>The rivets are hidden</strong> from screen readers (<C>aria-hidden</C>). The stitching is drawn with CSS, so it is not read
          either.
        </li>
        <li>
          <strong>The tag is read</strong> like normal text, at the point where it sits in your code. In these examples it comes first, so
          it is read before the name. If you want the name read first, move the tag after the header; it looks the same.
        </li>
        <li>
          <strong>Reduced motion.</strong> The card has no animation, so there is nothing to turn off.
        </li>
        <li>
          <strong>High contrast mode.</strong> In Windows high contrast mode the stitching and the rivets are hidden, and the card and the tag each
          get a 1px border, so they keep their shape.
        </li>
      </ul>
    </>
  )
}
