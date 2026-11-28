import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from "@/registry/threadcn/ui/pagination"

export default function PaginationLabels() {
  return (
    <Pagination aria-label="Repair journal">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="?page=2" text="Newer repairs" aria-label="Go to newer repairs" />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="?page=4" text="Older repairs" aria-label="Go to older repairs" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
