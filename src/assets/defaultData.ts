import { MenuItem, BagItem, MenuItemFormValues, BagItemOptions } from '../types';

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
}

export const defaultBagItemOptions: BagItemOptions = {
  bagItemId: '',
  totalItemPrice: '',
  quantity: 0,
  specialInstructions: '',
  radioOption: ''
}

export const defaultMenuItem: MenuItem = {
  id: '',
  category: '',
  imgSrc: '',
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