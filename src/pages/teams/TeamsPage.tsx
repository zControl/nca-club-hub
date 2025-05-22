import { PageContainer } from "@/components/common/PageContainer";
import { TeamListTile } from "@/pages/teams/components/TeamListTile";
export function TeamsPage() {
  return (
    <PageContainer title="Teams" description="Our Current Teams">
      <div>TEAMSNAP TEAMS INTEGRATION FOR CURRENT TEAMS</div>
      <TeamListTile />
    </PageContainer>
  );
}
