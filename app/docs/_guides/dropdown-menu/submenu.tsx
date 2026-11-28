import { Button } from "@/registry/threadcn/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/registry/threadcn/ui/dropdown-menu"

export default function DropdownMenuSubmenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="secondary" />}>Model 08</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Add to bag</DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Book a repair</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>New hem</DropdownMenuItem>
            <DropdownMenuItem>Knee patch</DropdownMenuItem>
            <DropdownMenuItem>Pocket patch</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuItem>Share</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
