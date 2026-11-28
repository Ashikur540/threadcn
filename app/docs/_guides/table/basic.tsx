import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/registry/threadcn/ui/table"

const lines = [
  { item: "Model 08 Straight, waist 32", qty: 1, price: 148 },
  { item: "Chain-stitch hem", qty: 1, price: 15 },
  { item: "Indigo Supply tote", qty: 2, price: 12 },
]

const usd = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD" })

export default function TableBasic() {
  const total = lines.reduce((sum, line) => sum + line.qty * line.price, 0)
  return (
    <Table className="max-w-md">
      <TableCaption>Order IND-2041</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead scope="col">Item</TableHead>
          <TableHead scope="col" className="text-right">
            Qty
          </TableHead>
          <TableHead scope="col" className="text-right">
            Price
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {lines.map((line) => (
          <TableRow key={line.item}>
            <TableCell>{line.item}</TableCell>
            <TableCell className="text-right tabular-nums">{line.qty}</TableCell>
            <TableCell className="text-right tabular-nums">{usd(line.qty * line.price)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2}>Total</TableCell>
          <TableCell className="text-right tabular-nums">{usd(total)}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
