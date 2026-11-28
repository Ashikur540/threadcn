import { Button } from "@/registry/threadcn/ui/button"

export default function ButtonVariants() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <Button>Add to bag</Button>
      <Button variant="secondary">Save for later</Button>
      <Button variant="destructive">Remove</Button>
      <Button variant="leather">Leather</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Read the care guide</Button>
    </div>
  )
}
