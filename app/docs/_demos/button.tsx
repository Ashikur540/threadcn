import { Button } from "@/registry/threadcn/ui/button"

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}

export default function ButtonDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button>Add to bag</Button>
      <Button variant="secondary">Book a repair</Button>
      <Button variant="leather">Leather</Button>
      <Button size="icon" variant="outline" aria-label="Save to wishlist">
        <HeartIcon />
      </Button>
    </div>
  )
}
