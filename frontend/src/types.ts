export type AppState = {
  bag: BagItem[];
  totalItems: number;
  subtotalText: string;
  taxText: string;
  totalText: string;
  isDarkMode: boolean;
  addItem: (bagItem: BagItem) => void;
  deleteItem: (bagItemId: string) => void;
  updateItem: (bagItem: BagItem) => void;
  clearBag: () => void;
  toggleDarkMode: () => void;
  setDarkMode: (darkMode: boolean) => void;
};

export type CustomOption = {
  id: string;
  name: string;
  price: string;
};

export type MenuCategory = '' |'appetizers' | 'soups' | 'main-entree' | 'bowls' 
  | 'fried-rice-noodles' | 'side-orders' | 'beverages';

export interface MenuItem {
  id: string;
  category: MenuCategory;
  imgSrc: string;
  name: string;
  description: string;
  price: string;
  dumpling?: CustomOption[];
  soup?: CustomOption[];
  rice?: CustomOption[];
  protein?: CustomOption[];
  tea?: CustomOption[];
  soda?: CustomOption[];
};

export type ProteinType = 'vegetable' | 'chicken' | 'shrimp' | 'beef' | 'pork' | 'combo';

export type MenuItemFormValues = {
  radio: string;
  quantity: number;
  specialInstructions: string;
};

export type BagItemOptions = {
  bagItemId: string;
  totalItemPrice: string;
  quantity: number;
  radioOption?: string,
  specialInstructions: string;
};

export interface BagItem extends MenuItem {
  bagItemId: string;
  totalItemPrice: string;
  quantity: number;
  radioOption?: string,
  specialInstructions: string;
};

export type NutriTableKey = 'id' |'category' | 'name' | 'servings' | 'calories'
  | 'calsFromFat' | 'fat' | 'saturatedFat'| 'transFat' | 'cholesterol' | 'sodium'
  | 'carbohydrates' | 'fiber' | 'sugar'| 'protein';

export type NutriTableHeader = {
  title: string;
  id: NutriTableKey
};

export interface NutritionItem {
  id: string;
  category: MenuCategory;
  name: string;
  imgSrc: string;
  description: string;
  servings: number;
  calories: number;
  calsFromFat: number;
  fat: string;
  saturatedFat: string;
  transFat: string;
  cholesterol: string;
  sodium: string;
  carbohydrates: string;
  fiber: string;
  sugar: string;
  protein: string;
  dvFat: number;
  dvSaturatedFat: number;
  dvCholesterol: number;
  dvSodium: number;
  dvCarbohydrates: number;
  dvFiber: number;
};

export type TotalCostText = {
  taxText: string;
  totalText: string;
}

export type NutriVisualSegment = 'image' | 'barChart' | 'pieChart';