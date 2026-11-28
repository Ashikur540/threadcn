import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/registry/threadcn/ui/context-menu"

export default function ContextMenuSubmenu() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="grid h-32 w-full max-w-sm place-items-center rounded-xl border-2 border-dashed border-(--tx-thread) p-4 text-center text-sm">
        <span>
          <strong className="block">Model 08, waist 32</strong>
          Right-click here, or long-press on a touch screen
        </span>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>
          Save for later <ContextMenuShortcut>⌘S</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger>Move to</ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>Bag</ContextMenuItem>
            <ContextMenuItem>Wishlist</ContextMenuItem>
            <ContextMenuItem>Repairs list</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuItem>Share</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
