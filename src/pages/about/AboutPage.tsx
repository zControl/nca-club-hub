import { PageContainer } from "@/components/common/page/PageContainer";
import { PageSections } from "@/components/common/page/PageSections";
import { AboutUs } from "@/pages/about/components/AboutUs";
import { Leagues } from "@/pages/about/components/Leagues";

export function AboutPage() {
  const sections = [
    { id: "about", title: "About Us", children: <AboutUs /> },
    { id: "leagues", title: "WPL League", children: <Leagues /> },
  ];
  return (
    <PageContainer title="About" description="About">
      <PageSections sections={sections} />
    </PageContainer>
  );
}
