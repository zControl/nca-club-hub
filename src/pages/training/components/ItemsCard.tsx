import { Card, CardTitle } from "@/components/ui/card";
import { ItemsTable } from "@/pages/training/components/ItemsTable";
import { Cone, Player } from "@/pages/training/draggables";
export function ItemsCard() {
  return (
    <Card>
      <CardTitle className="text-center">ITEMS</CardTitle>
      <div className="flex flex-col h-full">
        <div className="flex flex-col gap-4 items-center px-2 flex-grow">
          <Player id="player-template" x={0} y={0} number={99} />
          <Cone id="cone-template" x={0} y={0} />
        </div>
        <div className="mt-auto mx-auto">
          <ItemsTable />
        </div>
      </div>
    </Card>
  );
}
