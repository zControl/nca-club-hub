import { Separator } from "@/components/ui/separator";
import { BlockQuote, Header3, Paragraph } from "@/components/ui/typography";
import {
  GoalCard,
  GoalCardContent,
} from "@/pages/mission/components/GoalsImageCard";

export function GoalsTile() {
  return (
    <>
      <div className="p-4 bg-background flex flex-row justify-around items-top space-x-6">
        <div className="bg-background max-w-4xl">
          <Header3 color="secondary">Our Goals</Header3>
          <Separator />
          <GoalCard>
            <GoalCardContent className="px-4 py-4 flex flex-row justify-start align-middle space-x-8">
              <img
                src={"/kid_soccer1.jpeg"}
                alt="Kid Soccer"
                width={400}
                height={400}
              />
              <div>
                <BlockQuote>
                  Create an option tailored for the multi-sport athlete to play
                  competitive soccer in Whatcom County"
                </BlockQuote>
                <Paragraph>
                  This will be a longer paragaph that explains more why this
                  goal is important, and our philopophy about it."
                </Paragraph>
              </div>
            </GoalCardContent>
          </GoalCard>
          <Separator />
          <GoalCard>
            <GoalCardContent className="px-4 py-4 flex flex-row justify-start align-middle space-x-8">
              <div>
                <BlockQuote>
                  To educate and develop young players, focusing on skill
                  development through technical and tactical training. "
                </BlockQuote>
                <Paragraph>
                  This will be a longer paragaph that explains more why this
                  goal is important, and our philopophy about it."
                </Paragraph>
              </div>
              <img
                src={"/kid_soccer1.jpeg"}
                alt="Kid Soccer"
                height={400}
                width={400}
              />
            </GoalCardContent>
          </GoalCard>
          <Separator />
          <GoalCard>
            <GoalCardContent className="px-4 py-4 flex flex-row justify-start align-middle space-x-8">
              <img
                src={"/kid_soccer1.jpeg"}
                alt="Kid Soccer"
                width={400}
                height={400}
              />
              <div>
                <BlockQuote>
                  To encourage team unity, success principles and a winning
                  attitude that can be applied in all areas of life."
                </BlockQuote>
                <Paragraph>
                  This will be a longer paragaph that explains more why this
                  goal is important, and our philopophy about it."
                </Paragraph>
              </div>
            </GoalCardContent>
          </GoalCard>
          <Separator />
          <GoalCard>
            <GoalCardContent className="px-4 py-4 flex flex-row justify-start align-middle space-x-8">
              <div>
                <BlockQuote>
                  To attract like-minded soccer coaches who are knowledgeable
                  and experienced in the game of soccer and equally passionate
                  about physical, mental and emotional development of the youth
                  athlete."
                </BlockQuote>
                <Paragraph>
                  This will be a longer paragaph that explains more why this
                  goal is important, and our philopophy about it."
                </Paragraph>
              </div>
              <img
                src={"/kid_soccer1.jpeg"}
                alt="Kid Soccer"
                height={400}
                width={400}
              />
            </GoalCardContent>
          </GoalCard>
          <Separator />
          <GoalCard>
            <GoalCardContent className="px-4 py-4 flex flex-row justify-start align-middle space-x-8">
              <img
                src={"/kid_soccer1.jpeg"}
                alt="Kid Soccer"
                width={400}
                height={400}
              />
              <div>
                <BlockQuote>
                  To provide a proven path to higher level opportunities for the
                  elite players who are committed to full development."
                </BlockQuote>
                <Paragraph>
                  "This will be a longer paragaph that explains more why this
                  goal is important, and our philopophy about it."
                </Paragraph>
              </div>
            </GoalCardContent>
          </GoalCard>
        </div>
      </div>
    </>
  );
}
