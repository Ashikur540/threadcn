import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/registry/threadcn/ui/accordion"
import { Avatar, AvatarBadge, AvatarFallback, AvatarGroup, AvatarGroupCount, AvatarImage } from "@/registry/threadcn/ui/avatar"
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/registry/threadcn/ui/breadcrumb"
import { Button } from "@/registry/threadcn/ui/button"
import { Card, CardContent } from "@/registry/threadcn/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/registry/threadcn/ui/collapsible"
import { Kbd, KbdGroup } from "@/registry/threadcn/ui/kbd"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/registry/threadcn/ui/pagination"
import { ScrollArea } from "@/registry/threadcn/ui/scroll-area"
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/registry/threadcn/ui/table"

// A small drawn "photo" so the demo needs no network images.
const photo =
  "data:image/svg+xml," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><rect width="80" height="80" fill="#c9853a"/><circle cx="40" cy="32" r="14" fill="#f1d7b8"/><path d="M14 80c2-18 14-26 26-26s24 8 26 26z" fill="#2b4a74"/></svg>`,
  )

const repairs = [
  { order: "IND-2041", item: "Model 08, left knee", status: "Sewing", days: 3 },
  { order: "IND-2039", item: "Model 12, belt loop", status: "Ready", days: 0 },
  { order: "IND-2033", item: "Model 08, hem", status: "Shipped", days: 0 },
]

export function Wave3Demo() {
  return (
    <div className="grid gap-10">
      <div className="grid gap-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink href="#">Shop</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbEllipsis /></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbLink href="#">Jeans</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbPage>Model 08 Straight</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <Pagination className="justify-start">
          <PaginationContent>
            <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
            <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
            <PaginationItem><PaginationLink href="#" isActive>2</PaginationLink></PaginationItem>
            <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
            <PaginationItem><PaginationEllipsis /></PaginationItem>
            <PaginationItem><PaginationNext href="#" /></PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <Accordion defaultValue={["fit"]}>
          <AccordionItem value="fit">
            <AccordionTrigger>How does Model 08 fit?</AccordionTrigger>
            <AccordionContent>True to size, straight from hip to hem. Size down for a slimmer look.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="wash">
            <AccordionTrigger>When should I first wash it?</AccordionTrigger>
            <AccordionContent>Wait at least six months, then wash cold and inside out.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="repairs">
            <AccordionTrigger>Are repairs really free?</AccordionTrigger>
            <AccordionContent>Yes, forever. Rips, holes and broken buttons.</AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="grid content-start gap-6">
          <div className="flex flex-wrap items-center gap-5">
            <Avatar size="lg">
              <AvatarImage src={photo} alt="Rafi" />
              <AvatarFallback>RA</AvatarFallback>
              <AvatarBadge />
            </Avatar>
            <Avatar>
              <AvatarFallback>MN</AvatarFallback>
            </Avatar>
            <Avatar size="sm">
              <AvatarFallback>JS</AvatarFallback>
            </Avatar>
            <AvatarGroup>
              <Avatar><AvatarImage src={photo} alt="Rafi" /><AvatarFallback>RA</AvatarFallback></Avatar>
              <Avatar><AvatarFallback>MN</AvatarFallback></Avatar>
              <Avatar><AvatarFallback>JS</AvatarFallback></Avatar>
              <AvatarGroupCount>+3</AvatarGroupCount>
            </AvatarGroup>
          </div>
          <p className="flex flex-wrap items-center gap-2 text-sm">
            Search the shop with
            <KbdGroup><Kbd>⌘</Kbd><Kbd>K</Kbd></KbdGroup>
            or press <Kbd>/</Kbd>
          </p>
          <Collapsible>
            <CollapsibleTrigger render={<Button variant="outline" size="sm" />}>Show care details</CollapsibleTrigger>
            <CollapsibleContent className="pt-3 text-sm">Wash cold, inside out. Hang to dry. Never tumble dry.</CollapsibleContent>
          </Collapsible>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <Table>
          <TableCaption>Recent repairs</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Order</TableHead>
              <TableHead>Item</TableHead>
              <TableHead className="text-right">Days left</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {repairs.map((r, i) => (
              <TableRow key={r.order} data-state={i === 1 ? "selected" : undefined}>
                <TableCell className="font-semibold">{r.order}</TableCell>
                <TableCell>{r.item}</TableCell>
                <TableCell className="text-right tabular-nums">{r.days}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={2}>Open repairs</TableCell>
              <TableCell className="text-right">1</TableCell>
            </TableRow>
          </TableFooter>
        </Table>

        <Card>
          <CardContent>
            <ScrollArea className="h-44 pr-3">
              <div className="grid gap-3 text-sm">
                {Array.from({ length: 12 }, (_, i) => (
                  <p key={i}>
                    Care tip {i + 1}: raw denim softens with wear. Keep it out of the dryer and let it fade to your shape.
                  </p>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
