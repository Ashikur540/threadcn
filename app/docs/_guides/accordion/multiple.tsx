import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/registry/threadcn/ui/accordion"

export default function AccordionMultiple() {
  return (
    <Accordion multiple className="max-w-sm">
      <AccordionItem value="wash">
        <AccordionTrigger>When should I first wash them?</AccordionTrigger>
        <AccordionContent>Wait at least six months, then wash cold and inside out.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="dry">
        <AccordionTrigger>How should I dry them?</AccordionTrigger>
        <AccordionContent>Hang them to dry. Never put them in the dryer.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="store">
        <AccordionTrigger>How should I store them?</AccordionTrigger>
        <AccordionContent>Fold them over a hanger, not by the belt loops.</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
