import { ImageButton } from "@/components/composites/ImageButton";
import { Hero } from "@/components/ui/hero";
import button1 from "/hero/button-200x200-1.webp";
import button2 from "/hero/button-200x200-2.webp";
import button3 from "/hero/button-200x200-3.webp";
import button4 from "/hero/button-200x200-4.webp";

export function HeroAppButtons() {
  return (
    <Hero className="bg-nca-red">
      <div className="py-4 px-4 w-full flex flex-col sm:flex-row justify-evenly">
        <ImageButton
          url="/tryouts"
          src={button1}
          alt="NCA Red Blue Logo"
          text="Tryouts"
        />
        <ImageButton
          url="/investment"
          src={button2}
          alt="NCA Investment"
          text="Investment"
        />
        <ImageButton
          url="/rebelrec"
          src={button3}
          alt="Rebel Rec Logo"
          text="Rec Soccer"
        />
        <ImageButton url="/about" src={button4} alt="NCA Camps" text="Camps" />
      </div>
    </Hero>
  );
}
