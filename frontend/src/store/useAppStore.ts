import { create } from 'zustand';
import { AppState, BagItem, TotalCostText } from '../types';
import { TAX_RATE } from '../assets/defaultData';

export const useAppStore = create<AppState>((set) => {

  const calculateCost = (currentSubtotal: string): TotalCostText => {
    const floatTax = parseFloat(TAX_RATE) / 100;
    const subtotalAmount = parseFloat(currentSubtotal);
    const taxAmount = Math.round(subtotalAmount * floatTax * 100) / 100;

    return {
      taxText: taxAmount.toFixed(2),
      totalText: (subtotalAmount + taxAmount).toFixed(2),
    }
  };

  return {
    bag: [],
    totalItems: 0,
    subtotalText: '0.00',
    taxText: '0.00',
    totalText: '0.00',
    isDarkMode: false,

    addItem: (bagItem: BagItem) => {
      set((state) => {
        const itemTotal = parseFloat(bagItem.totalItemPrice);
        const parseSubtotal = parseFloat(state.subtotalText);
        const calcSubtotal = (itemTotal + parseSubtotal).toFixed(2);
        const totalCost = calculateCost(calcSubtotal);

        return {
          bag: [...state.bag, bagItem],
          totalItems: state.totalItems + bagItem.quantity,
          subtotalText: calcSubtotal,
          taxText: totalCost.taxText,
          totalText: totalCost.totalText
        }
      });
    },

    deleteItem: (bagItemId: string) => {
      set((state) => {
        const editedBag = [...state.bag];
        const index = state.bag.findIndex( item => item.bagItemId === bagItemId);
        const deleteItemSubtotal = parseFloat(state.bag[index].totalItemPrice);
        const parseSubtotal = parseFloat(state.subtotalText);
        const calcSubtotal = (parseSubtotal - deleteItemSubtotal).toFixed(2);
        const currentTotalItems = state.totalItems - state.bag[index].quantity;
        const totalCost = calculateCost(calcSubtotal);
        editedBag.splice(index, 1);

        return {
          bag: editedBag,
          totalItems: currentTotalItems,
          subtotalText: calcSubtotal,
          taxText: totalCost.taxText,
          totalText: totalCost.totalText
        }
      });
    },

    updateItem: (bagItem: BagItem) => {
      set((state) => {
        const editedBag = [...state.bag];
        const index = state.bag.findIndex( item => item.bagItemId === bagItem.bagItemId);
        const previousItemSubtotal = parseFloat(state.bag[index].totalItemPrice);
        const parseSubtotal = parseFloat(state.subtotalText);
        const currentItemSubtotal = parseFloat(bagItem.totalItemPrice);
        const calcSubtotal = (parseSubtotal - previousItemSubtotal + currentItemSubtotal).toFixed(2);
        const currentTotalItems = state.totalItems - state.bag[index].quantity + bagItem.quantity;
        const totalCost = calculateCost(calcSubtotal);
        editedBag[index] = bagItem;
        
        return {
          bag: editedBag,
          totalItems: currentTotalItems,
          subtotalText: calcSubtotal,
          taxText: totalCost.taxText,
          totalText: totalCost.totalText
        }
      });
    },

    clearBag: () => {
      set(() => {
        return {
          bag: [],
          totalItems: 0,
          subtotalText: '0.00',
          taxText: '0.00',
          totalText: '0.00',
        }
      });
    },

    toggleDarkMode: () => {
      set((state) => {
        return {
          isDarkMode: !state.isDarkMode,
        }
      });
    },

    setDarkMode: (darkMode: boolean) => {
      set(() => {
        return {
          isDarkMode: darkMode,
        }
      });
    }
  }
});
