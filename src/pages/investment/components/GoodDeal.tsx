import { ContentPane } from "@/components/common/page/ContentPane";
import { UnderConstruction } from "@/components/common/page/UnderConstruction";
import { Card, CardContent } from "@/components/ui/card";
import { Header1, Header3, TextBlock } from "@/components/ui/typography";

export function GoodDeal() {
  return (
    <ContentPane>
      <Card>
        <Header1 className="uppercase text-center max-w-3/4 mx-auto">
          WHY IS NORTH COUNTY ALLIANCE SUCH A GOOD DEAL?
        </Header1>
        <CardContent className=" mx-auto">
          <Header3>We save money in three simple ways:</Header3>
          <ul>
            <li>We have passionate volunteer coaches.</li>
            <li>Our program doesn't own any real estate.</li>
            <li>We make choices with our families in mind.</li>
          </ul>
          <TextBlock>
            If we can provide a top notch youth soccer experience and don't have
            to charge our families more money, we wont.
          </TextBlock>
          <div>
            <UnderConstruction
              items={[
                {
                  title: "Scholarship",
                  description: "Put scholarship info here.",
                },
              ]}
            />
          </div>
        </CardContent>
      </Card>
    </ContentPane>
  );
}
