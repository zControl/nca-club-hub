import { Header2 } from "@/components/ui/typography";
import { TeamDetailsCard } from "@/pages/teams/components/TeamDetailsCard";
import { boysTeamData, girlsTeamData } from "@/resources/teamData";

export function TeamListTile() {
  return (
    <>
      <div className="py-2 bg-primary dark:bg-background">
        <Header2 color="secondary" className="text-center">
          Boys Teams
        </Header2>
        <div className="py-2 px-12 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center gap-y-4">
          {boysTeamData.map((team) => (
            <TeamDetailsCard key={team.name} {...team} />
          ))}
        </div>
      </div>
      <div className="py-2 bg-ncaSecondary dark:bg-background">
        <Header2 color="primary" className="text-center">
          Girls Teams
        </Header2>
        <div className="py-2 px-12 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center gap-y-4">
          {girlsTeamData.map((team) => (
            <TeamDetailsCard key={team.name} {...team} />
          ))}
        </div>
      </div>
    </>
  );
}
