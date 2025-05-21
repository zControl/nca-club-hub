import { NotFound } from "@/components/common/NotFound";
import { PageContainer } from "@/components/common/PageContainer";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/(test)/_examples/examples_")({
  component: () => (
    <PageContainer
      title="Demo - Overview"
      description="Cookbook of UI components used in the app."
      keywords="demo, ui, components, cookbook, app"
    >
      <div>This is a cookbook of UI components that are used in the app.</div>
    </PageContainer>
  ),
  notFoundComponent: NotFound,
});
