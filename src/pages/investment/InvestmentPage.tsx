import { PageContainer } from "@/components/common/page/PageContainer";
import { PageSections } from "@/components/common/page/PageSections";
import { UnderConstruction } from "@/components/common/page/UnderConstruction";
import { ClubFees } from "@/pages/investment/components/ClubFees";
import { TeamPlacement } from "@/pages/investment/components/TeamPlacement";
export function InvestmentPage() {
  const sections = [
    { id: "club-fees", title: "Club Fees", children: <ClubFees /> },
    { id: "placement", title: "Placement", children: <TeamPlacement /> },
    { id: "sponsorship", title: "Sponsorship", children: <>sponsorship</> },
    { id: "kit", title: "The Kit", children: <>kit content</> },
  ];
  return (
    <PageContainer
      title="Investment"
      description="Invest in local youth soccer."
    >
      <UnderConstruction
        items={[
          {
            title: "Club Fees",
            description: "Club Pricing Schedule component",
          },
          { title: "Placement", description: "Description of team placement" },
          { title: "Sponsorship", description: "Sponsorship Information" },
          { title: "Kit", description: "Kit Page, Ordering, items included" },
        ]}
      />
      <PageSections sections={sections} />
    </PageContainer>
  );
}
