import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { colorVariants, sizeVariants } from "@/components/ui/variants";
import { cn } from "@/lib/utils";
import {
  type ConeItem,
  type ItemColor,
  type ItemSize,
  type PlacedItem,
  type PlayerItem,
} from "@/pages/training/draggables";
import { useItemStore } from "@/store/useItemStore";
import {
  CopyPlusIcon,
  EyeIcon,
  EyeOffIcon,
  Trash2Icon,
  XIcon,
} from "lucide-react";
import React from "react";

interface ItemFormProps {
  item: PlacedItem;
}

export function ItemFormHeader({ item }: { item: PlayerItem }) {
  const duplicateItem = useItemStore((state) => state.duplicateItem);
  const deleteItem = useItemStore((state) => state.deleteItem);
  const setSelectedItemId = useItemStore((state) => state.setSelectedItemId);

  const handleDuplicate = () => {
    duplicateItem(item.id);
  };

  const handleDelete = () => {
    deleteItem(item.id);
    setSelectedItemId(null);
  };

  return (
    <div className="flex items-center justify-between border-b-4 border-muted pb-2">
      <div className="flex items-center justify-end gap-2">
        <Button variant={"destructive"} size={"icon"} onClick={handleDelete}>
          <Trash2Icon />
        </Button>
        <Button variant={"highlight"} size={"icon"} onClick={handleDuplicate}>
          <CopyPlusIcon />
        </Button>
      </div>
      <Button
        variant={"ghost"}
        size={"icon"}
        onClick={() => setSelectedItemId(null)}
      >
        <XIcon />
      </Button>
    </div>
  );
}

export function ItemColorSelector({ item }: { item: PlacedItem }) {
  const updateItem = useItemStore((state) => state.updateItem);

  const colors: ItemColor[] = ["red", "blue", "yellow", "green"];

  const handleColorChange = (color: ItemColor) => {
    updateItem({ ...item, color });
  };

  return (
    <>
      <div className="flex flex-row justify-around gap-2 px-4">
        {colors.map((color) => (
          <div
            key={color}
            onClick={() => handleColorChange(color)}
            className={cn(
              colorVariants({ color }),
              sizeVariants({ size: "small" }),
              color === item.color ? "border-2 border-foreground" : "",
            )}
          />
        ))}
      </div>
    </>
  );
}

export function ItemSizeSelector({ item }: { item: PlacedItem }) {
  const updateItem = useItemStore((state) => state.updateItem);

  const sizes: ItemSize[] = ["small", "medium", "large", "huge"];

  const handleSizeChange = (size: ItemSize) => {
    updateItem({ ...item, size });
  };

  return (
    <>
      <div className="flex flex-row justify-around gap-2 px-4">
        {sizes.map((size) => (
          <div key={size} className="flex flex-col items-center">
            <div
              onClick={() => handleSizeChange(size as ItemSize)}
              className={cn(
                "flex items-center justify-center border cursor-pointer",
                sizeVariants({ size }),
                size === item.size
                  ? "border-2 border-foreground"
                  : "border border-foreground/30",
              )}
            />
            <span className="mt-1 text-xs capitalize">{size}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export function PlayerForm({ item }: { item: PlayerItem }) {
  const updateItem = useItemStore((state) => state.updateItem);

  const handleChange = (property: string, value: string | number | boolean) => {
    updateItem({ ...item, [property]: value });
  };

  return (
    <div className="flex flex-col space-y-4">
      <ItemFormHeader item={item} />
      <div className="flex items-center justify-normal gap-2">
        <div onClick={() => handleChange("showName", !item.showName)}>
          {item.showName ? <EyeIcon /> : <EyeOffIcon />}
        </div>
        <Input
          type="text"
          value={item.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />
      </div>
      <div className="flex items-center gap-2">
        <div onClick={() => handleChange("showNumber", !item.showNumber)}>
          {item.showNumber ? <EyeIcon /> : <EyeOffIcon />}
        </div>
        <Input
          type="number"
          min={1}
          max={99}
          step={1}
          value={item.number}
          onChange={(e) => handleChange("number", parseInt(e.target.value))}
        />
      </div>
      <ItemColorSelector item={item} />
      <ItemSizeSelector item={item} />
    </div>
  );
}

export function ConeForm({ item }: { item: ConeItem }) {
  const updateItem = useItemStore((state) => state.updateItem);

  const handleChange = (property: string, value: string | number) => {
    updateItem({ ...item, [property]: value });
  };

  return (
    <>
      <label className="block text-sm">Color</label>
      <select
        value={item.color}
        onChange={(e) => handleChange("color", e.target.value)}
        className="w-full border p-1"
      >
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
      </select>
      <label className="block text-sm">Size</label>
      <select
        value={item.size}
        onChange={(e) => handleChange("size", e.target.value)}
        className="w-full border p-1"
      >
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>
    </>
  );
}

export const ItemForm: React.FC<ItemFormProps> = ({ item }) => {
  switch (item.type) {
    case "player":
      return <PlayerForm item={item} />;
    case "cone":
      return <ConeForm item={item} />;
    default:
      return null;
  }
};
