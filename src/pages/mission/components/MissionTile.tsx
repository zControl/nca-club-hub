import background from "@/assets/hero/hero-carousel-3.webp";
import { ContentPane } from "@/components/common/page/ContentPane";
import { Hero } from "@/components/ui/hero";
import { TextBlock } from "@/components/ui/typography";

export function MissionTile() {
  return (
    <Hero backgroundImageUrl={background} className="opacity-90">
      <ContentPane>
        <TextBlock className="max-w-4xl mx-auto text-2xl font-semibold">
          Our mission is to create THE soccer club of choice in Whatcom County.
          We aim to create a culture where multi-sport athletes can thrive in a
          competitive program while fostering a lifelong love of the game.
        </TextBlock>
        <TextBlock className="max-w-4xl mx-auto text-xl">
          North County Alliance Football Club is a registered nonprofit
          organization with the State of Washington dedicated to the development
          of youth soccer in our community.
        </TextBlock>
      </ContentPane>
    </Hero>
  );
}
