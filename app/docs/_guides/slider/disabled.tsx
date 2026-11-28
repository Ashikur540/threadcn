import { Slider } from "@/registry/threadcn/ui/slider"

export default function SliderDisabled() {
  return (
    <div className="grid w-full max-w-xs gap-3">
      <p className="text-sm font-semibold">Spin speed (set by the cold wash)</p>
      <Slider defaultValue={800} min={400} max={1200} step={200} disabled aria-label="Spin speed" />
    </div>
  )
}
