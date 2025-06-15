import { PageContainer } from "@/components/common/page/PageContainer";
import { PageSections } from "@/components/common/page/PageSections";
import { ClubHistory } from "@/pages/about/components/ClubHistory";
import { HowItStartedCard } from "@/pages/about/components/HowItStartedCard";
import { Leagues } from "@/pages/about/components/Leagues";

export function AboutPage() {
  const sections = [
    { id: "about-us", title: "About Us", children: <HowItStartedCard /> },
    { id: "leagues", title: "WPL League", children: <Leagues /> },
    { id: "history", title: "Club History", children: <ClubHistory /> },
  ];
  return (
    <PageContainer
      title="About"
      description="About North County Alliance. Select Soccer in Whatcom County."
    >
      <PageSections sections={sections} />
    </PageContainer>
  );
}
