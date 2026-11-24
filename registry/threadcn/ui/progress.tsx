"use client"

import { Progress as ProgressPrimitive } from "@base-ui/react/progress"
import { cn } from "cn"

// Same parts and API as shadcn's Base UI Progress. Base UI sets the fill
// width and the screen-reader values. The look is in styles/progress.css.

type WithClassName<T> = Omit<T, "className"> & { className?: string }

/**
 * A recessed denim strap filled by a gold patch with a running thread.
 *
 * @example
 * <Progress value={60}>
 *   <ProgressLabel>Repair</ProgressLabel>
 *   <ProgressValue />
 * </Progress>
 */
function Progress({ className, children, value, ...props }: WithClassName<ProgressPrimitive.Root.Props>) {
  return (
    <ProgressPrimitive.Root value={value} data-slot="progress" className={cn("tx-progress flex flex-wrap items-center gap-x-3 gap-y-2", className)} {...props}>
      {children}
      <ProgressTrack>
        <ProgressIndicator />
      </ProgressTrack>
    </ProgressPrimitive.Root>
  )
}

function ProgressTrack({ className, ...props }: WithClassName<ProgressPrimitive.Track.Props>) {
  return (
    <ProgressPrimitive.Track
      data-slot="progress-track"
      className={cn("tx-progress-track relative flex h-3 w-full items-center overflow-hidden rounded-full", className)}
      {...props}
    />
  )
}

function ProgressIndicator({ className, ...props }: WithClassName<ProgressPrimitive.Indicator.Props>) {
  return <ProgressPrimitive.Indicator data-slot="progress-indicator" className={cn("tx-progress-indicator h-full rounded-full", className)} {...props} />
}

function ProgressLabel({ className, ...props }: WithClassName<ProgressPrimitive.Label.Props>) {
  return <ProgressPrimitive.Label data-slot="progress-label" className={cn("text-sm font-semibold", className)} {...props} />
}

function ProgressValue({ className, ...props }: WithClassName<ProgressPrimitive.Value.Props>) {
  return <ProgressPrimitive.Value data-slot="progress-value" className={cn("ml-auto text-sm tabular-nums", className)} {...props} />
}

export { Progress, ProgressTrack, ProgressIndicator, ProgressLabel, ProgressValue }
