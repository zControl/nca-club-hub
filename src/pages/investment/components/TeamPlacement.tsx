import { ContentPane } from "@/components/common/page/ContentPane";
import { InfoCircleCard } from "@/components/composites/InfoCircleCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header1, TextBlock } from "@/components/ui/typography";
import { AgeGroupCalculator } from "@/features/ages/components/AgeGroupCalculator";
import { FileDownIcon, ScrollTextIcon, VolleyballIcon } from "lucide-react";

export function TeamPlacement() {
  return (
    <ContentPane wrapperClassName="bg-nca-blue">
      <Card>
        <div>
          <TextBlock className="text-2xl w-2/3 mx-auto">
            <div className="flex flex-col gap-2">
              <p>Unsure about your age group?</p>
              <p>Check out out our calculator.</p>
              <AgeGroupCalculator />
            </div>
          </TextBlock>
        </div>
        <Header1 className="uppercase text-center">
          Team Placement Process
        </Header1>
        <CardContent className="grid grid-cols-1 sm:grid-cols-3 mx-auto items-center justify-around gap-8">
          <InfoCircleCard
            icon={FileDownIcon}
            description="Review our guide to know what to expect"
            action={
              <Button variant={"secondary"} size={"sm"}>
                Tryout Guide
              </Button>
            }
          />
          <InfoCircleCard
            icon={VolleyballIcon}
            description="Attend your tryout on the scheduled date"
            action={
              <Button variant={"secondary"} size={"sm"}>
                View Schedule
              </Button>
            }
          />
          <InfoCircleCard
            icon={ScrollTextIcon}
            description="After evaulation, get notified on team placement"
            action={
              <Button variant={"secondary"} size={"sm"}>
                Evaluation Criteria
              </Button>
            }
          />
        </CardContent>
      </Card>
    </ContentPane>
  );
}
