import { Button } from "@/registry/threadcn/ui/button"
import { Label } from "@/registry/threadcn/ui/label"
import { Popover, PopoverContent, PopoverDescription, PopoverHeader, PopoverTitle, PopoverTrigger } from "@/registry/threadcn/ui/popover"
import { Switch } from "@/registry/threadcn/ui/switch"

export default function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>Size help</PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>Find your size</PopoverTitle>
          <PopoverDescription>Lay a pair you love flat and measure across the waist.</PopoverDescription>
        </PopoverHeader>
        <Label>
          <Switch size="sm" /> Show sizes in cm
        </Label>
      </PopoverContent>
    </Popover>
  )
}
