import { Kbd, KbdGroup } from "@/registry/threadcn/ui/kbd"

export default function KbdDemo() {
  return (
    <p className="flex flex-wrap items-center gap-2 text-sm">
      Search the shop with
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
      or press <Kbd>/</Kbd>
    </p>
  )
}
