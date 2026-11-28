import { Button } from "@/registry/threadcn/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/registry/threadcn/ui/dropdown-menu"

export default function DropdownMenuCheckboxes() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>Filter jeans</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>Show</DropdownMenuLabel>
          <DropdownMenuCheckboxItem defaultChecked>In stock only</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>Raw denim</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem defaultChecked>Free repairs</DropdownMenuCheckboxItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
