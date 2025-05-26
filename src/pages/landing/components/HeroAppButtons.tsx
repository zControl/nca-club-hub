import { ImageButton } from "@/components/composites/ImageButton";
import { Hero } from "@/components/ui/hero";

export function HeroAppButtons() {
  return (
    <Hero className="bg-nca-red">
      <p className="text-nca-red-foreground">
        TODO: Replace with actual app buttons
      </p>
      <div className="py-8 px-4 w-full flex flex-col sm:flex-row justify-evenly">
        <ImageButton
          url="/tryouts"
          src="/logos/nca-logo-blue-red.png"
          alt="NCA Red Blue Logo"
          text="Tryouts"
        />
        <ImageButton
          url="/investment"
          src="/logos/nca-logo-blue-red.png"
          alt="NCA Red Blue Logo"
          text="Investment"
        />
        <ImageButton
          url="/rebelrec"
          src="/logos/nca-logo-blue-red.png"
          alt="Rebel Rec Logo"
          text="Rec Soccer"
        />
        <ImageButton
          url="/about"
          src="/logos/nca-logo-blue-red.png"
          alt="NCA Red Blue Logo"
          text="Camps (coming soon)"
        />
      </div>
    </Hero>
  );
}
