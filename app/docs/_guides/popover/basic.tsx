import { Button } from "@/registry/threadcn/ui/button"
import { Popover, PopoverContent, PopoverDescription, PopoverHeader, PopoverTitle, PopoverTrigger } from "@/registry/threadcn/ui/popover"

export default function PopoverBasic() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>Free repairs</PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>Repairs, on us</PopoverTitle>
          <PopoverDescription>Send back your Model 08 jeans any time. We fix torn knees, broken belt loops and worn hems for free.</PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  )
}
