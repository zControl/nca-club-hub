import { PageContainer } from "@/components/common/page/PageContainer";
import { ColorsExample } from "@/components/examples/ColorsExample";
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
