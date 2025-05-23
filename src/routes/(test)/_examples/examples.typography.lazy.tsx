import { PageContainer } from "@/components/common/page/PageContainer";
import { TypographyExample } from "@/components/examples/TypographyExample";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute(
  "/(test)/_examples/examples/typography",
)({
  component: TypographyExamplePage,
});

function TypographyExamplePage() {
  return (
    <PageContainer
      title="Demo - Typography"
      description="Typography used in the app"
    >
      <TypographyExample />
    </PageContainer>
  );
}
