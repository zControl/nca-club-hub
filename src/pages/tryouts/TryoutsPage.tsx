import { PageContainer } from "@/components/common/page/PageContainer";
import { UnderConstruction } from "@/components/common/page/UnderConstruction";
export function TryoutsPage() {
  return (
    <PageContainer
      title="Tryouts"
      description="Be a part of a competitive team"
    >
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
