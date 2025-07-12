import { Cone, Player, type PlacedItem } from "@/pages/training/draggables";

interface ItemComponentProps {
  item: PlacedItem;
}

export function ItemComponent({ item }: ItemComponentProps) {
  switch (item.type) {
    case "player":
      return <Player {...item} />;
    case "cone":
      return <Cone {...item} />;
    default:
      return null;
  }
}
