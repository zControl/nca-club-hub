import {
  type ConeItem,
  type PlacedItem,
  type PlayerItem,
} from "@/pages/training/draggables";
import { useItemStore } from "@/store/useItemStore";
import React from "react";

interface ItemFormProps {
  item: PlacedItem;
}

export function PlayerForm({ item }: { item: PlayerItem }) {
  const updateItem = useItemStore((state) => state.updateItem);

  const handleChange = (property: string, value: string | number) => {
    updateItem({ ...item, [property]: value });
  };

  return (
    <>
      <label className="block text-sm">Name</label>
      <input
        type="text"
        value={item.name}
        onChange={(e) => handleChange("name", e.target.value)}
        className="w-full border p-1"
      />
      <label className="block text-sm">Number</label>
      <input
        type="number"
        value={item.number}
        onChange={(e) => handleChange("number", parseInt(e.target.value))}
        className="w-full border p-1"
      />
      <label className="block text-sm">Color</label>
      <select
        value={item.color}
        onChange={(e) => handleChange("color", e.target.value)}
        className="w-full border p-1"
      >
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
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
