import { PageContainer } from "@/components/common/page/PageContainer";
import { UnderConstruction } from "@/components/common/page/UnderConstruction";
export function KitPage() {
  return (
    <PageContainer
      title="The Kit"
      description="Look at the North County Alliance Kit"
    >
      <UnderConstruction
        items={[
          {
            title: "Kit",
            description: "Look at the North County Alliance Kit",
          },
        ]}
      />
    </PageContainer>
  );
}
