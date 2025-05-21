import { apiClient } from "@/api/apiClient";
import { PageSections } from "@/components/common/PageSections";
import { Tile } from "@/components/composites/Tile";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { BlockQuote, Header4, Paragraph } from "@/components/ui/typography";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { CloudDownloadIcon } from "lucide-react";

function CheckApiStatus() {
  const queryClient = useQueryClient();

  const { isPending, isFetching, isError, data, error } = useQuery({
    queryKey: ["ApiRoot"],
    queryFn: async () => apiClient.get(""),
  });

  const handleRefresh = () => {
    queryClient.invalidateQueries({ queryKey: ["ApiRoot"] });
  };
  return (
    <Tile
      title="API Root Info"
      description="Call the root API endpoint and display the results."
    >
      <Header4>Results</Header4>
      {isError && (
        <>
          <span className="text-destructive mr-4">
            Error: {error?.message || "Unknown error"}
          </span>
          <Button size="sm" variant="secondary" onClick={handleRefresh}>
            Retry
          </Button>
        </>
      )}
      {isPending && <Spinner size="lg" />}
      {!isPending && !isError && (
        <BlockQuote className="max-h-80">
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </BlockQuote>
      )}
      {!isError && (
        <>
          <Button
            disabled={isFetching || isPending}
            variant={"outline"}
            onClick={handleRefresh}
          >
            {isFetching || (isPending && data) ? (
              <Spinner size="sm" />
            ) : (
              <CloudDownloadIcon className="mr-2 h-4 w-4" />
            )}
            Invalidate Query to update data
          </Button>
          <Paragraph className="mt-4">
            Last updated: {new Date().toISOString()}
          </Paragraph>
        </>
      )}
    </Tile>
  );
}

const sections = [
  {
    id: "api-root-info",
    title: "API Root Info",
    children: <CheckApiStatus />,
  },
];
export const DatabaseExample = () => {
  return <PageSections sections={sections} />;
};
