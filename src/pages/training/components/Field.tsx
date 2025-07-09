import { getItemComponent } from "@/pages/training/components/ItemRegistry";
import type { PlacedItem } from "@/pages/training/components/types";

interface FieldProps {
  items: PlacedItem[];
}
export function Field({ items }: FieldProps) {
  return (
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
            }}
          >
            <ItemComponent id={item.id} />
          </div>
        );
      })}
    </div>
  );
}
