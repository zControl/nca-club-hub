import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ItemComponent } from "@/pages/training/components/ItemComponent";
import { useItemStore } from "@/store/useItemStore";
import { useDroppable } from "@dnd-kit/core";
import { useState } from "react";
import { ItemForm } from "./ItemForm";

export function Field() {
  const { items, selectedItemId, setSelectedItemId } = useItemStore();
  const selectedItem = items.find((item) => item.id === selectedItemId);
  const [popoverOpen, setPopoverOpen] = useState(false);

  const { setNodeRef } = useDroppable({
    id: "field-container",
  });

  const handleItemClick = (itemId: string) => {
    setSelectedItemId(itemId === selectedItemId ? null : itemId);
    setPopoverOpen(itemId !== selectedItemId);
    console.log("Selected item:", itemId);
  };

  return (
    <div
      ref={setNodeRef}
      className="h-[600px] w-full bg-green-800 border-foreground border-2 relative"
    >
      {items.map((item) => {
        return (
          <Popover
            key={item.id}
            open={selectedItemId === item.id && popoverOpen}
            onOpenChange={setPopoverOpen}
          >
            <PopoverTrigger asChild>
              <div
                style={{
                  position: "absolute",
                  left: item.x,
                  top: item.y,
                  border:
                    selectedItemId === item.id ? "2px solid white" : "none",
                }}
                onClick={() => handleItemClick(item.id)}
              >
                <ItemComponent item={item} />
              </div>
            </PopoverTrigger>
            {selectedItem && selectedItemId === item.id && (
              <PopoverContent>
                <h3 className="font-bold mb-4">Properties</h3>
                <div className="space-y-3">
                  <ItemForm item={selectedItem} />
                </div>
              </PopoverContent>
            )}
          </Popover>
        );
      })}
    </div>
  );
}
