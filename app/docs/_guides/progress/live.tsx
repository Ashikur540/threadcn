"use client"

import { useEffect, useState } from "react"

import { Button } from "@/registry/threadcn/ui/button"
import { Progress, ProgressLabel, ProgressValue } from "@/registry/threadcn/ui/progress"

export default function ProgressLive() {
  const [value, setValue] = useState(0)
  const running = value > 0 && value < 100

  useEffect(() => {
    if (!running) return
    const timer = setInterval(() => setValue((v) => Math.min(100, v + 10)), 400)
    return () => clearInterval(timer)
  }, [running])

  return (
    <div className="grid w-full max-w-sm justify-items-start gap-4">
      <Progress value={value} className="w-full">
        <ProgressLabel>Uploading your fit photo</ProgressLabel>
        <ProgressValue />
      </Progress>
      <Button size="sm" variant="secondary" disabled={running} focusableWhenDisabled onClick={() => setValue(10)}>
        {value === 100 ? "Upload again" : "Start upload"}
      </Button>
    </div>
  )
}
