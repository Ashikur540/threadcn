import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/registry/threadcn/ui/breadcrumb"

// A small cross stitch instead of the chevron.
function CrossStitch() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  )
}

export default function BreadcrumbCustomSeparator() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Indigo Supply</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <CrossStitch />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Jeans</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <CrossStitch />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>Model 08</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
