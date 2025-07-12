import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import type { ConeItem, PlayerItem } from "@/pages/training/draggables";
import { useItemStore } from "@/store/useItemStore";
import { Table2Icon } from "lucide-react";

export function ItemsTable() {
  const items = useItemStore((state) => state.items);

  const players = items.filter(
    (item) => item.type === "player",
  ) as PlayerItem[];
  const cones = items.filter((item) => item.type === "cone") as ConeItem[];

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size={"icon"}>
          <Table2Icon />
        </Button>
      </PopoverTrigger>
      <PopoverContent side="right" align="end" className="w-80">
        <div>
          <h2 className="text-lg font-semibold">Players</h2>
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-2 py-1">Name</th>
                <th className="px-2 py-1">Number</th>
                <th className="px-2 py-1">Color</th>
              </tr>
            </thead>
            <tbody>
              {players.map((player) => (
                <tr key={player.id}>
                  <td className="px-2 py-1">{player.name}</td>
                  <td className="px-2 py-1">{player.number}</td>
                  <td className="px-2 py-1">{player.color}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2 className="text-lg font-semibold mt-4">Cones</h2>
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-2 py-1">Size</th>
                <th className="px-2 py-1">Color</th>
              </tr>
            </thead>
            <tbody>
              {cones.map((cone) => (
                <tr key={cone.id}>
                  <td className="px-2 py-1">{cone.size}</td>
                  <td className="px-2 py-1">{cone.color}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </PopoverContent>
    </Popover>
  );
}
