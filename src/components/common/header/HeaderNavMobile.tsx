import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";

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
import { NavbarList } from "@/components/ui/navbar";

export function NavMenuMobile() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghostHighlight" size="icon">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="top">
        <SheetHeader>
          <SheetTitle>Mobile Menu</SheetTitle>
        </SheetHeader>
        <Accordion type="multiple" className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className=" w-full px-4">
              The Club
            </AccordionTrigger>
            <AccordionContent>
              <NavbarList items={clubItems} />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className=" w-full px-4">
              Competitive Programs
            </AccordionTrigger>
            <AccordionContent>
              <NavbarList items={competitiveItems} />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className=" w-full px-4">
              Rebel Rec
            </AccordionTrigger>
            <AccordionContent>
              <NavbarList items={recreationItems} />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className=" w-full px-4">
              <a
                href="/resources"
                className="block select-none space-y-1 rounded-md leading-none no-underline outline-none transition-colors hover:bg-highlight/40 hover:text-accent-foreground focus:bg-highlight/40 focus:text-accent-foreground"
              >
                Resources
              </a>
            </AccordionTrigger>
          </AccordionItem>
        </Accordion>
      </SheetContent>
    </Sheet>
  );
}
