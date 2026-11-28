import { Kbd, KbdGroup } from "@/registry/threadcn/ui/kbd"

export default function KbdInText() {
  return (
    <p className="max-w-sm text-center text-sm leading-7">
      Looking for Model 08 in waist 32? Press{" "}
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>{" "}
      to search Indigo Supply, or <Kbd>Esc</Kbd> to close the search.
    </p>
  )
}
