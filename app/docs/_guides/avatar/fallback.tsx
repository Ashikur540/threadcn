import { Avatar, AvatarFallback, AvatarImage } from "@/registry/threadcn/ui/avatar"

export default function AvatarFallbackExample() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src="/photos/does-not-exist.jpg" alt="Mina Noor" />
          <AvatarFallback>MN</AvatarFallback>
        </Avatar>
        <span>The photo failed to load</span>
      </div>
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarFallback>JS</AvatarFallback>
        </Avatar>
        <span>No photo at all</span>
      </div>
    </div>
  )
}
