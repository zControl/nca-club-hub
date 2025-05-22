import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

type TeamDetails = {
  name: string;
  division: string;
  longName: string;
  season: string;
  league: string;
  coaches?: { name: string; email: string }[];
};

export function TeamDetailsCard(props: TeamDetails) {
  return (
    <Card className="md:w-[360px] sm:w-[300] px-4 py-4 space-y-2 border-2 border-ncaSecondary shadow-2xl">
      <CardTitle className="tracking-wide">
        {props.name} ( {props.division} )
      </CardTitle>
      <CardDescription className="text-md">{props.longName}</CardDescription>
      <CardDescription>
        {props.season} - {props.league}
      </CardDescription>
      <div>
        {props.coaches?.map((coach, index) => (
          <div key={index}>
            {coach.name}
            <Button variant="link" key={coach.email}>
              {coach.email}
            </Button>
          </div>
        ))}
        {!props.coaches && <div>No coaches listed</div>}
      </div>
      <div className="flex flex-row justify-around py-2">
        {/* TODO: Add links via props for the league and schedule */}
        <Button variant="primary">League Page</Button>
        <Button variant="primary">Schedule</Button>
      </div>
    </Card>
  );
}
