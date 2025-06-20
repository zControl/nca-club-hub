import { ContentPane } from "@/components/common/page/ContentPane";
import { BulletList } from "@/components/ui/bullet-list";
import { Separator } from "@/components/ui/separator";
import { Header1, Paragraph, TextBlock } from "@/components/ui/typography";
import { getSeasonYear } from "@/utils/getSeasonYear";

export function AboutTryoutsTile() {
  return (
    <ContentPane
      wrapperClassName="bg-nca-red"
      contentClassName="bg-card rounded-md p-6"
    >
      <Header1>{getSeasonYear()}</Header1>
      <Header1>TRYOUTS</Header1>
      <Paragraph>
        The Tryout... It can be exciting. It can be nerve-racking. It can be
        stressful. It can be rewarding.
      </Paragraph>
      <Paragraph>
        A player's first introduction to select soccer is The Tryout. For a
        young athlete the pressure of being evaluated, of being tested- is a
        rite of passage into the next level of their development. However, this
        does not need to be an overwhelming experience. It can be one that
        challenges them and provides direction in where there is still the most
        potential to improve their game.
      </Paragraph>
      <TextBlock className="text-xl font-semibold">
        NC Alliance wants to make the first experience with the club a positive
        one. We want to provide an opportunity for all players to grow into
        complete soccer players.
      </TextBlock>
      <Paragraph>
        Each player is provided with an individual evaluation sheet to give them
        actionable feedback from the coaches. Our evaluation focuses on 4 main
        components of their game:
      </Paragraph>
      <Separator className="my-4 bg-nca-red" />
      <Paragraph>
        <BulletList
          items={[
            "Attitude and Effort: Does the player show a positive attitude, work ethic, and willingness to learn?",
            "Physical Attributes: What is the player's speed, strength, and endurance like?",
            "Technical Skills: How well does the player control the ball, pass, and shoot?",
            "Tactical Awareness: Does the player understand positioning, spacing, and decision-making?",
          ]}
        />
      </Paragraph>
      <Separator className="my-4 bg-nca-red" />
      <Paragraph>
        Players will be contacted within 4 days after the final tryout date with
        the results. We ask that you are prepared to accept a roster spot within
        24 hours of receiving an invitation. This allows our coaches to move
        forward with getting the team prepared for the year and ensure all
        players are properly placed.
      </Paragraph>
    </ContentPane>
  );
}
