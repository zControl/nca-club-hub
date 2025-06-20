import { PageContainer } from "@/components/common/page/PageContainer";
import { PageSections } from "@/components/common/page/PageSections";
import { AboutTryoutsTile } from "@/pages/tryouts/components/AboutTryoutsTile";
import { TryoutScheduleTile } from "@/pages/tryouts/components/TryoutScheduleTile";
import { TryoutStepsCards } from "@/pages/tryouts/components/TryoutStepsCards";
export function TryoutsPage() {
  const sections = [
    { id: "about", title: "About Tryouts", children: <AboutTryoutsTile /> },
    { id: "steps", title: "Tryout Steps", children: <TryoutStepsCards /> },
    { id: "schedule", title: "Schedule", children: <TryoutScheduleTile /> },
  ];
  return (
    <PageContainer
      title="Tryouts"
      description="Be a part of a competitive team"
    >
      <PageSections sections={sections} />
    </PageContainer>
  );
}
