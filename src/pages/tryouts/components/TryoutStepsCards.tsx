import background from "@/assets/hero/hero-carousel-3.webp";
import { InfoCard } from "@/components/composites/InfoCard";
import { BulletList } from "@/components/ui/bullet-list";
import { Hero } from "@/components/ui/hero";
import { CheckCheckIcon } from "lucide-react";

export function TryoutStepsCards() {
  return (
    <Hero backgroundImageUrl={background} className="opacity-90">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-2 opacity-90">
        <InfoCard
          title="STEP 1"
          description="Sign Up"
          icon={<CheckCheckIcon />}
        >
          <BulletList
            items={[
              "Tryouts are completely FREE to attend",
              "Find the correct session for your age group",
              "Take the first step toward joining the alliance!",
            ]}
          />
        </InfoCard>
        <InfoCard
          title="STEP 2"
          description="Attend with your age group"
          icon={<CheckCheckIcon />}
        >
          <BulletList
            items={[
              "Wear cleats and shin guards",
              "Stay hydrated - bring a water bottle",
              "Check in at the NCA tent 15 minutes early",
            ]}
          />
        </InfoCard>
        <InfoCard
          title="STEP 3"
          description="Have a great time!"
          icon={<CheckCheckIcon />}
        >
          <BulletList
            items={[
              "Bring your best effort and energy",
              "Coaches evaluate effort, skills and teamwork",
              "Results are shared within 72 hours after the last tryout",
            ]}
          />
        </InfoCard>
      </div>
    </Hero>
  );
}
