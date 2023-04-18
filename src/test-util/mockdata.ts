import cknLettuceWrapsImg from '../assets/images/appetizers/chicken-lettuce-wraps.webp';
import porkDumplingsImg from '../assets/images/appetizers/pork-dumplings.webp';
import padThaiImg from '../assets/images/fried-rice-noodles/pad-thai.webp';
import { BagItem, BagContextType, BagItemOptions } from '../types';

export const mockItemOne: BagItem = {
  bagItemId: 'abc123',
  id: 'chicken-lettuce-wraps',
  category: 'appetizers',
  imgSrc: cknLettuceWrapsImg,
  name: 'Chicken Lettuce Wraps',
  description: 'A secret family recipe and our signature dish. Enough said.',
  price: '16.00',
  totalItemPrice: '48.00',
  quantity: 3,
  specialInstructions: ''
}

export const editedMockItemOne: BagItem = {
  bagItemId: 'abc123',
  id: 'chicken-lettuce-wraps',
  category: 'appetizers',
  imgSrc: cknLettuceWrapsImg,
  name: 'Chicken Lettuce Wraps',
  description: 'A secret family recipe and our signature dish. Enough said.',
  price: '16.00',
  totalItemPrice: '32.00',
  quantity: 2,
  specialInstructions: 'add spicy'
}

export const mockItemTwo: BagItem = {
  bagItemId: 'abc456',
  id: 'pork-dumplings',
  category: 'appetizers',
  imgSrc: porkDumplingsImg,
  name: 'Pork Dumplings | 6 Count',
  description: 'Pan-fried or steamed, light chili sauce drizzle',
  price: '14.50',
  dumpling: [
    {
      id: 'pan-fried',
      name: 'Pan Fried'
    },
    {
      id: 'steamed',
      name: 'Steamed'
    }
  ],
  totalItemPrice: '29.00',
  quantity: 2,
  specialInstructions: 'extra spicy',
  radioOption: 'steamed+'
}

export const mockItemThree: BagItem = {
  bagItemId: 'abc789',
  id: 'pad-thai',
  category: 'fried-rice-noodles',
  imgSrc: padThaiImg,
  name: 'Pad Thai',
  description: 'Rice noodles, Thai spices, tofu, green onion, peanuts',
  price: '0.00',
  protein: [
    {
      id: 'chicken',
      name: 'Chicken',
      price: '20.00'
    },
    {
      id: 'shrimp',
      name: 'Shrimp',
      price: '22.50'
    },
    {
      id: 'combo',
      name: 'Combo',
      price: '23.50'
    }
  ],
  totalItemPrice: '23.50',
  quantity: 1,
  specialInstructions: '',
  radioOption: 'combo+23.50'
}

export const mockContextValues: BagContextType = {
  bag: [mockItemOne, mockItemTwo, mockItemThree],
  totalItems: 6,
  subtotalText: '100.50',
  taxText: '10.80',
  totalText: '111.30',
  addItem: jest.fn(),
  updateItem: jest.fn(),
  deleteItem: jest.fn(),
}

export const mockEmptyContextValues: BagContextType = {
  bag: [],
  totalItems: 0,
  subtotalText: '',
  taxText: '',
  totalText: '',
  addItem: jest.fn(),
  updateItem: jest.fn(),
  deleteItem: jest.fn(),
}

export const mockBagItemOptionsOne : BagItemOptions = {
  bagItemId: mockItemOne.bagItemId,
  totalItemPrice: '48.00',
  quantity: 3,
  specialInstructions: '',
  radioOption: ''
}

export const mockBagItemOptionsTwo : BagItemOptions = {
  bagItemId: mockItemTwo.bagItemId,
  totalItemPrice: '29.00',
  quantity: 2,
  specialInstructions: 'extra spicy',
  radioOption: mockItemTwo.radioOption
}

export const mockBagItemOptionsThree : BagItemOptions = {
  bagItemId: mockItemThree.bagItemId,
  totalItemPrice: '23.50',
  quantity: 1,
  specialInstructions: '',
  radioOption: mockItemThree.radioOption
}