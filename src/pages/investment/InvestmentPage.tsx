import { PageContainer } from "@/components/common/PageContainer";
import { PageSections } from "@/components/common/PageSections";
import { ClubFees } from "@/pages/investment/components/ClubFees";
import { TeamPlacement } from "@/pages/investment/components/TeamPlacement";
export function InvestmentPage() {
  const sections = [
    { id: "club-fees", title: "Club Fees", children: <ClubFees /> },
    { id: "placement", title: "Placement", children: <TeamPlacement /> },
    { id: "sponsorship", title: "Sponsorship", children: <>something here</> },
    { id: "kit", title: "The Kit", children: <>something here</> },
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
