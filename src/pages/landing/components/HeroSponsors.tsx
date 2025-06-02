import sponsor1 from "@/assets/sponsors/sponsor_1.png";
import sponsor2 from "@/assets/sponsors/sponsor_2.png";
import sponsor3 from "@/assets/sponsors/sponsor_3.png";
import sponsor4 from "@/assets/sponsors/sponsor_4.png";
import { Hero } from "@/components/ui/hero";

export function HeroSponsors() {
  return (
    <Hero
      sectionTitle="Sponsors"
      sectionDescription="We are thrilled to partner with local businesses, charities, and organizations to support our mission."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 place-items-center">
        <div>
          <img src={sponsor1}></img>
        </div>
        <div>
          <img src={sponsor2}></img>
        </div>
        <div>
          <img src={sponsor3}></img>
        </div>
        <div>
          <img src={sponsor4}></img>
        </div>
      </div>
    </Hero>
  );
}
