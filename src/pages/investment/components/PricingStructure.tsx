import vertical1 from "@/assets/hero/hero-vertical-1.png";
import vertical2 from "@/assets/hero/hero-vertical-2.png";
import { ContentPane } from "@/components/common/page/ContentPane";
import { Button } from "@/components/ui/button";
import { Header1, Header2 } from "@/components/ui/typography";
import { PricingDetails } from "@/pages/investment/components/PricingDetails";
import { calculateAgeGroup } from "@/utils/getSeasonYear";

export function PricingStructure() {
  const birthdate = "2015-07-30";
  const ageGroup = calculateAgeGroup(birthdate);
  return (
    <>
      <div className="flex flex-col">
        <ContentPane className="bg-nca-red mx-auto text-center w-full py-6">
          <Header1 className="text-white">FULLY TRANSPARENT PRICING</Header1>
          <Header2 className="text-white">NO CLUB FEE INCREASES</Header2>
        </ContentPane>
        <ContentPane className="bg-nca-blue mx-auto text-center w-full py-6">
          <p className="text-white">{ageGroup}</p>
        </ContentPane>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <PricingDetails
            backgroundImage={vertical1}
            color="red"
            birthYear="2018, 2017, 2016"
            description="A great price of only"
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
            birthYear="2007-2015"
            description="An extreme value compared to other clubs."
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
