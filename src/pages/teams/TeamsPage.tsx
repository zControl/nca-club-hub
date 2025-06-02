import { PageContainer } from "@/components/common/page/PageContainer";
import { UnderConstruction } from "@/components/common/page/UnderConstruction";
import { TeamListTile } from "@/pages/teams/components/TeamListTile";
export function TeamsPage() {
  return (
    <PageContainer title="Teams" description="Our Current Teams">
      <UnderConstruction
        items={[
          {
            title: "Teamsnap API Integration",
            description:
              "Show the teams, both girls teams and boys teams.  Link to WPL and teamsnap.",
          },
        ]}
      />
      <TeamListTile />
    </PageContainer>
  );
}
