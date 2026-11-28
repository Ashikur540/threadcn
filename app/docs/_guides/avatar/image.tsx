import { Avatar, AvatarFallback, AvatarImage } from "@/registry/threadcn/ui/avatar"

// A small drawing used as the photo, so the example works offline. Use your real photo URL.
const photo = `data:image/svg+xml,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><rect width="80" height="80" fill="#c98a5a"/><circle cx="40" cy="32" r="14" fill="#3a2a1a"/><path d="M12 80c2-18 14-27 28-27s26 9 28 27z" fill="#2b4a74"/></svg>',
)}`

export default function AvatarWithImage() {
  return (
    <div className="flex items-center gap-3">
      <Avatar size="lg">
        <AvatarImage src={photo} alt="Rafi Ahmed" />
        <AvatarFallback>RA</AvatarFallback>
      </Avatar>
      <div className="grid text-sm">
        <span className="font-semibold">Rafi Ahmed</span>
        <span>Repair team, Indigo Supply</span>
      </div>
    </div>
  )
}
