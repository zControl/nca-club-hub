import { ContentPane } from "@/components/common/page/ContentPane";
import { Tile } from "@/components/composites/Tile";
import { Header3, TextBlock } from "@/components/ui/typography";

export function GoodDeal() {
  return (
    <ContentPane wrapperClassName="bg-gray-200">
      <Tile
        title="Why is North County Alliance such a good deal?"
        description="It's true! The yearly club cost is about half of what you will find with most other clubs."
      >
        <Header3>We save money in three simple ways:</Header3>
        <ul>
          <li>We have passionate volunteer coaches.</li>
          <li>Our program doesn't own any real estate.</li>
          <li>We make choices with our families in mind.</li>
        </ul>
        <TextBlock>
          If we can provide a top notch experience and don't have to charge our
          families more money, we wont.
        </TextBlock>
      </Tile>
    </ContentPane>
  );
}
