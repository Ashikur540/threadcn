"use client"

import { Avatar, AvatarFallback, AvatarGroup } from "@/registry/threadcn/ui/avatar"
import { Toaster, toast } from "@/registry/threadcn/ui/toast"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/registry/threadcn/ui/tooltip"

import { InstallCommand } from "../_site/copy"

/** The hero's install command. Copying it shows a real threadcn Toast, as a small demo. */
export function HeroInstall({ className }: { className?: string }) {
  return (
    <>
      <InstallCommand
        className={className}
        onCopied={(command) => toast.add({ title: "Install command copied", description: command, type: "success" })}
      />
      <Toaster />
    </>
  )
}

const people = [
  { initials: "RA", name: "Rafi Ahmed" },
  { initials: "NS", name: "Nila Sen" },
  { initials: "OH", name: "Omar Haque" },
]

/** Avatars that show the person's name in a real threadcn Tooltip on hover or keyboard focus. */
export function HeroAvatars() {
  return (
    <AvatarGroup>
      {people.map((p) => (
        <Tooltip key={p.initials}>
          <TooltipTrigger render={<Avatar tabIndex={0} />}>
            <AvatarFallback>{p.initials}</AvatarFallback>
          </TooltipTrigger>
          <TooltipContent>{p.name}</TooltipContent>
        </Tooltip>
      ))}
    </AvatarGroup>
  )
}
