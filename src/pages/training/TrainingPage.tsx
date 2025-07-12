import { ContentPane } from "@/components/common/page/ContentPane";
import { PageContainer } from "@/components/common/page/PageContainer";
import { SessionBoard } from "@/pages/training/components/SessionBoard";

export function TrainingPage() {
  return (
    <PageContainer title="Training" description="Training Session Planner">
      <ContentPane contentClassName="max-w-full px-8">
        <SessionBoard />
      </ContentPane>
    </PageContainer>
  );
}
