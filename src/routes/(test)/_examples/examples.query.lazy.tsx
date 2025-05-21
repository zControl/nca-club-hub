import { PageContainer } from "@/components/common/PageContainer";
import { useQuery } from "@tanstack/react-query";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/(test)/_examples/examples/query")({
  component: QueryExamplePage,
});

function QueryExamplePage() {
  const { data, status } = useQuery({
    queryKey: ["fetchDogs"],
    queryFn: async () => {
      const res = await fetch("https://dog.ceo/api/breeds/image/random");
      return await res.json();
    },
  });
  return (
    <PageContainer
      title="Query Example"
      description="Typography used in the app"
    >
      <div className="p-2">
        <p>Watch out for Dogs...</p>
        {status === "success" ? (
          <div className="overflow-hidden w-[640px] h-[480px]">
            <img src={data.message} alt="dog" className="w-full" />
          </div>
        ) : (
          <p>Working...</p>
        )}
      </div>
    </PageContainer>
  );
}
