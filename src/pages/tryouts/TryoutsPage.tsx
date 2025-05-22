import { PageContainer } from "@/components/common/PageContainer";
import { AboutTryoutsTile } from "@/pages/tryouts/components/AboutTryoutsTile";
import { TryoutExpectationsTile } from "@/pages/tryouts/components/TryoutExpectationsTile";
export function TryoutsPage() {
  return (
    <PageContainer
      title="Tryouts"
      description="Be a part of a competitive team"
    >
      <AboutTryoutsTile />
      <TryoutExpectationsTile />
    </PageContainer>
  );
}
