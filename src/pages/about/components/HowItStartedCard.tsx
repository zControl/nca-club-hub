import { ContentPane } from "@/components/common/page/ContentPane";
import { LinkButton } from "@/components/composites/LinkButton";
import { LinkText } from "@/components/composites/LinkText";
import { Separator } from "@/components/ui/separator";
import {
  Header1,
  Header3,
  Paragraph,
  TextBlock,
} from "@/components/ui/typography";

export function HowItStartedCard() {
  return (
    <ContentPane wrapperClassName="bg-nca-blue" contentClassName="bg-card p-6">
      <Header1>How it started</Header1>
      <Paragraph>
        North County Alliance FC began with a group of enthusiastic and
        like-minded parents taking a different approach to competitive youth
        soccer. The options for families in Whatcom County were limited and
        there appeared to be a huge need for a more local and affordable option
        for the community.
      </Paragraph>
      <TextBlock className="text-xl font-semibold">
        Seeing the obvious demand, a new club was formed.
      </TextBlock>
      <Paragraph>
        North County Alliance was born in 2016 with ### teams. Since then, our
        club has grown consistently and we are now proud to have over ### teams.
        In 2019, our
        <LinkText href="/rebel-rec">Rebel Rec Program</LinkText>
        was created to allow even more opportunites to fall in love with the
        beautiful game. By offering a local select soccer option in North County
        we are providing families the missing option that they have been looking
        for.
      </Paragraph>
      <Separator className="my-4 bg-nca-blue" />
      <Header3>Our Founders</Header3>
      <div className="flex flex-row justify-center align-top">
        <Paragraph>
          Coach Jerimy and Coach Darren come with over 30 years of combined
          youth soccer coaching experience. Their passion and commitment to the
          game has resulted in success for players at all levels of youth
          soccer. They work to achieve the club's goal of attracting passionate
          youth to the world's beautiful game.
        </Paragraph>
      </div>
      <div className="flex flex-col justify-center align-top">
        <TextBlock className="text-xl font-semibold">
          Creating excitement around team success and individual development
          will be the foundation of an elevated youth system for all families in
          Whatcom County.
        </TextBlock>
        <div className="px-12 py-6 flex flex-row space-x-8 justify-center">
          <LinkButton
            variant="highlight"
            size="lg"
            href={"/mission"}
            className="text-xl"
          >
            Our Mission
          </LinkButton>
          <LinkButton
            variant="highlight"
            size="lg"
            href={"/contact"}
            className="text-xl"
          >
            Contact Us
          </LinkButton>
          <LinkButton
            variant="highlight"
            size="lg"
            href={"/investment"}
            className="text-xl"
          >
            The Investment
          </LinkButton>
        </div>
      </div>
      <div className="w-full py-8 bg-primary text-center align-middle text-secondary text-4xl font-extrabold">
        LOCAL | COMPETITIVE | COMMITTED | COST-EFFECTIVE
      </div>
    </ContentPane>
  );
}
