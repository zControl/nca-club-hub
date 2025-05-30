import { PageContainer } from "@/components/common/page/PageContainer";
import { PageSections } from "@/components/common/page/PageSections";
import { ClubHistory } from "@/pages/about/components/ClubHistory";
import { Leagues } from "@/pages/about/components/Leagues";

export function AboutPage() {
  const sections = [
    { id: "leagues", title: "WPL League", children: <Leagues /> },
    { id: "history", title: "Club History", children: <ClubHistory /> },
  ];
  return (
    <PageContainer title="About" description="About">
      <PageSections sections={sections} />
    </PageContainer>
  );
}
