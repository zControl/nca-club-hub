export interface BaseItem {
  id: string;
  type: "player" | "cone";
  x: number;
  y: number;
};
export interface PlayerItem extends BaseItem {
  type: "player";
  name: string;
  color: "red" | "blue" | "yellow" | "green";
  number: number;
};

export interface ConeItem extends BaseItem {
  type: "cone";
  color: "red" | "blue" | "yellow";
  size: "small" | "medium" | "large";
};

export type PlacedItem = PlayerItem | ConeItem;