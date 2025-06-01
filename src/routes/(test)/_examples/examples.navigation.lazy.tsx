import { PageContainer } from "@/components/common/page/PageContainer";
import { NavigationExample } from "@/components/examples/NavigationExample";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute(
  "/(test)/_examples/examples/navigation",
)({
  component: NavigationExamplePage,
});

function NavigationExamplePage() {
  return (
    <PageContainer
      title="Demo - Navigation"
      description="Navigation options for sidebar, header, menu, and popovers."
    >
      <NavigationExample />
    </PageContainer>
  );
}
