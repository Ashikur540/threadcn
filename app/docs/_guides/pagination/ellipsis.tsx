import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink } from "@/registry/threadcn/ui/pagination"

export default function PaginationWithEllipsis() {
  return (
    <Pagination aria-label="Repair orders, pages">
      <PaginationContent>
        <PaginationItem>
          <PaginationLink href="?page=1">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="?page=6" isActive>
            6
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="?page=12">12</PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
