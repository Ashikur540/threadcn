import ButtonAsLink from "./as-link"
import ButtonCustom from "./custom"
import ButtonDisabled from "./disabled"
import ButtonLoading from "./loading"
import { ButtonNotes } from "./notes"
import ButtonSizes from "./sizes"
import ButtonVariants from "./variants"
import ButtonWithIcon from "./with-icon"
import type { Guide } from "../types"

const dir = "app/docs/_guides/button"

export default {
  examples: [
    {
      slug: "variants",
      title: "Variants",
      description:
        "Seven looks. The patch buttons (`default`, `secondary`, `destructive`, `leather`) sit up off the fabric and sink when pressed. The flat ones (`outline`, `ghost`, `link`) take the text color of whatever they sit on.",
      file: `${dir}/variants.tsx`,
      Component: ButtonVariants,
    },
    {
      slug: "sizes",
      title: "Sizes",
      description: "`xs`, `sm`, `default` and `lg` for buttons with text. `icon` makes a square button for a single icon.",
      file: `${dir}/sizes.tsx`,
      Component: ButtonSizes,
    },
    {
      slug: "with-icon",
      title: "With an icon",
      description: 'Put any SVG icon before the text and the button sizes it. For a round icon button, add shape="round" and an aria-label.',
      file: `${dir}/with-icon.tsx`,
      Component: ButtonWithIcon,
    },
    {
      slug: "disabled",
      title: "Disabled",
      description: "A disabled button fades to half strength and does not sink.",
      file: `${dir}/disabled.tsx`,
      Component: ButtonDisabled,
    },
    {
      slug: "loading",
      title: "Loading",
      description:
        "There is no `loading` prop. Put a Spinner inside and disable the button while the work runs. Give the Spinner `aria-hidden=\"true\"`, since the button's words already say what is happening. The Spinner only turns when the visitor allows motion.",
      file: `${dir}/loading.tsx`,
      Component: ButtonLoading,
    },
    {
      slug: "as-link",
      title: "As a link",
      description:
        "For a link that looks like a button, use `buttonVariants()` on the link and put a `<Stitch />` inside it. `buttonVariants` also works in server components.",
      file: `${dir}/as-link.tsx`,
      Component: ButtonAsLink,
    },
    {
      slug: "custom",
      title: "Change the look of one button",
      description:
        "You don't need to edit `button.tsx`. Each button reads a few settings (CSS variables). Set them with a Tailwind class and only that button changes. The table below lists them.",
      file: `${dir}/custom.tsx`,
      Component: ButtonCustom,
    },
  ],
  Notes: ButtonNotes,
  toc: [
    { id: "props", title: "Props" },
    { id: "settings", title: "Settings", depth: 2 },
    { id: "accessibility", title: "Accessibility" },
  ],
} satisfies Guide
