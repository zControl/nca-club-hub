import { Hero } from "@/components/ui/hero";

export function HeroSponsors() {
  return (
    <Hero
      sectionTitle="Sponsors"
      sectionDescription="We are thrilled to partner with local businesses, charities, and organizations to support our mission."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 place-items-center">
        <div>
          <img src="/sponsors/sponsor_1.png"></img>
        </div>
        <div>
          <img src="/sponsors/sponsor_2.png"></img>
        </div>
        <div>
          <img src="/sponsors/sponsor_3.png"></img>
        </div>
        <div>
          <img src="/sponsors/sponsor_4.png"></img>
        </div>
      </div>
    </Hero>
  );
}
