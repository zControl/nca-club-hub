import { ContentPane } from "@/components/common/page/ContentPane";
import { BulletList } from "@/components/ui/bullet-list";
import { Header1, Header3, TextBlock } from "@/components/ui/typography";

export function GoodDeal() {
  return (
    <ContentPane
      wrapperClassName="bg-nca-red"
      contentClassName="bg-card rounded-md p-6 text-center flex flex-col items-center gap-6"
    >
      <Header1>WHY IS NORTH COUNTY ALLIANCE SUCH A GOOD DEAL?</Header1>
      <Header3 className="text-start">
        We save money in three simple ways:
      </Header3>
      <div className="text-start">
        <BulletList
          items={[
            "We have passionate volunteer coaches.",
            "Our program doesn't own any real estate.",
            "We make choices with our families in mind.",
          ]}
        />
      </div>
      <TextBlock className="text-xl font-semibold">
        If we can provide a top notch youth soccer experience and don't have to
        charge our families more money, we wont.
      </TextBlock>
    </ContentPane>
  );
}
