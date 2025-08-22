import { Field } from "@/pages/training/components/Field";
import { ItemsCard } from "@/pages/training/components/ItemsCard";
import { ScenesCard } from "@/pages/training/components/ScenesCard";
import { ToolsCard } from "@/pages/training/components/ToolsCard";
import {
  Cone,
  Player,
  type ConeItem,
  type ItemColor,
  type ItemSize,
  type PlacedItem,
  type PlayerItem,
  type Position,
} from "@/pages/training/draggables";
import { useItemStore } from "@/store/useItemStore";
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
  type DragStartEvent,
} from "@dnd-kit/core";
import { useState } from "react";

export function SessionBoard() {
  const { setItems } = useItemStore();
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
    // Check if the item was dropped over the field container
    if (over && over.id === "field-container") {
      const { x, y } = event.delta;
      const itemData = active.data?.current || {};

      // Update the items state in the store
      setItems((prev: PlacedItem[]) => {
        const existingItemIndex = prev.findIndex(
          (item) => item.id === active.id,
        );

        // If the item already exists in the state, update its position
        if (existingItemIndex >= 0) {
          // Update the position of the existing item
          const updatedItems = [...prev];
          updatedItems[existingItemIndex] = {
            ...updatedItems[existingItemIndex],
            x: updatedItems[existingItemIndex].x + x,
            y: updatedItems[existingItemIndex].y + y,
          };
          console.log(
            "Dropped item: ",
            updatedItems[existingItemIndex].id,
            "at: ",
            updatedItems[existingItemIndex].x,
            updatedItems[existingItemIndex].y,
          );
          return updatedItems;
          // If the item doesn't exist in the state, add it
        } else {
          // Set default values for the new item
          const baseItem = {
            id: `${itemData.type}-${Date.now().toString(36)}-${Math.floor(Math.random() * 1000)}`,
            type: itemData.type,
            x,
            y,
          };

          const basePlayerItem = {
            name: "New Player",
            showName: true,
            number: 0,
            showNumber: true,
            position: {
              name: "None",
              code: "N/A",
              role: 0,
            } as Position,
            color: "yellow" as ItemColor,
            size: "medium" as ItemSize,
          };

          // Check item type and add it to the state
          if (itemData.type === "player") {
            const newItem: PlayerItem = { ...baseItem, ...basePlayerItem };
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
            // If item type is unknown, return the previous state
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
        <ScenesCard />
        <div className="flex flex-row gap-2">
          <ItemsCard />
          <div className="flex-grow">
            <Field />
            <DragOverlay>
              {activeId ? (
                activeId === "player-template" ? (
                  <Player type="player" id="player-dragging" x={0} y={0} />
                ) : activeId === "cone-template" ? (
                  <Cone type="cone" id="cone-dragging" x={0} y={0} />
                ) : null
              ) : null}
            </DragOverlay>
          </div>
        </div>
        <ToolsCard />
      </div>
    </DndContext>
  );
}
