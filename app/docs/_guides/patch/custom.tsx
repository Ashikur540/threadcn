import { Patch } from "@/registry/threadcn/ui/patch"

export default function PatchCustom() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <Patch className="[--_stitch:white] [--_thread:2.5px]">White thread</Patch>
      <Patch className="rounded-[12px] px-7 py-3.5 text-xl [--_inset:7px] [--_radius:12px]">Model 08</Patch>
    </div>
  )
}
