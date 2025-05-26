import { Hero } from "@/components/ui/hero";
import { SectionDescription, SectionTitle } from "@/components/ui/typography";

export function HeroTitle() {
  return (
    <>
      <Hero className="h-40">
        <SectionTitle>Welcome to the Rebels</SectionTitle>
        <SectionDescription>
          We are the alliance football club.
        </SectionDescription>
      </Hero>
    </>
  );
}
