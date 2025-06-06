import { PageContainer } from "@/components/common/page/PageContainer";
import { DatabaseExample } from "@/components/examples/DatabaseExample";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/(test)/_examples/examples/database")(
  {
    component: DatabaseExamplePage,
  },
);

function DatabaseExamplePage() {
  return (
    <PageContainer
      title="Demo - Database"
      description="Database handling, validation, and submission."
    >
      <DatabaseExample />
    </PageContainer>
  );
}
