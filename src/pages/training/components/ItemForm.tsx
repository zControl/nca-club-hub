import { Button } from "@/components/ui/button";
import { colorVariants } from "@/components/ui/color-variants";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import {
  type ConeItem,
  type ItemColor,
  type PlacedItem,
  type PlayerItem,
} from "@/pages/training/draggables";
import { useItemStore } from "@/store/useItemStore";
import { CopyPlusIcon, EyeIcon, EyeOffIcon, Trash2Icon } from "lucide-react";
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
    <div className="flex items-center justify-between">
      <div className="flex flex-col gap-2">
        <span className="font-semibold underline uppercase">{item.type}</span>
        <span className="text-xs italic">{item.id}</span>
      </div>
      <div className="flex items-center justify-end gap-2">
        <Button variant={"highlight"} size={"icon"} onClick={handleDuplicate}>
          <CopyPlusIcon />
        </Button>
        <Button variant={"destructive"} size={"icon"} onClick={handleDelete}>
          <Trash2Icon />
        </Button>
      </div>
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
      <Label>Color</Label>
      <div className="flex flex-row justify-around gap-2 px-4">
        {colors.map((color) => (
          <div
            key={color}
            onClick={() => handleColorChange(color)}
            className={cn(
              colorVariants({ color, size: "small" }),
              color === item.color ? "border-2 border-white" : "",
            )}
          />
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
    <>
      <ItemFormHeader item={item} />
      <Label>Name</Label>
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
      <Label>Number</Label>
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
      <label className="block text-sm">Size</label>
      <select
        value={item.color}
        onChange={(e) => handleChange("size", e.target.value)}
        className="w-full border p-1"
      >
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
        <option value="huge">Huge</option>
      </select>
    </>
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
