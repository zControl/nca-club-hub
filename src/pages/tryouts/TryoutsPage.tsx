import constructionBanner from "@/assets/logos/under-construction-banner.png";
import { PageContainer } from "@/components/common/page/PageContainer";
import { PageSections } from "@/components/common/page/PageSections";
import { Image } from "@/components/ui/image";
import { AboutTryoutsTile } from "@/pages/tryouts/components/AboutTryoutsTile";
import { TryoutScheduleTile } from "@/pages/tryouts/components/TryoutScheduleTile";
import { TryoutStepsCards } from "@/pages/tryouts/components/TryoutStepsCards";
export function TryoutsPage() {
  const sections = [
    { id: "steps", title: "Tryout Steps", children: <TryoutStepsCards /> },
    { id: "about", title: "About Tryouts", children: <AboutTryoutsTile /> },
    { id: "schedule", title: "Schedule", children: <TryoutScheduleTile /> },
  ];
  return (
    <PageContainer
      title="Tryouts"
      description="Be a part of a competitive team"
    >
      <Image src={constructionBanner} alt="Under Construction" />
      <PageSections sections={sections} />
    </PageContainer>
  );
}
