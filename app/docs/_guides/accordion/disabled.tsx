import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/registry/threadcn/ui/accordion"

export default function AccordionDisabled() {
  return (
    <Accordion className="max-w-sm">
      <AccordionItem value="status">
        <AccordionTrigger>Where is my repair?</AccordionTrigger>
        <AccordionContent>Repair IND-2041 is being sewn. It ships back on Friday.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="invoice" disabled>
        <AccordionTrigger>Invoice (ready when it ships)</AccordionTrigger>
        <AccordionContent>Your invoice for repair IND-2041.</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
