import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/registry/threadcn/ui/accordion"

export default function AccordionSingle() {
  return (
    <Accordion className="max-w-sm">
      <AccordionItem value="fit">
        <AccordionTrigger>How does Model 08 fit?</AccordionTrigger>
        <AccordionContent>True to size, straight from hip to hem. If you wear a 32 waist, order a 32.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="shrink">
        <AccordionTrigger>Will they shrink?</AccordionTrigger>
        <AccordionContent>A little, about half an inch in the waist after the first warm soak.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="repairs">
        <AccordionTrigger>Are repairs really free?</AccordionTrigger>
        <AccordionContent>Yes, forever. Rips, holes and broken buttons.</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
