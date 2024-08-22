import React, { useState } from 'react';
import { BagItem, BagContextType } from './types';
import { TAX_RATE } from './assets/defaultData';

export const BagContext = React.createContext<BagContextType | null>(null);

const BagProvider: React.FC<{ children: any }> = ({ children }) => {

  const floatTax = parseFloat(TAX_RATE)/100;
  const [bag, setBag] = useState<BagItem[]>([]);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [subtotalText, setSubtotalText] = useState<string>('0.00');
  const [taxText, setTaxText] = useState<string>('0.00');
  const [totalText, setTotalText] = useState<string>('0.00');

  const calculateCost = (currentSubtotal: string) => {
    let subtotalAmount = parseFloat(currentSubtotal);
    let taxAmount = Math.round((subtotalAmount * floatTax * 100)) / 100;
    let totalAmount = (subtotalAmount + taxAmount).toFixed(2);

    setTaxText(taxAmount.toFixed(2));
    setTotalText(totalAmount);
  };

  const addItem = (bagItem: BagItem) => {
    let itemTotal = parseFloat(bagItem.totalItemPrice);
    let parseSubtotal = parseFloat(subtotalText);
    let calcSubtotal = (itemTotal + parseSubtotal).toFixed(2);

    calculateCost(calcSubtotal);
    setBag([...bag, bagItem]);
    setTotalItems(totalItems + bagItem.quantity);
    setSubtotalText(calcSubtotal);
  };

  const updateItem = (bagItem: BagItem) => {
    let editedBag = [...bag];
    let index = bag.findIndex( item => item.bagItemId === bagItem.bagItemId);
    let previousItemSubtotal = parseFloat(bag[index].totalItemPrice);
    let parseSubtotal = parseFloat(subtotalText);
    let currentItemSubtotal = parseFloat(bagItem.totalItemPrice);
    let calcSubotal = (parseSubtotal - previousItemSubtotal + currentItemSubtotal).toFixed(2);
    let previousItemQuantity = bag[index].quantity;
    let currentTotalItems = totalItems - previousItemQuantity + bagItem.quantity;
    editedBag[index] = bagItem;

    calculateCost(calcSubotal);
    setBag(editedBag);
    setSubtotalText(calcSubotal);
    setTotalItems(currentTotalItems);
  };

  const deleteItem = (bagItemId: string) => {
    let editedBag = [...bag];
    let index = bag.findIndex( item => item.bagItemId === bagItemId);
    let deleteItemSubtotal = parseFloat(bag[index].totalItemPrice);
    let parseSubtotal = parseFloat(subtotalText);
    let calcSubotal = (parseSubtotal - deleteItemSubtotal).toFixed(2);
    let deleteItemQuantity = bag[index].quantity;
    let currentTotalItems = totalItems - deleteItemQuantity;
    editedBag.splice(index, 1);

    calculateCost(calcSubotal);
    setBag(editedBag);
    setSubtotalText(calcSubotal);
    setTotalItems(currentTotalItems);
  };

  return (
    <BagContext.Provider value={{
      bag,
      totalItems,
      subtotalText,
      taxText,
      totalText,
      addItem,
      updateItem,
      deleteItem
    }}>
      {children}
    </BagContext.Provider>
  );
};

export default BagProvider;