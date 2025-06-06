import { PageContainer } from "@/components/common/page/PageContainer";
import { ContainerExample } from "@/components/examples/ContainerExample";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute(
  "/(test)/_examples/examples/containers",
)({
  component: ContainersPage,
});

function ContainersPage() {
  return (
    <PageContainer
      title="Demo - Conainers"
      description="Containers are used to wrap content in different sections."
      keywords="card, tile, container, section, wrapper"
    >
      <ContainerExample />
    </PageContainer>
  );
}
