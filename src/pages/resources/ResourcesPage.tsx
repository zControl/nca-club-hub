import { PageContainer } from "@/components/common/page/PageContainer";
import { UnderConstruction } from "@/components/common/page/UnderConstruction";
export function ResourcesPage() {
  return (
    <PageContainer
      title="Resources"
      description="Important information and resource documents"
    >
      <UnderConstruction
        items={[
          { title: "Parent Resources", description: "Documents download" },
          { title: "Club Documents", description: "Documents download" },
          { title: "Legal Forms", description: "Documents download" },
          { title: "Registration", description: "Documents download" },
          { title: "Training", description: "Training Content" },
        ]}
      />
    </PageContainer>
  );
}
