import type { ComponentType } from "react"

import AccordionDemo from "./accordion"
import AlertDemo from "./alert"
import AlertDialogDemo from "./alert-dialog"
import AvatarDemo from "./avatar"
import BadgeDemo from "./badge"
import BreadcrumbDemo from "./breadcrumb"
import ButtonDemo from "./button"
import CardDemo from "./card"
import CheckboxDemo from "./checkbox"
import CollapsibleDemo from "./collapsible"
import ContextMenuDemo from "./context-menu"
import DialogDemo from "./dialog"
import DrawerDemo from "./drawer"
import DropdownMenuDemo from "./dropdown-menu"
import HoverCardDemo from "./hover-card"
import InputDemo from "./input"
import KbdDemo from "./kbd"
import LabelDemo from "./label"
import PaginationDemo from "./pagination"
import PatchDemo from "./patch"
import PocketCardDemo from "./pocket-card"
import PopoverDemo from "./popover"
import ProgressDemo from "./progress"
import RadioGroupDemo from "./radio-group"
import ScrollAreaDemo from "./scroll-area"
import SelectDemo from "./select"
import SeparatorDemo from "./separator"
import SheetDemo from "./sheet"
import SkeletonDemo from "./skeleton"
import SliderDemo from "./slider"
import SpinnerDemo from "./spinner"
import StitchDemo from "./stitch"
import SwitchDemo from "./switch"
import TableDemo from "./table"
import TabsDemo from "./tabs"
import TextareaDemo from "./textarea"
import ToastDemo from "./toast"
import ToggleDemo from "./toggle"
import ToggleGroupDemo from "./toggle-group"
import TooltipDemo from "./tooltip"

export const demos: Record<string, ComponentType> = {
  "accordion": AccordionDemo,
  "alert": AlertDemo,
  "alert-dialog": AlertDialogDemo,
  "avatar": AvatarDemo,
  "badge": BadgeDemo,
  "breadcrumb": BreadcrumbDemo,
  "button": ButtonDemo,
  "card": CardDemo,
  "checkbox": CheckboxDemo,
  "collapsible": CollapsibleDemo,
  "context-menu": ContextMenuDemo,
  "dialog": DialogDemo,
  "drawer": DrawerDemo,
  "dropdown-menu": DropdownMenuDemo,
  "hover-card": HoverCardDemo,
  "input": InputDemo,
  "kbd": KbdDemo,
  "label": LabelDemo,
  "pagination": PaginationDemo,
  "patch": PatchDemo,
  "pocket-card": PocketCardDemo,
  "popover": PopoverDemo,
  "progress": ProgressDemo,
  "radio-group": RadioGroupDemo,
  "scroll-area": ScrollAreaDemo,
  "select": SelectDemo,
  "separator": SeparatorDemo,
  "sheet": SheetDemo,
  "skeleton": SkeletonDemo,
  "slider": SliderDemo,
  "spinner": SpinnerDemo,
  "stitch": StitchDemo,
  "switch": SwitchDemo,
  "table": TableDemo,
  "tabs": TabsDemo,
  "textarea": TextareaDemo,
  "toast": ToastDemo,
  "toggle": ToggleDemo,
  "toggle-group": ToggleGroupDemo,
  "tooltip": TooltipDemo,
}
