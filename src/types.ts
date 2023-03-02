export type CustomOption = {
  id: string;
  name: string;
  price?: string;
}

export type MenuCategory = '' |'appetizers' | 'soups' | 'main-entree' | 'bowls' | 'fried-rice-noodles' | 'side-orders' | 'beverages';

export interface MenuItem {
  id: string;
  category: MenuCategory;
  name: string;
  description: string;
  price: string;
  dumpling?: CustomOption[];
  soup?: CustomOption[];
  bowl?: CustomOption[];
  protein?: CustomOption[];
  tea?: CustomOption[];
  coke?: CustomOption[];
}

export type MenuItemFormValues = {
  radio: string;
  quantity: number;
  specialInstructions: string;
};

export type BagItemOptions = {
  bagId: string;
  totalItemPrice: string;
  quantity: number;
  radioOption?: string,
  specialInstructions: string;
}

export interface BagItem extends MenuItem {
  bagId: string;
  totalItemPrice: string;
  quantity: number;
  radioOption?: string,
  specialInstructions: string;
};

export type BagContextType = {
  bag: BagItem[];
  totalItems: number;
  subtotalText: string;
  taxText: string;
  totalText: string;
  addItem: (bagItem: BagItem) => void;
  updateItem: (bagItem: BagItem) => void;
  deleteItem: (bagId: string) => void;
};
