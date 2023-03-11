import { BagItem, BagContextType, BagItemOptions } from '../types'

export const mockItem1: BagItem = {
  bagItemId: 'abc123',
  id: 'chicken-lettuce-wraps',
  category: 'appetizers',
  name: 'Chicken Lettuce Wraps',
  description: 'A secret family recipe and our signature dish. Enough said.',
  price: '16.00',
  totalItemPrice: '48.00',
  quantity: 3,
  specialInstructions: ''
}

export const editedMockItem1: BagItem = {
  bagItemId: 'abc123',
  id: 'chicken-lettuce-wraps',
  category: 'appetizers',
  name: 'Chicken Lettuce Wraps',
  description: 'A secret family recipe and our signature dish. Enough said.',
  price: '16.00',
  totalItemPrice: '32.00',
  quantity: 2,
  specialInstructions: 'add spicy'
}

export const mockItem2: BagItem = {
  bagItemId: 'abc456',
  id: 'pork-dumplings',
  category: 'appetizers',
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

export const mockItem3: BagItem = {
  bagItemId: 'abc789',
  id: 'pad-thai',
  category: 'fried-rice-noodles',
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
  bag: [mockItem1, mockItem2, mockItem3],
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

export const mockBagItemOptions1 : BagItemOptions = {
  bagItemId: mockItem1.bagItemId,
  totalItemPrice: '48.00',
  quantity: 3,
  specialInstructions: '',
  radioOption: ''
}

export const mockBagItemOptions2 : BagItemOptions = {
  bagItemId: mockItem2.bagItemId,
  totalItemPrice: '29.00',
  quantity: 2,
  specialInstructions: 'extra spicy',
  radioOption: mockItem2.radioOption
}

export const mockBagItemOptions3 : BagItemOptions = {
  bagItemId: mockItem3.bagItemId,
  totalItemPrice: '23.50',
  quantity: 1,
  specialInstructions: '',
  radioOption: mockItem3.radioOption
}