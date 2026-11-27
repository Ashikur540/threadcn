import { Avatar, AvatarBadge, AvatarFallback, AvatarGroup, AvatarGroupCount } from "@/registry/threadcn/ui/avatar"

export default function AvatarDemo() {
  return (
    <div className="flex items-center gap-6">
      <Avatar size="lg">
        <AvatarFallback>RA</AvatarFallback>
        <AvatarBadge />
      </Avatar>
      <AvatarGroup>
        <Avatar><AvatarFallback>MN</AvatarFallback></Avatar>
        <Avatar><AvatarFallback>JS</AvatarFallback></Avatar>
        <Avatar><AvatarFallback>LK</AvatarFallback></Avatar>
        <AvatarGroupCount>+3</AvatarGroupCount>
      </AvatarGroup>
    </div>
  )
}
