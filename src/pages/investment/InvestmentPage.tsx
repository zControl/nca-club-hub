import { PageContainer } from "@/components/common/page/PageContainer";
import { PageSections } from "@/components/common/page/PageSections";
import { UnderConstruction } from "@/components/common/page/UnderConstruction";
import { ClubFees } from "@/pages/investment/components/ClubFees";
import { PricingStructure } from "@/pages/investment/components/PricingStructure";
import { TeamPlacement } from "@/pages/investment/components/TeamPlacement";
export function InvestmentPage() {
  const sections = [
    { id: "fees-overview", title: "Overview", children: <ClubFees /> },
    { id: "club-fees", title: "Club Fees", children: <PricingStructure /> },
    { id: "placement", title: "Placement", children: <TeamPlacement /> },
    { id: "sponsorship", title: "Sponsorship", children: <>sponsorship</> },
    { id: "kit", title: "The Kit", children: <>kit content</> },
  ];
  return (
    <PageContainer
      title="Investment"
      description="Invest in local youth soccer."
    >
      <PageSections sections={sections} />
      <UnderConstruction
        items={[
          {
            title: "Club Fees",
            description: "We are committed to make soccer affordable.",
          },
          {
            title: "Pricing",
            description: "Fully transparent pricing structure",
          },
          { title: "Placement", description: "Team placement process" },
          { title: "Sponsorship", description: "Sponsorship information" },
          { title: "Kit", description: "Kit Page, Ordering, items included" },
        ]}
      />
    </PageContainer>
  );
}
