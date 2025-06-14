import { ContentPane } from "@/components/common/page/ContentPane";
import { Header1, TextBlock } from "@/components/ui/typography";
import { getSeasonYear } from "@/utils/getSeasonYear";

export function ClubFees() {
  return (
    <ContentPane
      wrapperClassName="bg-nca-sky"
      contentClassName="bg-nca-sky flex flex-col items-center"
    >
      <Header1 className="text-nca-sky-foreground">{getSeasonYear()}</Header1>
      <Header1 className="text-nca-sky-foreground">Club Fees</Header1>
      <TextBlock className="text-2xl">
        North County Alliance was born out of a simple dream
        <p className="text-2xl font-bold">
          Make high quality select soccer available to families at affordable
          prices.
        </p>
      </TextBlock>
    </ContentPane>
  );
}
