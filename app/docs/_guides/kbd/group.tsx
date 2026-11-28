import { Kbd, KbdGroup } from "@/registry/threadcn/ui/kbd"

const shortcuts = [
  { action: "Search the shop", keys: ["Ctrl", "K"] },
  { action: "Add to bag", keys: ["Shift", "A"] },
  { action: "Book a repair", keys: ["Alt", "R"] },
]

export default function KbdGroupExample() {
  return (
    <dl className="grid w-full max-w-xs gap-3 text-sm">
      {shortcuts.map(({ action, keys }) => (
        <div key={action} className="flex items-center justify-between gap-4">
          <dt>{action}</dt>
          <dd>
            <KbdGroup>
              {keys.map((key, i) => (
                <span key={key} className="inline-flex items-center gap-1">
                  {i > 0 && "+"}
                  <Kbd>{key}</Kbd>
                </span>
              ))}
            </KbdGroup>
          </dd>
        </div>
      ))}
    </dl>
  )
}
