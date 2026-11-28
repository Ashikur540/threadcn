import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuSeparator, ContextMenuTrigger } from "@/registry/threadcn/ui/context-menu"

export default function ContextMenuDestructive() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="grid h-32 w-full max-w-sm place-items-center rounded-xl border-2 border-dashed border-(--tx-thread) p-4 text-center text-sm">
        <span>
          <strong className="block">Repair note from Indigo Supply</strong>
          Right-click here, or long-press on a touch screen
        </span>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Reply</ContextMenuItem>
        <ContextMenuItem disabled>Forward (not allowed)</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">Delete note</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
