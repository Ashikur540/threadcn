import { Button } from "@/registry/threadcn/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/threadcn/ui/dropdown-menu"

export default function DropdownMenuInset() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>Wash settings</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel inset>Machine</DropdownMenuLabel>
          <DropdownMenuCheckboxItem defaultChecked>Cold wash only</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>Inside out</DropdownMenuCheckboxItem>
          <DropdownMenuItem inset>Reset to default</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem inset>Read the care guide</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
