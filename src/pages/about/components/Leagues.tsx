import { ImageBlock } from "@/components/composites/ImageBlock";
import { Header3, Paragraph, TextBlock } from "@/components/ui/typography";

export function Leagues() {
  return (
    <>
      <div className="px-12 mt-4 flex flex-col items-center">
        <div className="max-w-4xl">
          <Header3>NATIONAL SOCCER ORGANIZATIONS</Header3>
          <Paragraph>
            There are two main competitive youth soccer organizations in the
            United States: US Youth Soccer and US Club Soccer. Both provide
            equal opportunity all the way up to the National Team level. Under
            the umbrella of these programs players are able to play recreational
            soccer, select soccer and try out for their state's elite and
            olympic teams.
          </Paragraph>
          <div className="flex flex-row justify-center space-x-16">
            <ImageBlock
              alt="US Youth Soccer"
              src="/leagues/us-youth-soccer.png"
              width="300"
              height="200"
            />
            <ImageBlock
              alt="US Club Soccer"
              src="/leagues/us-club-soccer.png"
              width="300"
              height="200"
            />
          </div>

          <Header3>League Associations</Header3>
          <Paragraph>
            In the state of Washington there are two playing associations
            affiliated with each of the national groups. It is under these two
            channels that teams form and compete in league and tournament play.
            Teams do not play league games against teams and clubs from the
            opposite association but may play in the same non-league
            tournaments.
          </Paragraph>
          <div className="flex flex-row justify-center space-x-16">
            <ImageBlock
              alt="Washington Youth Soccer"
              src="/leagues/wa-regional-club-league.png"
              width="300"
              height="200"
            />
            <ImageBlock
              alt="Washington Premier League"
              src="/leagues/wa-premier-league.png"
              width="300"
              height="200"
            />
          </div>
          <TextBlock className="text-2xl font-semibold">
            North County Alliance Football Club is associated with US Club
            Soccer. Our teams play regular season games in the Washington
            Premier League in addition to selected tournaments."
          </TextBlock>
        </div>
      </div>
    </>
  );
}
