import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/registry/threadcn/ui/accordion"

export default function AccordionDemo() {
  return (
    <Accordion defaultValue={["fit"]} className="max-w-sm">
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
  )
}
