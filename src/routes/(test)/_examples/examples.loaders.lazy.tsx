import { PageContainer } from "@/components/common/page/PageContainer";
import { LoadersExample } from "@/components/examples/LoadersExample";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/(test)/_examples/examples/loaders")({
  component: LoadersExamplePage,
});

function LoadersExamplePage() {
  return (
    <PageContainer
      title="Demo - Loaders"
      description="Skeleton and Spinners used to show a loading state."
    >
      <LoadersExample />
    </PageContainer>
  );
}
