import type * as React from "react"
import { cn } from "cn"

// Same parts and API as shadcn's Table. The look is in styles/table.css.
// Mark a selected row with data-state="selected".

/**
 * A data table with dashed thread lines between rows. It scrolls sideways
 * on small screens instead of squeezing.
 *
 * @example
 * <Table>
 *   <TableHeader><TableRow><TableHead>Order</TableHead></TableRow></TableHeader>
 *   <TableBody><TableRow><TableCell>IND-2041</TableCell></TableRow></TableBody>
 * </Table>
 */
function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div data-slot="table-container" className="relative w-full overflow-x-auto">
      <table data-slot="table" className={cn("tx-table w-full caption-bottom text-sm", className)} {...props} />
    </div>
  )
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return <thead data-slot="table-header" className={cn("tx-table-header", className)} {...props} />
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return <tbody data-slot="table-body" className={cn("tx-table-body", className)} {...props} />
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return <tfoot data-slot="table-footer" className={cn("tx-table-footer font-semibold", className)} {...props} />
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return <tr data-slot="table-row" className={cn("tx-table-row", className)} {...props} />
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn("tx-table-head h-11 px-3 text-left align-middle font-bold whitespace-nowrap [&:has([role=checkbox])]:pr-0", className)}
      {...props}
    />
  )
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return <td data-slot="table-cell" className={cn("px-3 py-2.5 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0", className)} {...props} />
}

function TableCaption({ className, ...props }: React.ComponentProps<"caption">) {
  return <caption data-slot="table-caption" className={cn("tx-table-caption mt-3 text-sm", className)} {...props} />
}

export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption }
