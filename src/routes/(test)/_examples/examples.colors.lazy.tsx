import { PageContainer } from "@/components/common/PageContainer";
import { ColorsExample } from "@/examples/ColorsExample";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/(test)/_examples/examples/colors")({
  component: ColorsPage,
});

function ColorsPage() {
  return (
    <PageContainer title="Demo - Colors" description="Colors used in the app">
      <ColorsExample />
    </PageContainer>
  );
}
