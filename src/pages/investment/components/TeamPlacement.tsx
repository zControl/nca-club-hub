import { ContentPane } from "@/components/common/page/ContentPane";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Hero } from "@/components/ui/hero";
import { Header1 } from "@/components/ui/typography";
import { FileDownIcon, ScrollTextIcon, VolleyballIcon } from "lucide-react";

interface CircleIconCardProps {
  icon: React.ReactNode;
  children: React.ReactNode;
}
const CircleIconCard = ({ icon, children }: CircleIconCardProps) => {
  return (
    <Card className="border-nca-red rounded-full h-72 w-72 border-4">
      <CardHeader className="flex items-center justify-center">
        {icon}
      </CardHeader>
      <CardContent>
        <div className="w-full text-center line-clamp-4">{children}</div>
      </CardContent>
    </Card>
  );
};

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
          <CircleIconCard icon={<FileDownIcon size={128} />}>
            Review our Tryout Guide
            <Button variant={"highlight"} size={"sm"}>
              Download
            </Button>
          </CircleIconCard>
          <CircleIconCard icon={<VolleyballIcon size={128} />}>
            Attend your tryout dates
            <Button variant={"highlight"} size={"sm"}>
              View Schedule
            </Button>
          </CircleIconCard>
          <CircleIconCard icon={<ScrollTextIcon size={128} />}>
            Get notified on team placement
            <Button variant={"highlight"} size={"sm"}>
              Evaluation Criteria
            </Button>
          </CircleIconCard>
        </div>
      </Hero>
    </ContentPane>
  );
}
