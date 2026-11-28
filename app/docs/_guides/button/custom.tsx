import { Button } from "@/registry/threadcn/ui/button"

export default function ButtonCustom() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <Button className="[--_bg:#5f7f43] [--_edge:#3a5128] [--_fg:#f3f7ea]">Moss patch</Button>
      <Button className="[--_lift:2px]">Sits lower</Button>
      <Button className="[--_stitch:white]">White thread</Button>
    </div>
  )
}
