import { Button } from "@/registry/threadcn/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/registry/threadcn/ui/dropdown-menu"

export default function DropdownMenuDestructiveDisabled() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>Order IND-2077</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Track parcel</DropdownMenuItem>
        <DropdownMenuItem disabled>Change address (shipped)</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">Cancel order</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
