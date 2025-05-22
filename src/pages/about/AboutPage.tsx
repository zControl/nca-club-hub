import { PageContainer } from "@/components/common/PageContainer";
import { PageSections } from "@/components/common/PageSections";
import { AboutLinks } from "@/pages/about/components/AboutLinks";
import { AboutUs } from "@/pages/about/components/AboutUs";
import { Leagues } from "@/pages/about/components/Leagues";

export function AboutPage() {
  const sections = [
    { id: "about", title: "About Us", children: <AboutUs /> },
    { id: "leagues", title: "WPL League", children: <Leagues /> },
    { id: "links", title: "Club Links", children: <AboutLinks /> },
  ];
  return (
    <PageContainer title="About" description="About">
      <PageSections sections={sections} />
    </PageContainer>
  );
}
