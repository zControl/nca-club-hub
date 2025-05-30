import { Tile } from "@/components/composites/Tile";
import { Paragraph, TextBlock } from "@/components/ui/typography";

export function MissionTile() {
  return (
    <Tile
      title="Mission"
      menu="Learn More"
      description="Our mission statement reflects our goals and core values."
    >
      <Paragraph>
        North County Alliance Football Club is a registered nonprofit
        organization with the State of Washington dedicated to the development
        of youth soccer in Whatcom County."
      </Paragraph>
      <TextBlock>
        Our mission is to create THE soccer club of choice in Whatcom County. We
        strive to create a culture where multi-sport athletes can thrive in a
        competitive environment. We promote effort, teamwork, and sportsmanship.
        We succeed when our players develop a lifelong love for the worlds most
        beautiful game."
      </TextBlock>
    </Tile>
  );
}
