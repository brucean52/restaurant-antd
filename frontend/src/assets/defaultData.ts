import { 
  MenuItem,
  BagItem,
  MenuItemFormValues,
  BagItemOptions,
  NutriTableHeader,
  CustomOption
} from '../types';

export const maxWidthXXS = 350;
export const maxWidthXS = 576;
export const maxWidthMdOrLess = 769;

export const minWidthMD = 768;
export const minWidthLG = 992;
export const minWidthXL = 1200;
export const minWidth4K = 2500;

export const defaultBagItem: BagItem = {
  bagItemId: '',
  id: '',
  category: '',
  imgSrc: '',
  name: '',
  description: '',
  price: '',
  totalItemPrice: '',
  quantity: 0,
  specialInstructions: ''
};

export const defaultBagItemOptions: BagItemOptions = {
  bagItemId: '',
  totalItemPrice: '',
  quantity: 0,
  specialInstructions: '',
  radioOption: ''
};

export const defaultMenuItem: MenuItem = {
  id: '',
  category: '',
  imgSrc: '',
  name: '',
  description: '',
  price: '',
};

export const defaultMenuItemFormValues: MenuItemFormValues =  {
  radio: '',
  quantity: 1,
  specialInstructions: '',
};

export const defaultCustomOption: CustomOption =  {
  id: '',
  name: '',
  price: '',
};

export const TAX_RATE = '10.75';

export const nutriTableHeaders: NutriTableHeader[] = [
  { title: 'Name', id: 'name' },
  { title: 'Servings', id: 'servings' },
  { title: 'Calories', id: 'calories' },
  { title: 'Cals from Fat', id: 'calsFromFat' },
  { title: 'Fat', id: 'fat' },
  { title: 'Saturated Fat', id: 'saturatedFat' },
  { title: 'Trans Fat', id: 'transFat' },
  { title: 'Cholesterol', id: 'cholesterol' },
  { title: 'Sodium', id: 'sodium' },
  { title: 'Carbs', id: 'carbohydrates' },
  { title: 'Fiber', id: 'fiber' },
  { title: 'Sugar', id: 'sugar' },
  { title: 'Protein', id: 'protein' },
];

export const RADIAN = Math.PI / 180;