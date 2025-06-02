import { PageContainer } from "@/components/common/page/PageContainer";
import { UnderConstruction } from "@/components/common/page/UnderConstruction";
export function RebelRecPage() {
  return (
    <PageContainer title="RebelRec" description="Local youth recreation soccer">
      <UnderConstruction
        items={[
          {
            title: "RebelRec Registration",
            description: "RebelRec Registration Page",
          },
          {
            title: "Pricing",
            description: "Show the price page.",
          },
          {
            title: "Newsfeed",
            description: "Show the price page.",
          },
        ]}
      />
    </PageContainer>
  );
}
