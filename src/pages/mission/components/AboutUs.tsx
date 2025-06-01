import { ContentPane } from "@/components/common/page/ContentPane";
import { Button } from "@/components/ui/button";
import {
  Header1,
  Header3,
  Paragraph,
  TextBlock,
} from "@/components/ui/typography";
import { Link } from "@tanstack/react-router";

export function AboutUs() {
  return (
    <ContentPane wrapperClassName="bg-nca-blue" contentClassName="bg-card">
      <Header1>How it started</Header1>
      <Paragraph>
        North County Alliance FC began with a group of enthusiastic parents
        taking a different approach to competitive youth soccer. The options for
        families in Whatcom County were limited and there appeared to be a huge
        need for a more local and affordable option.
      </Paragraph>
      <TextBlock className="text-xl font-semibold">
        Seeing the obvious demand, a new club was formed.
      </TextBlock>
      <Paragraph>
        North County Alliance was born in ??2016??? with ### teams. Since then,
        we have grown consistently and now have over ### teams. In ??2020??,
        <Button variant="link" className="text-highlight">
          Rebel Rec
        </Button>
        was created to allow even more youth the opportunity to fall in love
        with the beautiful game.
      </Paragraph>
      <Paragraph>
        By offering a local select soccer option in North County we are
        providing thousands of families the missing option that they have been
        looking for.
      </Paragraph>
      <Header3>Our Founders</Header3>
      <div className="flex flex-row justify-center align-top">
        <img
          alt="Jerimy"
          src="/coaches/jerimy-s.png"
          width="150"
          height="150"
        />
        <Paragraph>
          Coach Jerimy and Coach Darren come with over 30 years of combined
          youth soccer coaching experience. Their passion and commitment to the
          game has resulted in success for players at all levels of youth
          soccer. They work to achieve the club's goal of attracting passionate
          youth to the world's beautiful game.
        </Paragraph>
        <img
          alt="Darren"
          src="/coaches/darren-v.png"
          width="150"
          height="150"
        />
      </div>
      <div className="flex flex-col justify-center align-top">
        <TextBlock className="text-xl font-semibold">
          Creating excitement around team success and individual development
          will be the foundation of an elevated youth system for all families in
          Whatcom County."
        </TextBlock>
        <div className="px-12 py-6 flex flex-row space-x-8 justify-center">
          <Link to={"/mission"}>
            <Button className="text-xl" variant="primary" size="lg">
              Our Mission
            </Button>
          </Link>
          <Link to={"/investment"}>
            <Button className="text-xl" variant="primary" size="lg">
              The Investment
            </Button>
          </Link>
        </div>
      </div>
      <div className="w-full py-8 bg-primary text-center align-middle text-secondary text-4xl font-extrabold">
        LOCAL | COMPETITIVE | COMMITTED | COST-EFFECTIVE
      </div>
    </ContentPane>
  );
}
