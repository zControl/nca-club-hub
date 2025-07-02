import { ContentPane } from "@/components/common/page/ContentPane";
import { PageContainer } from "@/components/common/page/PageContainer";
import { DraggableCanvas } from "@/pages/training/components/DraggableCanvas";

export function TrainingPage() {
  return (
    <PageContainer title="Training" description="Our Current Training Sessions">
      <p>Training sessions will be listed here soon.</p>
      <p>Stay tuned for updates!</p>
      <ContentPane wrapperClassName="bg-nca-blue">
        <DraggableCanvas />
      </ContentPane>
    </PageContainer>
  );
}
