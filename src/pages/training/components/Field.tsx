import { getItemComponent } from "@/pages/training/components/ItemRegistry";
import type {
  ConeItem,
  PlacedItem,
  PlayerItem,
} from "@/pages/training/components/types";
import { useState } from "react";

interface FieldProps {
  items: PlacedItem[];
  onUpdateItem?: (updatedItem: PlacedItem) => void;
}
export function Field({ items, onUpdateItem }: FieldProps) {
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);

  const selectedItem = items.find((item) => item.id === selectedItemId);

  const handleItemClick = (itemId: string) => {
    setSelectedItemId(itemId === selectedItemId ? null : itemId);
    console.log("Selected item:", itemId);
  };

  const handlePropertyChange = (property: string, value: string | number) => {
    if (selectedItem && onUpdateItem) {
      onUpdateItem({
        ...selectedItem,
        [property]: value,
      });
    }
  };

  return (
    <div className="flex">
      <div className="h-[600px] w-full bg-green-800 border-foreground border-2 relative">
        {items.map((item) => {
          const ItemComponent = getItemComponent(item);
          return (
            <div
              key={item.id}
              style={{
                position: "absolute",
                left: item.x,
                top: item.y,
                border: selectedItemId === item.id ? "2px solid white" : "none",
              }}
              onClick={() => handleItemClick(item.id)}
            >
              <ItemComponent id={item.id} />
            </div>
          );
        })}
      </div>

      {selectedItem && (
        <div className="w-64 p-4 border-l">
          <h3 className="font-bold mb-4">Properties</h3>

          <div className="space-y-3">
            {selectedItem.type === "player" && (
              <>
                <div>
                  <label className="block text-sm">Name</label>
                  <input
                    type="text"
                    value={(selectedItem as PlayerItem).name || ""}
                    onChange={(e) =>
                      handlePropertyChange("name", e.target.value)
                    }
                    className="w-full border p-1"
                  />
                </div>
                <div>
                  <label className="block text-sm">Number</label>
                  <input
                    type="number"
                    value={(selectedItem as PlayerItem).number || 0}
                    onChange={(e) =>
                      handlePropertyChange("number", parseInt(e.target.value))
                    }
                    className="w-full border p-1"
                  />
                </div>
                <div>
                  <label className="block text-sm">Color</label>
                  <select
                    value={(selectedItem as PlayerItem).color}
                    onChange={(e) =>
                      handlePropertyChange("color", e.target.value)
                    }
                    className="w-full border p-1"
                  >
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                  </select>
                </div>
              </>
            )}

            {selectedItem.type === "cone" && (
              <>
                <div>
                  <label className="block text-sm">Color</label>
                  <select
                    value={(selectedItem as ConeItem).color}
                    onChange={(e) =>
                      handlePropertyChange("color", e.target.value)
                    }
                    className="w-full border p-1"
                  >
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="yellow">Yellow</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm">Size</label>
                  <select
                    value={(selectedItem as ConeItem).size}
                    onChange={(e) =>
                      handlePropertyChange("size", e.target.value)
                    }
                    className="w-full border p-1"
                  >
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                  </select>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
