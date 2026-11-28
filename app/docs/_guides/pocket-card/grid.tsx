import {
  PocketCard,
  PocketCardAction,
  PocketCardDescription,
  PocketCardHeader,
  PocketCardTag,
  PocketCardTitle,
} from "@/registry/threadcn/ui/pocket-card"

const jeans = [
  { name: "Model 08 Straight", price: "$128", size: "W32 · L34", note: "Deep indigo, unwashed." },
  { name: "Model 11 Taper", price: "$136", size: "W30 · L32", note: "Rinsed once, a softer blue." },
]

export default function PocketCardGrid() {
  return (
    <ul className="grid w-full max-w-2xl gap-6 sm:grid-cols-2">
      {jeans.map((pair) => (
        <li key={pair.name}>
          <PocketCard className="h-full">
            <PocketCardTag>{pair.size}</PocketCardTag>
            <PocketCardHeader>
              <PocketCardTitle>
                <h3>{pair.name}</h3>
              </PocketCardTitle>
              <PocketCardAction>{pair.price}</PocketCardAction>
            </PocketCardHeader>
            <PocketCardDescription>{pair.note}</PocketCardDescription>
          </PocketCard>
        </li>
      ))}
    </ul>
  )
}
