import { AppFooter } from "@/components/common/footer/AppFooter";
import { AppHeader } from "@/components/common/header/AppHeader";
import { PageContainer } from "@/components/common/page/PageContainer";
import { LandingHero } from "@/pages/landing/components/LandingHero";

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AppHeader />
      <PageContainer
        title="Landing Page"
        description="This is the landing page of the app.  Welcome home."
        keywords="app, landing, page, family, board, famboard"
      >
        <div className="flex-grow">
          <LandingHero />
        </div>
      </PageContainer>
      <AppFooter />
    </div>
  );
}
