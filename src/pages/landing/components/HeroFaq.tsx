import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Hero } from "@/components/ui/hero";
import { Header2 } from "@/components/ui/typography";
export function HeroFaq() {
  return (
    <Hero className="bg-nca-blue">
      <Header2 className="text-nca-blue-foreground">
        Frequently Asked Questions
      </Header2>
      <Accordion
        type="multiple"
        className="w-full max-w-7xl bg-card border-nca-red px-4 mx-auto"
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
