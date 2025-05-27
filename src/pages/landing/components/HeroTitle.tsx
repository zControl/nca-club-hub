import { Hero } from "@/components/ui/hero";
import { Header1, Header3, TextBlock } from "@/components/ui/typography";

export function HeroTitle() {
  return (
    <>
      <Hero>
        <Header1 className="text-nca-red text-6xl">
          WELCOME TO THE ALLIANCE
        </Header1>
        <Header3 className="text-nca-blue mb-6">
          Rooted in community, driven by development.
        </Header3>
        <div className="flex flex-col items-center justify-evenly gap-4">
          <div className="w-1/2">
            <p>
              We strive to inspire and develop young athletes through the game
              of soccer, fostering a lifelong love for the beautiful game while
              promoting teamwork, discipline, and personal growth.
            </p>
          </div>
          <div className="w-1/2">
            <p>
              We provide a positive and challenging environment where players
              can improve their technical abilities, tactical understanding, and
              physical fitness.
            </p>
          </div>
          <div className="w-1/2">
            <p>
              Our goal is not only to help each player reach their potential
              within the sport, but also to build confidence, resilience, and
              leadership that extends beyond the field.
            </p>
          </div>
          <TextBlock className="text-center font-bold text-2xl font-sans tracking-wider">
            Local | Competitive | Committed | Cost Effective
          </TextBlock>
        </div>
      </Hero>
    </>
  );
}
