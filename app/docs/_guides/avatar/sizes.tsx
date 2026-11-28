import { Avatar, AvatarFallback } from "@/registry/threadcn/ui/avatar"

const sizes = ["sm", "default", "lg"] as const

export default function AvatarSizes() {
  return (
    <div className="flex items-end gap-6">
      {sizes.map((size) => (
        <div key={size} className="grid justify-items-center gap-2 text-sm">
          <Avatar size={size}>
            <AvatarFallback>RA</AvatarFallback>
          </Avatar>
          <code>{size}</code>
        </div>
      ))}
    </div>
  )
}
