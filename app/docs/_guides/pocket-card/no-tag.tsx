import { Button } from "@/registry/threadcn/ui/button"
import { PocketCard, PocketCardContent, PocketCardDescription, PocketCardFooter, PocketCardHeader, PocketCardTitle } from "@/registry/threadcn/ui/pocket-card"

export default function PocketCardNoTag() {
  return (
    <PocketCard className="w-full max-w-sm">
      <PocketCardHeader className="pr-0">
        <PocketCardTitle>Repair ticket</PocketCardTitle>
      </PocketCardHeader>
      <PocketCardDescription className="pr-0">Model 08, waist 32. Dropped off on 12 November.</PocketCardDescription>
      <PocketCardContent>
        <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm">
          <dt className="font-semibold">Repair</dt>
          <dd>Knee patch, left leg</dd>
          <dt className="font-semibold">Ready</dt>
          <dd>In about 9 days</dd>
        </dl>
      </PocketCardContent>
      <PocketCardFooter>
        <Button variant="secondary">Track repair</Button>
      </PocketCardFooter>
    </PocketCard>
  )
}
