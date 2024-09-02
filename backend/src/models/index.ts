export type MenuCategory = 'appetizers' | 'soups' | 'main-entree' | 'bowls' 
  | 'fried-rice-noodles' | 'side-orders' | 'beverages';

type CustomOption = {
  id: string;
  name: string;
  price: string;
};

export interface MenuItem {
  id: string;
  category: MenuCategory;
  imgSrc: string
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

export interface NutritionItem {
  id: string;
  category: MenuCategory;
  name: string;
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
};