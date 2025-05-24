import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Grip } from "lucide-react";

import { ButtonLink } from "@/components/composites/ButtonLink";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  clubItems,
  competitiveItems,
  recreationItems,
} from "@/components/common/header/headerItems";

export function NavMenuMobile() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Grip />
        </Button>
      </SheetTrigger>
      <SheetContent side="top">
        <SheetHeader>
          <SheetTitle>Mobile Menus</SheetTitle>
          <Separator />
        </SheetHeader>
        <Accordion type="multiple" className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className=" w-full px-4">
              The Club
            </AccordionTrigger>
            <AccordionContent>
              <ul>
                {clubItems.map((item) => (
                  <ButtonLink href={item.href} key={item.title}>
                    {item.short}
                  </ButtonLink>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className=" w-full px-4">
              Competitive Programs
            </AccordionTrigger>
            <AccordionContent>
              <ul>
                {competitiveItems.map((item) => (
                  <ButtonLink href={item.href} key={item.title}>
                    {item.short}
                  </ButtonLink>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className=" w-full px-4">
              Rebel Rec
            </AccordionTrigger>
            <AccordionContent>
              <ul>
                {recreationItems.map((item) => (
                  <ButtonLink href={item.href} key={item.title}>
                    {item.short}
                  </ButtonLink>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className=" w-full px-4">
              Resources
            </AccordionTrigger>
            <AccordionContent>
              <ul>
                <ButtonLink href="/resources">Parent Resources</ButtonLink>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </SheetContent>
    </Sheet>
  );
}
