import { PageContainer } from "@/components/common/page/PageContainer";
import { UnderConstruction } from "@/components/common/page/UnderConstruction";
export function SchedulePage() {
  return (
    <PageContainer
      title="Schedule"
      description="See what is happening at the North County Alliance"
    >
      <UnderConstruction
        items={[
          {
            title: "Upcoming Events",
            description:
              "Show the upcoming events, tryouts,  games, tournaments",
          },
          {
            title: "Yearly Calendar",
            description:
              "Typical yearly calendar that shows the seasons, typical dates",
          },
          { title: "Schedule", description: "Club Calendar component" },
        ]}
      />
    </PageContainer>
  );
}
