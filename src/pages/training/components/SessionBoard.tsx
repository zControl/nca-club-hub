import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Cone } from "@/pages/training/components/Cone";
import { Droppable } from "@/pages/training/components/Droppable";
import { Field } from "@/pages/training/components/Field";
import { Player } from "@/pages/training/components/Player";
import type {
  ConeItem,
  PlacedItem,
  PlayerItem,
} from "@/pages/training/components/types";
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
  type DragStartEvent,
} from "@dnd-kit/core";
import { IceCream2Icon, PlusCircleIcon } from "lucide-react";
import { useState } from "react";

export function SessionBoard() {
  const [items, setItems] = useState<PlacedItem[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  // Use sensors for better drag behavior
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
  );

  function handleDragStart(event: DragStartEvent) {
    const { active } = event;
    const id = active.id as string;
    setActiveId(id);
    console.log("Started dragging item:", id);
  }

  function handleDragEnd(event: DragEndEvent) {
    setActiveId(null);
    const { active, over } = event;
    // check if the item was dropped over the field container
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
            "Moved item: ",
            updatedItems[existingItemIndex].id,
            "to: ",
            updatedItems[existingItemIndex].x,
            updatedItems[existingItemIndex].y,
          );
          return updatedItems;
        } else {
          const baseItem = {
            id: `${itemData.type}-${Date.now().toString(36)}-${Math.floor(Math.random() * 1000)}`,
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
    <DndContext
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      sensors={sensors}
    >
      <div className="flex flex-col gap-2">
        <Card>
          <CardTitle className="text-center">SCENES</CardTitle>
          <CardContent className="flex flex-row gap-2 items-center justify-center">
            <div className="h-24 w-24 bg-blue-300 flex items-center justify-center">
              <IceCream2Icon size={64} />
            </div>
            <div className="h-24 w-24 bg-green-300 items-center flex justify-center">
              <PlusCircleIcon size={64} />
            </div>
          </CardContent>
        </Card>
        <div className="flex flex-row gap-2">
          <Card>
            <CardTitle className="text-center">ITEMS</CardTitle>
            <div className="flex flex-col gap-4 items-center px-2">
              <Player id="player-template" />
              <Cone id="cone-template" />
            </div>
          </Card>
          <div className="flex-grow">
            <Droppable id="field-container">
              <Field items={items} />
            </Droppable>
            <DragOverlay>
              {activeId ? (
                activeId === "player-template" ? (
                  <Player id="player-dragging" />
                ) : activeId === "cone-template" ? (
                  <Cone id="cone-dragging" />
                ) : null
              ) : null}
            </DragOverlay>
          </div>
        </div>
      </div>
    </DndContext>
  );
}
