import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/registry/threadcn/ui/table"

const sizes = [
  { waist: 30, inches: "30 to 31", cm: "76 to 79" },
  { waist: 32, inches: "32 to 33", cm: "81 to 84" },
  { waist: 34, inches: "34 to 35", cm: "86 to 89" },
]

const yours = 32

export default function TableSelected() {
  return (
    <Table className="max-w-sm">
      <TableHeader>
        <TableRow>
          <TableHead scope="col">Size</TableHead>
          <TableHead scope="col" className="text-right">
            Waist (in)
          </TableHead>
          <TableHead scope="col" className="text-right">
            Waist (cm)
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sizes.map((s) => (
          <TableRow key={s.waist} data-state={s.waist === yours ? "selected" : undefined}>
            <TableCell>
              Waist {s.waist}
              {s.waist === yours && <span className="sr-only"> (your size)</span>}
            </TableCell>
            <TableCell className="text-right tabular-nums">{s.inches}</TableCell>
            <TableCell className="text-right tabular-nums">{s.cm}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
