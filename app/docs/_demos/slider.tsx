import { Slider } from "@/registry/threadcn/ui/slider"

export default function SliderDemo() {
  return (
    <div className="grid w-full max-w-xs gap-2">
      <p className="text-sm font-semibold">Price range</p>
      <Slider defaultValue={[40, 140]} max={200} aria-label="Price range" />
    </div>
  )
}
