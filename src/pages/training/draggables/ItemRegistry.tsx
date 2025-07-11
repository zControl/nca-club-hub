// src/pages/training/components/ItemRegistry.tsx
import { Cone } from "@/pages/training/draggables/Cone";
import { Player } from "./Player";
import { type PlacedItem } from "./types";

// Map item types to their respective components
export const ItemComponents = {
  player: Player,
  cone: Cone,
};

// Helper function to get the correct component for an item
export function getItemComponent(item: PlacedItem) {
  return ItemComponents[item.type];
}
