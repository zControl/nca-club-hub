import { LandingCard } from "@/pages/landing/components/LandingCard";

export function HeroInfoCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      <LandingCard header="Card Title" content="Card Description" />
      <LandingCard header="Card Title" content="Card Description" />
      <LandingCard header="Card Title" content="Card Description" />
    </div>
  );
}
