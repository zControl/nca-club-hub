import { LinkButton } from "@/components/composites/LinkButton";
import { LinkText } from "@/components/composites/LinkText";
import { Image } from "@/components/ui/image";
import { Header3, Paragraph, TextBlock } from "@/components/ui/typography";

export function Leagues() {
  return (
    <>
      <div className="px-12 mt-4 flex flex-col items-center">
        <div className="max-w-4xl">
          <Header3>NATIONAL SOCCER ORGANIZATIONS</Header3>
          <Paragraph>
            The two main national soccer programs are
            <LinkText href="https://www.usyouthsoccer.org/" openInNewTab>
              US Youth Soccer
            </LinkText>
            and
            <LinkText href="https://www.usclubsoccer.org/" openInNewTab>
              US Club Soccer.
            </LinkText>
          </Paragraph>
          <Paragraph>
            Both provide equal opportunity all the way up to the National Team
            level. Under the umbrella of these programs players are able to play
            recreational soccer, select soccer and try out for their state's
            elite and olympic teams.
          </Paragraph>
          <div className="flex flex-col items-center  md:flex-row md:justify-evenly py-8">
            <Image
              alt="US Youth Soccer"
              src="/leagues/us-youth-soccer.png"
              responsive={true}
            />
            <Image
              alt="US Club Soccer"
              src="/leagues/us-club-soccer.png"
              responsive={true}
            />
          </div>

          <Header3>Washington State League Associations</Header3>
          <Paragraph>
            In the state of Washington there are two playing associations
            affiliated with each of the national groups:
            <LinkText
              href="https://washingtonyouthsoccer.org/leagues/regional-club-league/"
              openInNewTab
            >
              Regional Club League
            </LinkText>
            and
            <LinkText href="https://wpl-soccer.com/leagues/" openInNewTab>
              Washington Premier League.
            </LinkText>
          </Paragraph>
          <Paragraph>
            It is under these two channels that youth teams form and compete in
            both league and tournament play. Teams do not play league games
            clubs from the opposite association. However, they may play in the
            same non-league tournaments throughout the year.
          </Paragraph>
          <div className="flex flex-col items-center md:flex-row md:justify-evenly py-8">
            <Image
              alt="Regional Club League"
              src="/leagues/wa-regional-club-league.png"
              height={180}
              width={180}
            />
            <Image
              alt="Washington Premier League"
              src="/leagues/wa-premier-league.png"
              height={200}
              width={200}
            />
          </div>
          <TextBlock className="text-2xl font-semibold">
            North County Alliance Football Club is associated with US Club
            Soccer. Our teams play regular fall and spring season games in the
            Washington Premier League in addition to various tournaments.
          </TextBlock>
          <div className="px-12 py-6 flex flex-row justify-evenly">
            <LinkButton
              href="/join"
              variant="primary"
              size={"lg"}
              className="text-xl px-8"
            >
              Join Us
            </LinkButton>
            <LinkButton
              href="/teams"
              variant="primary"
              size={"lg"}
              className="text-xl px-8"
            >
              Active Teams
            </LinkButton>
          </div>
        </div>
      </div>
    </>
  );
}
