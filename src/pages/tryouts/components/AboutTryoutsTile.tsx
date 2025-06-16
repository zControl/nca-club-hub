import { InfoCard } from "@/components/composites/InfoCard";
import { IceCream2 } from "lucide-react";

export function AboutTryoutsTile() {
  return (
    <>
      <div className="w-full py-4 px-8 flex flex-row justify-around">
        <InfoCard
          title="Step 1"
          description="Sign up for tryouts."
          icon={<IceCream2 />}
        >
          Tryouts are Free! Check dates and times.
        </InfoCard>
        <InfoCard
          title="Step 2"
          description="Show up at the proper date and time."
          icon={<IceCream2 />}
        >
          Wear cleats, shin guards, athletic wear. Arrive 15-20 minutes early.
          Check in at the NCA tent.
        </InfoCard>
        <InfoCard
          title="Step 3"
          description="Have a great time!"
          icon={<IceCream2 />}
        >
          Enjoy our interactive tryout with the coaches. Players are
          individually evaluated. Scores and results are shared within 72 hours.
        </InfoCard>
      </div>
    </>
  );
}
