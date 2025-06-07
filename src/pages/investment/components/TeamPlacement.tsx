import { ContentPane } from "@/components/common/page/ContentPane";
import { InfoCircleCard } from "@/components/composites/InfoCircleCard";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/ui/hero";
import { Header1 } from "@/components/ui/typography";
import { FileDownIcon, ScrollTextIcon, VolleyballIcon } from "lucide-react";

export function TeamPlacement() {
  return (
    <ContentPane
      wrapperClassName="bg-nca-blue"
      contentClassName="text-white p-2"
    >
      <Hero>
        <Header1 className="text-white uppercase mb-8">
          Team Placement Process
        </Header1>
        <div className="flex flex-col md:flex-row items-center justify-around gap-8">
          <InfoCircleCard
            icon={FileDownIcon}
            description="Review our guide to know what to expect"
            action={
              <Button variant={"highlight"} size={"sm"}>
                Tryout Guide
              </Button>
            }
          />
          <InfoCircleCard
            icon={VolleyballIcon}
            description="Attendyour tryout on the scheduled date"
            action={
              <Button variant={"highlight"} size={"sm"}>
                View Schedule
              </Button>
            }
          />
          <InfoCircleCard
            icon={ScrollTextIcon}
            description="After evaulation, get notified on team placement"
            action={
              <Button variant={"highlight"} size={"sm"}>
                Evaluation Criteria
              </Button>
            }
          />
        </div>
      </Hero>
    </ContentPane>
  );
}
