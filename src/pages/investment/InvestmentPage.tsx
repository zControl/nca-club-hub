import { PageContainer } from "@/components/common/page/PageContainer";
import { PageSections } from "@/components/common/page/PageSections";
import { ClubFees } from "@/pages/investment/components/ClubFees";
import { GoodDeal } from "@/pages/investment/components/GoodDeal";
import { PricingStructure } from "@/pages/investment/components/PricingStructure";
import { TeamPlacement } from "@/pages/investment/components/TeamPlacement";
export function InvestmentPage() {
  const sections = [
    { id: "fees-overview", title: "Overview", children: <ClubFees /> },
    { id: "club-fees", title: "Club Fees", children: <PricingStructure /> },
    { id: "placement", title: "Placement", children: <TeamPlacement /> },
    { id: "great-deal", title: "Great Deal", children: <GoodDeal /> },
  ];
  return (
    <PageContainer
      title="Investment"
      description="Invest in local youth soccer."
    >
      <PageSections sections={sections} />
    </PageContainer>
  );
}
