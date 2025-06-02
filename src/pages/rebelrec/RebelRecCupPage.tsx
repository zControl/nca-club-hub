import { PageContainer } from "@/components/common/page/PageContainer";
import { UnderConstruction } from "@/components/common/page/UnderConstruction";
export function RebelRecCupPage() {
  return (
    <PageContainer
      title="RebelRec | Cup"
      description="End of season tournament"
    >
      <UnderConstruction
        items={[
          {
            title: "RebelRec Cup",
            description: "RebelRec Cup Page",
          },
        ]}
      />
    </PageContainer>
  );
}
