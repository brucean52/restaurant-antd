import { MenuItem, BagItem, MenuItemFormValues, BagItemOptions } from '../types';

export const defaultBagItem: BagItem = {
  bagId: '',
  id: '',
  category: '',
  name: '',
  description: '',
  price: '',
  totalItemPrice: '',
  quantity: 0,
  specialInstructions: ''
}

export const defaultBagItemOptions: BagItemOptions = {
  bagId: '',
  totalItemPrice: '',
  quantity: 0,
  specialInstructions: '',
  radioOption: ''
}

export const defaultMenuItem: MenuItem = {
  id: '',
  category: '',
  name: '',
  description: '',
  price: '',
}

export const defaultMenuItemFormValues: MenuItemFormValues =  {
  radio: '',
  quantity: 1,
  specialInstructions: '',
}

export const TAX_RATE = '10.75';