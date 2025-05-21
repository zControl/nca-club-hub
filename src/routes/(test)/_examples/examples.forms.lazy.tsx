import { PageContainer } from "@/components/common/PageContainer";
import { FormsExample } from "@/examples/FormExample";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/(test)/_examples/examples/forms")({
  component: FormsExamplePage,
});

function FormsExamplePage() {
  return (
    <PageContainer
      title="Demo - Forms"
      description="Form handling, validation, and submission."
    >
      <FormsExample />
    </PageContainer>
  );
}
