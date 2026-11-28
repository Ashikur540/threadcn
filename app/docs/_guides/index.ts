// The hand-written part of each component page lives in its own folder:
// <name>/entry.ts (examples, notes) plus the example files it lists.
// Components without a folder here get the generated page only.
import buttonGuide from "./button/entry"
import inputGuide from "./input/entry"
import textareaGuide from "./textarea/entry"
import labelGuide from "./label/entry"
import checkboxGuide from "./checkbox/entry"
import radioGroupGuide from "./radio-group/entry"
import switchGuide from "./switch/entry"
import selectGuide from "./select/entry"
import sliderGuide from "./slider/entry"
import toggleGuide from "./toggle/entry"
import toggleGroupGuide from "./toggle-group/entry"
import dialogGuide from "./dialog/entry"
import alertDialogGuide from "./alert-dialog/entry"
import sheetGuide from "./sheet/entry"
import drawerGuide from "./drawer/entry"
import popoverGuide from "./popover/entry"
import tooltipGuide from "./tooltip/entry"
import hoverCardGuide from "./hover-card/entry"
import dropdownMenuGuide from "./dropdown-menu/entry"
import contextMenuGuide from "./context-menu/entry"
import alertGuide from "./alert/entry"
import toastGuide from "./toast/entry"
import progressGuide from "./progress/entry"
import skeletonGuide from "./skeleton/entry"
import spinnerGuide from "./spinner/entry"
import badgeGuide from "./badge/entry"
import cardGuide from "./card/entry"
import separatorGuide from "./separator/entry"
import accordionGuide from "./accordion/entry"
import collapsibleGuide from "./collapsible/entry"
import tableGuide from "./table/entry"
import scrollAreaGuide from "./scroll-area/entry"
import avatarGuide from "./avatar/entry"
import kbdGuide from "./kbd/entry"
import tabsGuide from "./tabs/entry"
import breadcrumbGuide from "./breadcrumb/entry"
import paginationGuide from "./pagination/entry"
import pocketCardGuide from "./pocket-card/entry"
import patchGuide from "./patch/entry"
import stitchGuide from "./stitch/entry"
import type { Guide } from "./types"

export const guides: Record<string, Guide> = {
  "button": buttonGuide,
  "input": inputGuide,
  "textarea": textareaGuide,
  "label": labelGuide,
  "checkbox": checkboxGuide,
  "radio-group": radioGroupGuide,
  "switch": switchGuide,
  "select": selectGuide,
  "slider": sliderGuide,
  "toggle": toggleGuide,
  "toggle-group": toggleGroupGuide,
  "dialog": dialogGuide,
  "alert-dialog": alertDialogGuide,
  "sheet": sheetGuide,
  "drawer": drawerGuide,
  "popover": popoverGuide,
  "tooltip": tooltipGuide,
  "hover-card": hoverCardGuide,
  "dropdown-menu": dropdownMenuGuide,
  "context-menu": contextMenuGuide,
  "alert": alertGuide,
  "toast": toastGuide,
  "progress": progressGuide,
  "skeleton": skeletonGuide,
  "spinner": spinnerGuide,
  "badge": badgeGuide,
  "card": cardGuide,
  "separator": separatorGuide,
  "accordion": accordionGuide,
  "collapsible": collapsibleGuide,
  "table": tableGuide,
  "scroll-area": scrollAreaGuide,
  "avatar": avatarGuide,
  "kbd": kbdGuide,
  "tabs": tabsGuide,
  "breadcrumb": breadcrumbGuide,
  "pagination": paginationGuide,
  "pocket-card": pocketCardGuide,
  "patch": patchGuide,
  "stitch": stitchGuide,
}
