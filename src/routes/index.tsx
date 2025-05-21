import { PageContainer } from "@/components/common/PageContainer";
import { LandingHeader } from "@/features/landing/components/LandingHeader";
import { LandingHero } from "@/features/landing/components/LandingHero";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

function LandingPage() {
  return (
    <>
      <LandingHeader />
      <PageContainer
        title="Landing Page"
        description="This is the landing page of the app.  Welcome home."
        keywords="app, landing, page, family, board, famboard"
      >
        <LandingHero />
      </PageContainer>
    </>
  );
}
