import { Card } from "@/registry/threadcn/ui/card"
import { ScrollArea, ScrollBar } from "@/registry/threadcn/ui/scroll-area"

const waists = [28, 29, 30, 31, 32, 33, 34, 36, 38]
const inseams = [28, 30, 32, 34, 36]
// Made-up stock counts, just to fill the grid.
const stock = (waist: number, inseam: number) => (waist + inseam) % 9

export default function ScrollAreaBoth() {
  return (
    <Card size="sm" className="w-full max-w-sm">
      <p className="font-semibold">Model 08 in stock</p>
      <ScrollArea className="h-44 pr-3">
        <table className="mb-4 w-max border-collapse text-sm tabular-nums">
          <caption className="sr-only">Pairs in stock by waist and inseam</caption>
          <thead>
            <tr>
              <th scope="col" className="px-3 py-1.5 text-left">
                Waist
              </th>
              {inseams.map((inseam) => (
                <th key={inseam} scope="col" className="px-3 py-1.5 text-right whitespace-nowrap">
                  Inseam {inseam}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {waists.map((waist) => (
              <tr key={waist}>
                <th scope="row" className="px-3 py-1.5 text-left">
                  {waist}
                </th>
                {inseams.map((inseam) => (
                  <td key={inseam} className="px-3 py-1.5 text-right">
                    {stock(waist, inseam)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </Card>
  )
}
