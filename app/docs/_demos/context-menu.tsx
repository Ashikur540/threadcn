import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuSeparator, ContextMenuShortcut, ContextMenuTrigger } from "@/registry/threadcn/ui/context-menu"

export default function ContextMenuDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="grid h-28 w-full max-w-sm place-items-center rounded-xl border-2 border-dashed border-(--tx-thread) text-sm">
        Right-click here
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>
          Save for later <ContextMenuShortcut>⌘S</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>Share</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">Remove from bag</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
