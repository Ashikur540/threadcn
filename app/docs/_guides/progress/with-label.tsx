"use client"

import { Progress, ProgressLabel, ProgressValue } from "@/registry/threadcn/ui/progress"

export default function ProgressWithLabel() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <Progress value={62}>
        <ProgressLabel>Repair in progress</ProgressLabel>
        <ProgressValue />
      </Progress>
      <Progress value={3} max={5} getAriaValueText={(_, value) => `Step ${value} of 5`}>
        <ProgressLabel>Hemming your Model 08</ProgressLabel>
        <ProgressValue>{(_, value) => `Step ${value} of 5`}</ProgressValue>
      </Progress>
    </div>
  )
}
