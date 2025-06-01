import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Header3, Paragraph } from "@/components/ui/typography";

const equipmentPoints = [
  "Own soccer ball (Size 3 for ages x-y and Size 4 for ages y-x",
  "Soccer specific cleats and shinguards",
  "Socks that cover up to the knee and the entire shinguard.",
  "Water bottle to bring to each training and game",
  "Weather appropiate shorts or pants",
  "Jersey will be provided as part of registration",
];

const coedPoints = ["Age 3", "Age 4"];

const genderPoints = [
  "Age 5 / Kindergarten",
  "1st and 2nd grade",
  "3rd and 4th grade",
  "5th and 6th grade",
];

const playersPoints = [
  "Age 3/4: 4v4 with no goalies",
  "Age 5/K: 4v4 with no goalies",
  "1/2 grade: 7v7 with goalies",
  "3/4 grade: 7v7 with goalies",
  "5/6 grade: 7v7 with goalies",
];

const coachesPoints = [
  "Waived player registration fee",
  "Full training session plans with drills and instructions",
  "Training equipment (cones and pinnies)",
];

export function RebelRecFaqAccordian() {
  return (
    <section className="bg-ncaDarkBlue">
      <div className="px-4 mx-auto md:w-3/4 sm:w-full bg-muted border-x-8 border-x-ncaDarkGray">
        <Accordion type="single" collapsible>
          <AccordionItem value="what-is-it">
            <AccordionTrigger>
              <Header3>What is recreational soccer?</Header3>
            </AccordionTrigger>
            <AccordionContent>
              <Paragraph>
                Our recreational soccer program is a program that is open to all
                players from age 3 to those in 6th grade. There are no tryouts
                or cuts. You sign your players up and they are placed on a team.
              </Paragraph>
              <Paragraph>
                The program is a 6-week season that will consist of team
                practices, team games and an end of the season tournament.
              </Paragraph>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="how-many-times">
            <AccordionTrigger>
              <Header3>How many times a week do they play?</Header3>
            </AccordionTrigger>
            <AccordionContent>
              <Paragraph>
                Our season is designed to provide every player the foundational
                training and skills of soccer as well as keep it fun and
                entertaining for the kids (and parents)!"
              </Paragraph>
              <Paragraph>
                Every week there will be two days of playing- one during the
                week and one on Saturday. The day during the week will be
                attempted to be the same for the entire season depending on
                their age division.
              </Paragraph>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="equipment">
            <AccordionTrigger>
              <Header3>What equipment will my player need to play?</Header3>
            </AccordionTrigger>
            <AccordionContent>
              <Paragraph>
                The following items are highly recommended to participate and
                keep your player safe and in the best position to learn."
              </Paragraph>
              <div className="mt-2">
                {equipmentPoints && (
                  <ul className="list-disc list-inside text-lg px-8">
                    {equipmentPoints.map((equipmentPoint) => (
                      <li key={equipmentPoint}>{equipmentPoint}</li>
                    ))}
                  </ul>
                )}
              </div>
              <Paragraph>
                We also recommend that you visit Soccer City in Bellingham (next
                to Best Buy) to find all your soccer equipment needs. They have
                been a strong supporter of North County Alliance and are one of
                the reasons we can offer registration fees so low.
              </Paragraph>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="divisions">
            <AccordionTrigger>
              <Header3>How are the age divisions split up?</Header3>
            </AccordionTrigger>
            <AccordionContent>
              <Paragraph>
                We group players by age to encourage fair balance of play and
                levels of development.
              </Paragraph>
              <Paragraph className="font-semibold">
                Tiny rebels play in a coed division"
              </Paragraph>
              <div className="mt-2">
                {coedPoints && (
                  <ul className="list-disc list-inside text-lg px-8">
                    {coedPoints.map((coedPoint) => (
                      <li key={coedPoint}>{coedPoint}</li>
                    ))}
                  </ul>
                )}
              </div>
              <Paragraph className="font-semibold">
                Older kids play in separate boys and girls divisions that are
                divided as follows"
              </Paragraph>
              <div className="mt-2">
                {genderPoints && (
                  <ul className="list-disc list-inside text-lg px-8">
                    {genderPoints.map((genderPoint) => (
                      <li key={genderPoint}>{genderPoint}</li>
                    ))}
                  </ul>
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="roster">
            <AccordionTrigger>
              <Header3>
                How many players are on each team and how many play at once?
              </Header3>
            </AccordionTrigger>
            <AccordionContent>
              <Paragraph>
                Roster sizes depend on the number of registrations and coaching
                signups. We generally try to limit the roster size on each team
                to less than 3 subs.
              </Paragraph>
              <Paragraph>
                To help encourage that all players are active and involved in
                the games we set different playing formations per age division:"
              </Paragraph>
              <div className="mt-2">
                {playersPoints && (
                  <ul className="list-disc list-inside text-lg px-8">
                    {playersPoints.map((playersPoint) => (
                      <li key={playersPoint}>{playersPoint}</li>
                    ))}
                  </ul>
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="coaches">
            <AccordionTrigger>
              <Header3>Who are the coaches?</Header3>
            </AccordionTrigger>
            <AccordionContent>
              <Paragraph>
                Like most recreational soccer programs, Rebel Rec is coached by
                parent or community volunteers. Each team will need an assigned
                coach to help manage training sessions and games. We look for a
                parent of one of the players on the team to volunteer.
              </Paragraph>
              <Paragraph>
                To make it easy on our volunteer coaches we offer a few things:
              </Paragraph>
              <div className="mt-2">
                {coachesPoints && (
                  <ul className="list-disc list-inside text-lg px-8">
                    {coachesPoints.map((coachesPoint) => (
                      <li key={coachesPoint}>{coachesPoint}</li>
                    ))}
                  </ul>
                )}
              </div>
              <Paragraph>
                We also encourage our older NCA players in our club program to
                take the opportunity to teach the game that they love. This
                gives our high school aged players a great way to give back to
                the community.
              </Paragraph>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="friend-request">
            <AccordionTrigger>
              <Header3>
                Can I request that my child be placed on a team with their
                friends?
              </Header3>
            </AccordionTrigger>
            <AccordionContent>
              <Paragraph>Yes, you can</Paragraph>
              <Paragraph>
                They can enter in their friends name during the registration
                process but there are a few rules around requests to avoid
                confusion and teams being unevenly placed.
              </Paragraph>
              <div className="mt-2">
                {coachesPoints && (
                  <ul className="list-disc list-inside text-lg px-8">
                    {coachesPoints.map((coachesPoint) => (
                      <li key={coachesPoint}>{coachesPoint}</li>
                    ))}
                  </ul>
                )}
              </div>
              <Paragraph>
                We also encourage our older NCA players in our club program to
                take the opportunity to teach the game that they love. This
                gives our high school aged players a great way to give back to
                the community.
              </Paragraph>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
