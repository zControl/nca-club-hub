import { PageContainer } from "@/components/common/page/PageContainer";
import { PageSections } from "@/components/common/page/PageSections";
import { UnderConstruction } from "@/components/common/page/UnderConstruction";
import { YearlyCalendar } from "@/pages/schedule/components/YearlyCalendar";
export function SchedulePage() {
  const sections = [
    {
      id: "yearly-calendar",
      title: "Yearly Calendar",
      children: <YearlyCalendar />,
    },
  ];
  return (
    <PageContainer
      title="Schedule"
      description="See what is happening at the North County Alliance"
    >
      <PageSections sections={sections} />
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
