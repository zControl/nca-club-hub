import { AppFooter } from "@/components/common/footer/AppFooter";
import { AppHeader } from "@/components/common/header/AppHeader";
import { PageContainer } from "@/components/common/page/PageContainer";
import { ConnectForm } from "@/pages/landing/components/ConnectForm";
import { HeroAppButtons } from "@/pages/landing/components/HeroAppButtons";
import { HeroCarousel } from "@/pages/landing/components/HeroCarousel";
import { HeroFaq } from "@/pages/landing/components/HeroFaq";
import { HeroInfoCards } from "@/pages/landing/components/HeroInfoCards";
import { HeroNewsFeed } from "@/pages/landing/components/HeroNewsFeed";
import { HeroNewsFlash } from "@/pages/landing/components/HeroNewsFlash";
import { HeroSponsors } from "@/pages/landing/components/HeroSponsors";
import { HeroTitle } from "@/pages/landing/components/HeroTitle";

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AppHeader />
      <PageContainer
        title="Landing Page"
        description="This is the landing page of the app.  Welcome home."
        keywords="app, landing, page, family, board, famboard"
      >
        <div className="flex flex-col">
          <HeroNewsFlash />
          <HeroCarousel />
          <HeroTitle />
          <HeroAppButtons />
          <HeroInfoCards />
          <HeroNewsFeed />
          <HeroFaq />
          <HeroSponsors />
          <ConnectForm />
        </div>
      </PageContainer>
      <AppFooter />
    </div>
  );
}
