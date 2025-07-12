export type ItemColor = "red" | "blue" | "yellow" | "green";
export type ItemSize = "small" | "medium" | "large" | "huge";
interface BaseItem {
  id: string;
  x: number;
  y: number;
};
export interface PlayerItem extends BaseItem {
  type?: "player";
  name?: string;
  color?: ItemColor;
  size?: ItemSize;
  number?: number;
};

export interface ConeItem extends BaseItem {
  type?: "cone";
  color?: ItemColor;
  size?: ItemSize;
};

export type PlacedItem = PlayerItem | ConeItem;