import { PageContainer } from "@/components/common/page/PageContainer";
import { TableExample } from "@/components/examples/TableExample";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/(test)/_examples/examples/tables")({
  component: TablesExamplePage,
});

function TablesExamplePage() {
  return (
    <PageContainer
      title="Demo - Tables"
      description="Tables are used to display data in a tabular format."
    >
      <TableExample />
    </PageContainer>
  );
}
