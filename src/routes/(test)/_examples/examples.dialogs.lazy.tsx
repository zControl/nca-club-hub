import { PageContainer } from "@/components/common/page/PageContainer";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/(test)/_examples/examples/dialogs")({
  component: DialogExamplePage,
});

function DialogExamplePage() {
  return (
    <PageContainer
      title="Demo - Dialogs"
      description="Dialogs are used to display information to the user."
    >
      {/* <DialogExample /> */}
      <p>Dialogs are broken for some reason. Fix it.</p>
    </PageContainer>
  );
}
