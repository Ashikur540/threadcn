import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/registry/threadcn/ui/accordion"

export default function AccordionDefaultOpen() {
  return (
    <Accordion defaultValue={["shipping"]} className="max-w-sm">
      <AccordionItem value="shipping">
        <AccordionTrigger>When will my order ship?</AccordionTrigger>
        <AccordionContent>Orders placed before noon ship the same day from Indigo Supply.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="hem">
        <AccordionTrigger>Can you hem them first?</AccordionTrigger>
        <AccordionContent>Yes. Add your inseam at checkout and we hem them before they ship. It adds 2 days.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="returns">
        <AccordionTrigger>Can I return them?</AccordionTrigger>
        <AccordionContent>Within 30 days, unwashed and unhemmed.</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
