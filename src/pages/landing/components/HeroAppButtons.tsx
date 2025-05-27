import { ImageButton } from "@/components/composites/ImageButton";
import { Hero } from "@/components/ui/hero";

export function HeroAppButtons() {
  return (
    <Hero className="bg-nca-red">
      <div className="py-4 px-4 w-full flex flex-col sm:flex-row justify-evenly">
        <ImageButton
          url="/tryouts"
          src="/hero/button-200x200-1.webp"
          alt="NCA Red Blue Logo"
          text="Tryouts"
        />
        <ImageButton
          url="/investment"
          src="/hero/button-200x200-2.webp"
          alt="NCA Investment"
          text="Investment"
        />
        <ImageButton
          url="/rebelrec"
          src="hero/button-200x200-3.webp"
          alt="Rebel Rec Logo"
          text="Rec Soccer"
        />
        <ImageButton
          url="/about"
          src="hero/button-200x200-4.webp"
          alt="NCA Camps"
          text="Camps"
        />
      </div>
    </Hero>
  );
}
