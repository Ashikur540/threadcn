"use client"

import { Slider as SliderPrimitive } from "@base-ui/react/slider"
import { cn } from "cn"

/**
 * A denim strap with sewing-button thumbs. Same API as shadcn's Slider:
 * pass an array as value or defaultValue for a range with two thumbs.
 * The look is in styles/slider.css.
 *
 * Differs from shadcn: `aria-label` is passed on to each thumb's input, the
 * part a screen reader announces ("Price, minimum" / "Price, maximum").
 *
 * @example
 * <Slider defaultValue={[40, 120]} max={200} aria-label="Price" />
 */
function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  "aria-label": label,
  ...props
}: Omit<SliderPrimitive.Root.Props, "className"> & { className?: string }) {
  const values = Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [min, max]
  const nameThumb = (index: number) => (values.length === 2 ? `${label}, ${index === 0 ? "minimum" : "maximum"}` : `${label}`)

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      className={cn("tx-slider data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full", className)}
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      thumbAlignment="edge"
      {...props}
    >
      <SliderPrimitive.Control className="relative flex w-full touch-none items-center py-2 select-none data-disabled:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-40 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col data-[orientation=vertical]:px-2 data-[orientation=vertical]:py-0">
        <SliderPrimitive.Track
          data-slot="slider-track"
          className="tx-slider-track relative grow overflow-hidden rounded-full select-none data-[orientation=horizontal]:h-2.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2.5"
        >
          <SliderPrimitive.Indicator data-slot="slider-range" className="tx-slider-range select-none data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full" />
        </SliderPrimitive.Track>
        {values.map((_, index) => (
          <SliderPrimitive.Thumb
            data-slot="slider-thumb"
            key={index}
            getAriaLabel={label ? nameThumb : undefined}
            className="tx-slider-thumb block size-[22px] shrink-0 cursor-grab rounded-full select-none data-disabled:cursor-not-allowed data-dragging:cursor-grabbing"
          />
        ))}
      </SliderPrimitive.Control>
    </SliderPrimitive.Root>
  )
}

export { Slider }
