import { PageContainer } from "@/components/common/page/PageContainer";
import { PageSections } from "@/components/common/page/PageSections";
import { EventCalendar } from "@/pages/schedule/components/EventCalendar";
import { YearlyCalendar } from "@/pages/schedule/components/YearlyCalendar";
export function SchedulePage() {
  const sections = [
    {
      id: "event-calendar",
      title: "Event Calendar",
      children: <EventCalendar />,
    },
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
    </PageContainer>
  );
}
