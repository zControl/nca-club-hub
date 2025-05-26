import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Hero } from "@/components/ui/hero";
export function HeroFaq() {
  return (
    <Hero sectionTitle="Frequently Asked Questions">
      <Accordion
        type="multiple"
        className="w-full max-w-7xl border-4 border-nca-red px-4 rounded-none mx-auto"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>First FAQ Question</AccordionTrigger>
          <AccordionContent>
            This is the content for the answer to the question.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Second FAQ Question</AccordionTrigger>
          <AccordionContent>
            This is the content for the answer to the question.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Third FAQ Question</AccordionTrigger>
          <AccordionContent>
            This is the content for the answer to the question.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Hero>
  );
}
