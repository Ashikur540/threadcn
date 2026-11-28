import { ScrollArea, ScrollBar } from "@/registry/threadcn/ui/scroll-area"

const washes = ["Raw", "Rinse", "One wash", "Stone", "Vintage", "Bleached", "Black"]

export default function ScrollAreaHorizontal() {
  return (
    <ScrollArea className="w-full max-w-md">
      <ul className="flex w-max gap-3 pb-4">
        {washes.map((wash) => (
          <li key={wash} className="grid h-24 w-28 place-items-end rounded-lg bg-(--tx-field) p-3 text-sm font-semibold text-(--tx-field-foreground)">
            {wash}
          </li>
        ))}
      </ul>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}
