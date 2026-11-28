import { Avatar, AvatarFallback, AvatarGroup, AvatarGroupCount } from "@/registry/threadcn/ui/avatar"

export default function AvatarGroupExample() {
  return (
    <div className="grid justify-items-center gap-2 text-sm">
      <AvatarGroup>
        <Avatar>
          <AvatarFallback>RA</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>MN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>JS</AvatarFallback>
        </Avatar>
        <AvatarGroupCount>
          +3<span className="sr-only"> more</span>
        </AvatarGroupCount>
      </AvatarGroup>
      <p>6 people on the repair team</p>
    </div>
  )
}
