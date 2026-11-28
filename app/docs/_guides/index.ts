import type { ComponentType } from "react"

import type { TocItem } from "../_ui/page-shell"
import ButtonAsLink from "./button/as-link"
import ButtonCustom from "./button/custom"
import ButtonDisabled from "./button/disabled"
import ButtonLoading from "./button/loading"
import { ButtonNotes } from "./button/notes"
import ButtonSizes from "./button/sizes"
import ButtonVariants from "./button/variants"
import ButtonWithIcon from "./button/with-icon"

// The hand-written part of a component page: examples (each one shown live
// and with its exact source, read from `file`) and extra notes such as props
// and accessibility. Components without an entry get the generated page only.

type Example = { slug: string; title: string; description: string; file: string; Component: ComponentType }
type Guide = { examples: Example[]; Notes?: ComponentType; toc?: TocItem[] }

const dir = "app/docs/_guides"

export const guides: Record<string, Guide> = {
  button: {
    examples: [
      {
        slug: "variants",
        title: "Variants",
        description:
          "Seven looks. The patch buttons (default, secondary, destructive, leather) sit up off the fabric and sink when pressed. The flat ones (outline, ghost, link) take the text color of whatever they sit on.",
        file: `${dir}/button/variants.tsx`,
        Component: ButtonVariants,
      },
      {
        slug: "sizes",
        title: "Sizes",
        description: "xs, sm, default and lg for buttons with text. icon makes a square button for a single icon.",
        file: `${dir}/button/sizes.tsx`,
        Component: ButtonSizes,
      },
      {
        slug: "with-icon",
        title: "With an icon",
        description: 'Put any SVG icon before the text and the button sizes it. For a round icon button, add shape="round" and an aria-label.',
        file: `${dir}/button/with-icon.tsx`,
        Component: ButtonWithIcon,
      },
      {
        slug: "disabled",
        title: "Disabled",
        description: "A disabled button fades to half strength and does not sink.",
        file: `${dir}/button/disabled.tsx`,
        Component: ButtonDisabled,
      },
      {
        slug: "loading",
        title: "Loading",
        description:
          "There is no loading prop. Put a Spinner inside and disable the button while the work runs. The Spinner only turns when the visitor allows motion.",
        file: `${dir}/button/loading.tsx`,
        Component: ButtonLoading,
      },
      {
        slug: "as-link",
        title: "As a link",
        description:
          "For a link that looks like a button, use buttonVariants() on the link and put a <Stitch /> inside it. buttonVariants also works in server components.",
        file: `${dir}/button/as-link.tsx`,
        Component: ButtonAsLink,
      },
      {
        slug: "custom",
        title: "Change the look of one button",
        description:
          "You don't need to edit button.tsx. Each button reads a few settings (CSS variables). Set them with a Tailwind class and only that button changes. The table below lists them.",
        file: `${dir}/button/custom.tsx`,
        Component: ButtonCustom,
      },
    ],
    Notes: ButtonNotes,
    toc: [
      { id: "props", title: "Props" },
      { id: "settings", title: "Settings", depth: 2 },
      { id: "accessibility", title: "Accessibility" },
    ],
  },
}
