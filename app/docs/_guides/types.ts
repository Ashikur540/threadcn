import type { ComponentType } from "react"

import type { TocItem } from "../_ui/page-shell"

/** One example on a component page: shown live, with its exact source from `file`. */
export type Example = { slug: string; title: string; description: string; file: string; Component: ComponentType }

/** The hand-written part of a component page. Components without one get the generated page only. */
export type Guide = { examples: Example[]; Notes?: ComponentType; toc?: TocItem[] }
