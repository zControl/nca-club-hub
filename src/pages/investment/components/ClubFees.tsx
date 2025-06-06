import { ContentPane } from "@/components/common/page/ContentPane";
import { Hero } from "@/components/ui/hero";
import { Header1, TextBlock } from "@/components/ui/typography";
import { getSeasonYear } from "@/utils/getSeasonYear";

export function ClubFees() {
  return (
    <ContentPane
      wrapperClassName="bg-nca-sky"
      contentClassName="bg-nca-sky text-nca-red p-2"
    >
      <Hero>
        <Header1>{getSeasonYear()}</Header1>
        <Header1>Club Fees</Header1>
        <TextBlock className="bg-nca-sky border border-nca-blue text-2xl text-nca-blue">
          North County Alliance was born out of a simple dream: make high
          quality select soccer available to families at reasonable prices.
        </TextBlock>
      </Hero>
    </ContentPane>
  );
}
