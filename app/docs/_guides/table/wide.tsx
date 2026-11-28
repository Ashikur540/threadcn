import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/registry/threadcn/ui/table"

const repairs = [
  { order: "IND-2041", jeans: "Model 08, waist 32", job: "Left knee patch", received: "Nov 18", ready: "Nov 27", status: "Sewing" },
  { order: "IND-2039", jeans: "Model 08, waist 30", job: "New belt loop", received: "Nov 16", ready: "Nov 22", status: "Ready" },
  { order: "IND-2033", jeans: "Model 12, waist 34", job: "Chain-stitch hem", received: "Nov 10", ready: "Nov 14", status: "Shipped" },
]

export default function TableWide() {
  return (
    <div className="w-full max-w-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead scope="col">Order</TableHead>
            <TableHead scope="col">Jeans</TableHead>
            <TableHead scope="col">Repair</TableHead>
            <TableHead scope="col">Received</TableHead>
            <TableHead scope="col">Ready by</TableHead>
            <TableHead scope="col">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {repairs.map((r) => (
            <TableRow key={r.order}>
              <TableHead scope="row">{r.order}</TableHead>
              <TableCell>{r.jeans}</TableCell>
              <TableCell>{r.job}</TableCell>
              <TableCell>{r.received}</TableCell>
              <TableCell>{r.ready}</TableCell>
              <TableCell>{r.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
