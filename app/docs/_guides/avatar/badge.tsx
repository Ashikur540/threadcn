import { Avatar, AvatarBadge, AvatarFallback } from "@/registry/threadcn/ui/avatar"

export default function AvatarWithBadge() {
  return (
    <div className="flex items-center gap-3 text-sm">
      <Avatar size="lg">
        <AvatarFallback>RA</AvatarFallback>
        <AvatarBadge>
          <span className="sr-only">Online</span>
        </AvatarBadge>
      </Avatar>
      <div className="grid">
        <span className="font-semibold">Rafi Ahmed</span>
        <span>Online now, ask about your repair</span>
      </div>
    </div>
  )
}
