import { CardButton } from "@/components/composites/CardButton";
import { Hero } from "@/components/ui/hero";

export function HeroInfoCards() {
  return (
    <Hero className="bg-nca-blue">
      <div className="flex flex-col md:flex-row items-center justify-around gap-8 px-12 py-6">
        <CardButton
          header="Girls Teams"
          subText="Girls are cool."
          buttonUrl="/teams"
          buttonText="Girls Team Directory"
        />
        <CardButton
          header="Boys Teams"
          subText="Boys are cool."
          buttonUrl="/teams"
          buttonText="Boys Team Directory"
        />
      </div>
    </Hero>
  );
}
