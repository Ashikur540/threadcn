import { Progress, ProgressLabel, ProgressValue } from "@/registry/threadcn/ui/progress"

export default function ProgressDemo() {
  return (
    <Progress value={62} className="w-full max-w-sm">
      <ProgressLabel>Repair in progress</ProgressLabel>
      <ProgressValue />
    </Progress>
  )
}
