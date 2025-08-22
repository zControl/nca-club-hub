export type ItemColor = "red" | "blue" | "yellow" | "green";
export type ItemSize = "small" | "medium" | "large" | "huge";

export interface Position {
  name: string;
  code: string;
  role: number;
  side?: "left" | "right" | "center";
  zone?: "defense" | "midfield" | "attack";
}

interface BaseItem {
  id: string;
  x: number;
  y: number;
};
export interface PlayerItem extends BaseItem {
  type: "player";
  name?: string;
  showName?: boolean;
  number?: number;
  showNumber?: boolean;
  position?: Position;
  showPosition?: boolean;
  color?: ItemColor;
  size?: ItemSize;
};

export interface ConeItem extends BaseItem {
  type: "cone";
  color?: ItemColor;
  size?: ItemSize;
};

export type PlacedItem = PlayerItem | ConeItem;