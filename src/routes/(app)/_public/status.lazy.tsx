import { PageContainer } from "@/components/common/PageContainer";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/(app)/_public/status")({
  component: StatusPage,
});

function StatusPage() {
  return (
    <>
      <PageContainer
        title="Status Page"
        description="Show the status of the web services and API endpoints"
      >
        <div>STATUS TABLE HERE</div>
      </PageContainer>
    </>
  );
}
