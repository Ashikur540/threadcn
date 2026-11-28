import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/registry/threadcn/ui/pagination"

export default function PaginationSizes() {
  return (
    <div className="grid w-full gap-6">
      {/* Normal: numbers are "icon", Previous and Next are "default". */}
      <Pagination aria-label="Reviews, pages">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="?page=1" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="?page=1">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="?page=2" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="?page=3" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      {/* Small: numbers are "icon-sm", Previous and Next are "sm". */}
      <Pagination aria-label="Reviews, pages, small">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="?page=1" size="sm" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="?page=1" size="icon-sm">
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="?page=2" size="icon-sm" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="?page=3" size="sm" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
