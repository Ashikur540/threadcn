import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/registry/threadcn/ui/table"

const repairs = [
  { order: "IND-2041", item: "Left knee", status: "Sewing" },
  { order: "IND-2039", item: "Belt loop", status: "Ready" },
  { order: "IND-2033", item: "Hem", status: "Shipped" },
]

export default function TableDemo() {
  return (
    <Table className="max-w-sm">
      <TableCaption>Recent repairs</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Order</TableHead>
          <TableHead>Item</TableHead>
          <TableHead className="text-right">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {repairs.map((repair) => (
          <TableRow key={repair.order}>
            <TableCell className="font-semibold">{repair.order}</TableCell>
            <TableCell>{repair.item}</TableCell>
            <TableCell className="text-right">{repair.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
