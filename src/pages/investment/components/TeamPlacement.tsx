import { ContentPane } from "@/components/common/page/ContentPane";
import { InfoCircleCard } from "@/components/composites/InfoCircleCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header1 } from "@/components/ui/typography";
import BirthdayForm from "@/features/ages/components/BirthdayForm";
import { FileDownIcon, ScrollTextIcon, VolleyballIcon } from "lucide-react";

export function TeamPlacement() {
  return (
    <ContentPane wrapperClassName="bg-nca-blue">
      <Card>
        <Header1 className="uppercase text-center">
          Team Placement Process
        </Header1>
        <BirthdayForm />
        <CardContent className="grid grid-cols-1 sm:grid-cols-3 mx-auto items-center justify-around gap-8">
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
            description="Attend your tryout on the scheduled date"
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
        </CardContent>
      </Card>
    </ContentPane>
  );
}
