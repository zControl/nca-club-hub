import { Hero } from "@/components/ui/hero";
import { AgeGroupCalculator } from "@/features/ages/components/AgeGroupCalculator";

export function HeroNewsFlash() {
  return (
    <Hero>
      <AgeGroupCalculator />
      <div>
        News Flash!! This can be some important quick info that we want to
        highlight. It can have a "close" button.
      </div>
    </Hero>
  );
}
