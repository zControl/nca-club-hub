import { PageContainer } from "@/components/common/page/PageContainer";
import { UnderConstruction } from "@/components/common/page/UnderConstruction";
export function JoinPage() {
  return (
    <PageContainer
      title="Join"
      description="Join the North County Alliance Rebels!"
    >
      <UnderConstruction
        items={[
          {
            title: "Join Form",
            description:
              "Join Form Component, maybe this is just a teamsnap integration?",
          },
        ]}
      />
    </PageContainer>
  );
}
