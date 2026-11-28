import StitchOwnBox from "./own-box"
import StitchPlainDiv from "./plain-div"
import { StitchNotes } from "./notes"
import StitchRound from "./round"
import StitchThreads from "./threads"
import type { Guide } from "../types"

const dir = "app/docs/_guides/stitch"

export default {
  examples: [
    {
      slug: "own-box",
      title: "A stitched box of your own",
      description:
        "The box sets all four settings: `--_stitch` (color), `--_thread` (width), `--_inset` (distance from the edge) and `--_radius` (the corner). Set them on the element that holds the `<Stitch />`, or on a parent of it: they pass down to children.",
      file: `${dir}/own-box.tsx`,
      Component: StitchOwnBox,
    },
    {
      slug: "threads",
      title: "Thread colors and widths",
      description:
        "`--_stitch` changes the color and `--_thread` the width. The first box uses the shared thread color and width, `--tx-thread` and `--tx-thread-width`, so it matches the rest of threadcn.",
      file: `${dir}/threads.tsx`,
      Component: StitchThreads,
    },
    {
      slug: "round",
      title: "Round",
      description: "For a circle, use `rounded-full` and set `--_radius` to half the size. This one is 128px wide, so `--_radius` is 64px.",
      file: `${dir}/round.tsx`,
      Component: StitchRound,
    },
    {
      slug: "plain-div",
      title: "On plain divs",
      description:
        "Any element works if it has the `relative` class. Here the settings sit once on the outer div, and each inner div picks them up through CSS inheritance.",
      file: `${dir}/plain-div.tsx`,
      Component: StitchPlainDiv,
    },
  ],
  Notes: StitchNotes,
  toc: [
    { id: "props", title: "Props" },
    { id: "how-it-works", title: "How it works" },
    { id: "settings", title: "Settings", depth: 2 },
    { id: "accessibility", title: "Accessibility" },
  ],
} satisfies Guide
