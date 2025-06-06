import { PageSections } from "@/components/common/page/PageSections";
import { LoadingBox, LoadingRows } from "@/components/composites/Loading";
import { Tile } from "@/components/composites/Tile";
import { Separator } from "@/components/ui/separator";
import { Spinner } from "@/components/ui/spinner";
import { Header4 } from "@/components/ui/typography";

function SpinnerTile() {
  return (
    <Tile
      title="Spinner"
      description="A spinning indicator to show when something is loading."
    >
      <Header4>Sizes</Header4>
      <div className="flex gap-2">
        <p>sm</p>
        <Spinner size="sm" />
        <p>md</p>
        <Spinner size="md" />
        <p>lg</p>
        <Spinner size="lg" />
        <p>xl</p>
        <Spinner size="xl" />
        <p>full (not shown)</p>
      </div>
      <Header4>Colors</Header4>
      <div className="flex gap-2">
        <p>default</p>
        <Spinner color="default" />
        <p>primary</p>
        <Spinner color="primary" />
        <p>highlight</p>
        <Spinner color="highlight" />
      </div>
    </Tile>
  );
}

function LoadingRowsTile() {
  return (
    <Tile
      title="Loading Rows Skeleton"
      description="A skeleton component to show when rows of a table are loading."
    >
      <Header4>Loading Rows</Header4>
      <LoadingRows count={5} />
      <Separator className="my-4" />
    </Tile>
  );
}

function LoadingBoxTile() {
  return (
    <Tile
      title="Loading Box Skeleton"
      description="A skeleton component to show when a box is loading."
    >
      <LoadingBox />
    </Tile>
  );
}

const sections = [
  { id: "spinner", title: "Spinner", children: <SpinnerTile /> },
  {
    id: "loading-rows",
    title: "Loading Rows",
    children: <LoadingRowsTile />,
  },
  {
    id: "loading-box",
    title: "Loading Box",
    children: <LoadingBoxTile />,
  },
];
export const LoadersExample = () => {
  return <PageSections sections={sections} />;
};
