import { Progress } from "@/registry/threadcn/ui/progress"

export default function ProgressValueExample() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <Progress value={15} aria-label="Repair progress" />
      <Progress value={60} aria-label="Repair progress" />
      <Progress value={100} aria-label="Repair progress" />
    </div>
  )
}
