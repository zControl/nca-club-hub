import { PageContainer } from "@/components/common/page/PageContainer";
import { PageSections } from "@/components/common/page/PageSections";
import { AboutUs } from "@/pages/mission/components/AboutUs";
import { GoalsTile } from "@/pages/mission/components/GoalsTile";
import { MissionTile } from "@/pages/mission/components/MissionTile";
export function MissionPage() {
  const sections = [
    { id: "mission", title: "Mission", children: <MissionTile /> },
    { id: "goals", title: "Goals", children: <GoalsTile /> },
    { id: "about-us", title: "About Us", children: <AboutUs /> },
  ];
  return (
    <PageContainer
      title="Mission"
      description="Our mission statement reflects our goals and core values."
    >
      <PageSections sections={sections} />
    </PageContainer>
  );
}
