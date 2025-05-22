import { PageContainer } from "@/components/common/PageContainer";
import { GoalsTile } from "@/pages/mission/components/GoalsTile";
import { MissionTile } from "@/pages/mission/components/MissionTile";
export function MissionPage() {
  return (
    <PageContainer
      title="Mission"
      description="Our mission statement reflects our goals and core values."
    >
      <MissionTile />
      <GoalsTile />
    </PageContainer>
  );
}
