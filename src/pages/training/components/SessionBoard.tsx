import { Card } from "@/components/ui/card";
import { Cone } from "@/pages/training/components/Cone";
import { Droppable } from "@/pages/training/components/Droppable";
import { getItemComponent } from "@/pages/training/components/ItemRegistry";
import { Player } from "@/pages/training/components/Player";
import type {
  ConeItem,
  PlacedItem,
  PlayerItem,
} from "@/pages/training/components/types";
import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import { useState } from "react";

export function SessionBoard() {
  const [items, setItems] = useState<PlacedItem[]>([]);

  // Use sensors for better drag behavior
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (over && over.id === "field-container") {
      const { x, y } = event.delta;
      const itemData = active.data?.current || {};

      setItems((prev: PlacedItem[]) => {
        const existingItemIndex = prev.findIndex(
          (item) => item.id === active.id,
        );

        if (existingItemIndex >= 0) {
          // Update existing item position
          const updatedItems = [...prev];
          updatedItems[existingItemIndex] = {
            ...updatedItems[existingItemIndex],
            x: updatedItems[existingItemIndex].x + x,
            y: updatedItems[existingItemIndex].y + y,
          };
          console.log(
            "Updating item",
            existingItemIndex,
            "position:",
            updatedItems[existingItemIndex].x,
            updatedItems[existingItemIndex].y,
          );
          return updatedItems;
        } else {
          // Create new item based on type
          const baseItem = {
            id: `${itemData.type}-${Date.now()}-${Math.random().toString(36)}`,
            type: itemData.type || "player",
            x,
            y,
          };

          // Add type-specific properties
          if (itemData.type === "player") {
            const newItem: PlayerItem = {
              ...baseItem,
              name: itemData.name || "Player",
              color: itemData.color || "blue",
              number: itemData.number || 0,
              x: 250,
              y: 500,
            };
            console.log("Adding new player item:", newItem);
            return [...prev, newItem];
          } else if (itemData.type === "cone") {
            const newItem: ConeItem = {
              ...baseItem,
              color: itemData.color || "red",
              size: itemData.size || "small",
            };
            console.log("Adding new cone item:", newItem);
            return [...prev, newItem];
          } else {
            // If the item is not of type "player" or "cone", do not add it to the state
            console.warn("Unknown item type:", itemData.type);
            return prev;
          }
        }
      });
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
      <div className="flex flex-col">
        <Card>SCENES</Card>
        {/* Items toolbar */}
        <Card className="flex flex-row gap-4 items-center">
          <Player id="player-template" />
          <Cone id="cone-template" />
        </Card>

        <div className="flex-1">
          <Droppable id="field-container">
            <div className="h-[600px] w-full bg-green-800 border-foreground border-2">
              {items.map((item) => {
                const ItemComponent = getItemComponent(item);
                return (
                  <div
                    key={item.id}
                    style={{
                      position: "absolute",
                      left: item.x,
                      top: item.y,
                    }}
                  >
                    <ItemComponent id={item.id} />
                  </div>
                );
              })}
            </div>
          </Droppable>
        </div>
      </div>
    </DndContext>
  );
}
