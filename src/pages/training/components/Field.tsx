import { getItemComponent } from "@/pages/training/draggables/ItemRegistry";
import { useItemStore } from "@/store/useItemStore";
import { ItemForm } from "./ItemForm";

export function Field() {
  const { items, selectedItemId, setSelectedItemId } = useItemStore();
  const selectedItem = items.find((item) => item.id === selectedItemId);

  const handleItemClick = (itemId: string) => {
    setSelectedItemId(itemId === selectedItemId ? null : itemId);
    console.log("Selected item:", itemId);
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
            <ItemForm item={selectedItem} />
          </div>
        </div>
      )}
    </div>
  );
}
