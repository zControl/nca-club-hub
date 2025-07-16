import type { PlacedItem } from '@/pages/training/draggables/types';
import { create } from 'zustand';

interface ItemStore {
  items: PlacedItem[];
  selectedItemId: string | null;
  setSelectedItemId: (id: string | null) => void;
  updateItem: (updatedItem: PlacedItem) => void;
  setItems: (newItems: PlacedItem[] | ((prevItems: PlacedItem[]) => PlacedItem[])) => void;
  duplicateItem: (id: string) => void;
  deleteItem: (id: string) => void;
}

export const useItemStore = create<ItemStore>((set) => ({
  items: [],
  selectedItemId: null,
  setSelectedItemId: (id) => set({ selectedItemId: id }),
  updateItem: (updatedItem) => set((state) => {
    const updatedItems = state.items.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );
    console.log('updateItem:', updatedItems);
    return { items: updatedItems };
  }),
  setItems: (newItems) => set((state) => {
    const updatedItems = typeof newItems === 'function' ? newItems(state.items) : newItems;
    console.log('setItems:', updatedItems);
    return { items: updatedItems };
  }),
  duplicateItem: (id) => set((state) => {
    const itemToDuplicate = state.items.find((item) => item.id === id);
    if (itemToDuplicate) {
      const newItem = { ...itemToDuplicate, id: `${itemToDuplicate.type}-${Date.now().toString(36)}-${Math.floor(Math.random() * 1000)}` };
      return { items: [...state.items, newItem] };
    }
    return state;
  }),
  deleteItem: (id) => set((state) => {
    const updatedItems = state.items.filter((item) => item.id !== id);
    return { items: updatedItems };
  }),
}));