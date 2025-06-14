import vertical1 from "@/assets/hero/hero-vertical-1.png";
import vertical2 from "@/assets/hero/hero-vertical-2.png";
import { ContentPane } from "@/components/common/page/ContentPane";
import { LinkText } from "@/components/composites/LinkText";
import { Button } from "@/components/ui/button";
import {
  Header1,
  Header2,
  Paragraph,
  TextBlock,
} from "@/components/ui/typography";
import { AgeGroupCalculator } from "@/features/ages/components/AgeGroupCalculator";
import { PricingDetails } from "@/pages/investment/components/PricingDetails";

export function PricingStructure() {
  return (
    <>
      <div className="flex flex-col">
        <ContentPane className="bg-nca-red mx-auto text-center w-full py-6">
          <Header1 className="text-nca-red-foreground">
            FULLY TRANSPARENT PRICING
          </Header1>
          <Header2 className="text-nca-red-foreground">
            NO CLUB FEE INCREASES
          </Header2>
        </ContentPane>
        <ContentPane className="bg-nca-blue mx-auto text-center w-full py-6">
          <Paragraph className="text-nca-blue-foreground text-center">
            Starting in 2026, age group cutoff dates will be Aug 1 - July 31 to
            align with US Club Soccer requirements.
            <LinkText
              href="https://usclubsoccer.org/age-group-cut-off-update-for-2026-27-season/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
            </LinkText>
          </Paragraph>
          <Paragraph className="text-nca-blue-foreground text-center">
            We offer a summer rebels program for U8-U10 players a full year
            program for U11-U15.
          </Paragraph>
          <div>
            <TextBlock className="text-2xl w-2/3 mx-auto">
              <div className="flex flex-col gap-2">
                <p>Unsure about your age group?</p>
                <AgeGroupCalculator />
              </div>
            </TextBlock>
          </div>
        </ContentPane>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <PricingDetails
            backgroundImage={vertical1}
            color="red"
            title="SUMMER REBELS"
            ageGroup="U8-U10"
            description="A great experience for only"
            price="$550"
            included="All-in, full cost, no add-ons!"
            coverage={[
              "3 summer tournaments",
              "Field, ref, coach costs",
              "AND",
              "Summer Kit",
            ]}
            kitItems={[
              "Jersey",
              "Shorts",
              "Socks",
              "Training Shirt",
              "Backpack",
            ]}
            action={
              <Button size={"huge"} variant={"secondary"}>
                Register Now
              </Button>
            }
          />
          <PricingDetails
            backgroundImage={vertical2}
            color="blue"
            title="FULL YEAR CLUB TEAM"
            ageGroup="U11-U15"
            description="An extreme value compared to other clubs"
            price="$1,935"
            included="All-in, full cost, no add-ons!"
            coverage={[
              "All summer tournaments",
              "All fall and spring league play",
              "Field, referee, coach costs",
              "State Cup Tournament",
              "AND",
              "Full Kit",
            ]}
            kitItems={[
              "Home / Away jersey and shorts",
              "Two pairs of socks",
              "Training top and pants",
              "Hoooded Sweatshirt",
              "Rain Jacket",
              "Backpack",
              "Ball",
            ]}
            action={
              <Button size={"huge"} variant={"secondary"}>
                Register Now
              </Button>
            }
          />
        </div>
      </div>
    </>
  );
}
