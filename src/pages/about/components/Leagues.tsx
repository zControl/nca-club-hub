import { Button } from "@/components/ui/button";
import { Header3, Paragraph, TextBlock } from "@/components/ui/typography";
import { Link } from "@tanstack/react-router";

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
            <img alt="US Youth Soccer" src="/leagues/us-youth-soccer.png" />
            <img alt="US Club Soccer" src="/leagues/us-club-soccer.png" />
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
          <p>TODO: Scale these images to make them the same size.</p>
          <div className="flex flex-row justify-center space-x-16">
            <img
              alt="Washington Youth Soccer"
              src="/leagues/wa-regional-club-league.png"
            />
            <img
              alt="Washington Premier League"
              src="/leagues/wa-premier-league.png"
            />
          </div>
          <TextBlock className="text-2xl font-semibold">
            North County Alliance Football Club is associated with US Club
            Soccer. Our teams play regular season games in the Washington
            Premier League in addition to selected tournaments."
          </TextBlock>
          <div className="px-12 py-6 flex flex-row space-x-8 justify-center">
            <Link to={"/join"}>
              <Button className="text-xl" variant="primary" size="lg">
                Join Us
              </Button>
            </Link>
            <Link to={"/teams"}>
              <Button className="text-xl" variant="primary" size="lg">
                View Active Teams
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
