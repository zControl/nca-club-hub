import type { PlacedItem } from '@/pages/training/draggables/types';
import { create } from 'zustand';

interface ItemStore {
  items: PlacedItem[];
  selectedItemId: string | null;
  setSelectedItemId: (id: string | null) => void;
  updateItem: (updatedItem: PlacedItem) => void;
  setItems: (newItems: PlacedItem[] | ((prevItems: PlacedItem[]) => PlacedItem[])) => void;
}

export const useItemStore = create<ItemStore>((set) => ({
  items: [],
  selectedItemId: null,
  setSelectedItemId: (id) => set({ selectedItemId: id }),
  updateItem: (updatedItem) => set((state) => ({
    items: state.items.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    ),
  })),
  setItems: (newItems) => set((state) => ({
    items: typeof newItems === 'function' ? newItems(state.items) : newItems,
  })),
}));