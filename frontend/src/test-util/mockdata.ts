import { BagItem, BagContextType, BagItemOptions } from '../types';

export const mockItemOne: BagItem = {
  bagItemId: 'abc123',
  id: 'chicken-lettuce-wraps',
  category: 'appetizers',
  imgSrc: '/images/appetizers/chicken-lettuce-wraps.webp',
  name: 'Chicken Lettuce Wraps',
  description: 'A secret family recipe and our signature dish. Enough said.',
  price: '16.00',
  totalItemPrice: '48.00',
  quantity: 3,
  specialInstructions: ''
};

export const editedMockItemOne: BagItem = {
  bagItemId: 'abc123',
  id: 'chicken-lettuce-wraps',
  category: 'appetizers',
  imgSrc: '/images/appetizers/chicken-lettuce-wraps.webp',
  name: 'Chicken Lettuce Wraps',
  description: 'A secret family recipe and our signature dish. Enough said.',
  price: '16.00',
  totalItemPrice: '32.00',
  quantity: 2,
  specialInstructions: 'add spicy'
};

export const mockItemTwo: BagItem = {
  bagItemId: 'abc456',
  id: 'pork-dumplings',
  category: 'appetizers',
  imgSrc: '/images/appetizers/pork-dumplings.webp',
  name: 'Pork Dumplings | 6 Count',
  description: 'Pan-fried or steamed, light chili sauce drizzle',
  price: '14.50',
  dumpling: [
    {
      id: 'pan-fried',
      name: 'Pan Fried',
      price: '0.00'
    },
    {
      id: 'steamed',
      name: 'Steamed',
      price: '0.00'
    }
  ],
  totalItemPrice: '29.00',
  quantity: 2,
  specialInstructions: 'extra spicy',
  radioOption: 'steamed+'
};

export const mockItemThree: BagItem = {
  bagItemId: 'abc789',
  id: 'pad-thai',
  category: 'fried-rice-noodles',
  imgSrc: '/images/fried-rice-noodles/pad-thai.webp',
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
};

export const mockContextValues: BagContextType = {
  bag: [mockItemOne, mockItemTwo, mockItemThree],
  totalItems: 6,
  subtotalText: '100.50',
  taxText: '10.80',
  totalText: '111.30',
  isDarkMode: true,
  addItem: vi.fn(),
  updateItem: vi.fn(),
  deleteItem: vi.fn(),
  toggleDarkMode: vi.fn()
};

export const mockEmptyContextValues: BagContextType = {
  bag: [],
  totalItems: 0,
  subtotalText: '',
  taxText: '',
  totalText: '',
  isDarkMode: false,
  addItem: vi.fn(),
  updateItem: vi.fn(),
  deleteItem: vi.fn(),
  toggleDarkMode: vi.fn()
};

export const mockBagItemOptionsOne : BagItemOptions = {
  bagItemId: mockItemOne.bagItemId,
  totalItemPrice: '48.00',
  quantity: 3,
  specialInstructions: '',
  radioOption: ''
};

export const mockBagItemOptionsTwo : BagItemOptions = {
  bagItemId: mockItemTwo.bagItemId,
  totalItemPrice: '29.00',
  quantity: 2,
  specialInstructions: 'extra spicy',
  radioOption: mockItemTwo.radioOption
};

export const mockBagItemOptionsThree : BagItemOptions = {
  bagItemId: mockItemThree.bagItemId,
  totalItemPrice: '23.50',
  quantity: 1,
  specialInstructions: '',
  radioOption: mockItemThree.radioOption
};

export const mockChartData = [
  {
    name: 'Fat',
    value: 15
  },
  {
    name: 'Carbs',
    value: 50
  },
  {
    name: 'Protein',
    value: 35
  },
];