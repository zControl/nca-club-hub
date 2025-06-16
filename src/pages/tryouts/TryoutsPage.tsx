import { PageContainer } from "@/components/common/page/PageContainer";
import { PageSections } from "@/components/common/page/PageSections";
import { UnderConstruction } from "@/components/common/page/UnderConstruction";
import { AboutTryoutsTile } from "@/pages/tryouts/components/AboutTryoutsTile";
import { TryoutScheduleTile } from "@/pages/tryouts/components/TryoutScheduleTile";
export function TryoutsPage() {
  const sections = [
    { id: "about", title: "About Tryouts", children: <AboutTryoutsTile /> },
    { id: "schedule", title: "Schedule", children: <TryoutScheduleTile /> },
  ];
  return (
    <PageContainer
      title="Tryouts"
      description="Be a part of a competitive team"
    >
      <PageSections sections={sections} />
      <UnderConstruction
        items={[
          {
            title: "About Tryouts",
            description: "About Tryouts Tile",
          },
          {
            title: "Tryout Expectations",
            description: "Tryout Expectations Tile",
          },
          {
            title: "Schedule",
            description: "Tryout dates and times",
          },
        ]}
      />
    </PageContainer>
  );
}
