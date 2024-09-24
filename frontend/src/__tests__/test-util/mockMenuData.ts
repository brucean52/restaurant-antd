import { MenuItem, CustomOption } from "../../types";

export const riceOptions: CustomOption[] = [
  {
    id: "brown-rice",
    name: "Brown Rice",
    price: "0.50"
  },
  {
      id: "fried-rice",
      name: "Fried Rice",
      price: "2.00"
  },
  {
      id: "white-rice",
      name: "White Rice",
      price: "0.00"
  }
]

export const mockMenuDataArray: MenuItem[] = [
  {
    id: 'chicken-lettuce-wraps',
    category: 'appetizers',
    imgSrc: '/images/appetizers/chicken-lettuce-wraps.webp',
    name: 'Chicken Lettuce Wraps',
    description: 'A secret family recipe and our signature dish. Enough said.',
    price: '16.00'
  },
  {
    id: 'chili-garlic-green-beans',
    category: 'appetizers',
    imgSrc: '/images/appetizers/chili-garlic-green-beans.webp',
    name: 'Chili Garlic Green Beans',
    description: 'Fiery red chili sauce, fresh garlic, & Sichuan preserves',
    price: '10.00'
  },
  {
    id: 'crispy-green-beans',
    category: 'appetizers',
    imgSrc: '/images/appetizers/crispy-green-beans.webp',
    name: 'Crispy Green Beans',
    description: 'Tempura-battered, signature spicy dipping sauce',
    price: '12.50'
  },
  {
    id: 'edamame',
    category: 'appetizers',
    imgSrc: '/images/appetizers/edamame.webp',
    name: 'Edamame',
    description: 'Steamed to order, tossed with kosher salt',
    price: '10.00'
  },
  {
    id: 'tempura-calamari',
    category: 'appetizers',
    imgSrc: '/images/appetizers/tempura-calamari.webp',
    name: 'Tempura Calamari',
    description: 'Crisp calamari, hunan salt, wasabi aioli dipping sauce',
    price: '15.50'
  },
  {
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
    ]
  },
  {
    id: 'shrimp-dumplings',
    category: 'appetizers',
    imgSrc: '/images/appetizers/shrimp-dumplings.webp',
    name: 'Shrimp Dumplings | 6 Count',
    description: 'Pan-fried or steamed, light chili sauce drizzle',
    price: '14.00',
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
    ]
  },
  {
    id: 'pork-egg-rolls',
    category: 'appetizers',
    imgSrc: '/images/appetizers/pork-egg-rolls.webp',
    name: 'Pork Egg Rolls | 2 Count',
    description: 'Hand-rolled with julienned veggies, sweet and sour mustard sauce',
    price: '10.50'
  },
  {
    id: 'vegetable-spring-rolls',
    category: 'appetizers',
    imgSrc: '/images/appetizers/vegetable-spring-rolls.webp',
    name: 'Vegetable Spring Rolls | 3 Count',
    description: 'Crispy rolls with julienned veggies, sweet chili dipping sauce',
    price: '10.00'
  },
  {
    id: 'egg-drop-soup',
    category: 'soups',
    imgSrc: '/images/soups/egg-drop-soup.webp',
    name: 'Egg Drop Soup',
    description: 'Velvety broth, julienned carrots, green onion',
    price: '0.00',
    soup: [
      {
        id: 'cup',
        name: 'Cup',
        price: '7.50'
      },
      {
        id: 'bowl',
        name: 'Bowl',
        price: '12.50'
      },
    ]
  },
  {
    id: 'hot-sour-soup',
    category: 'soups',
    imgSrc: '/images/soups/hot-sour-soup.webp',
    name: 'Hot & Sour Soup',
    description: 'Rich and tangy broth, silken tofu, chicken, bamboo shoots, egg',
    price: '0.00',
    soup: [
      {
        id: 'cup',
        name: 'Cup',
        price: '7.50'
      },
      {
        id: 'bowl',
        name: 'Bowl',
        price: '12.50'
      },
    ]
  },
  {
    id: 'spicy-chicken-soup',
    category: 'soups',
    imgSrc: '/images/soups/spicy-chicken-soup.webp',
    name: 'Spicy Chicken Nooodle Soup',
    description: 'Pad Thai noodles, veggies, spicy broth',
    price: '0.00',
    soup: [
      {
        id: 'cup',
        name: 'Cup',
        price: '8.50'
      },
      {
        id: 'bowl',
        name: 'Bowl',
        price: '13.50'
      },
    ]
  },
  {
    id: 'wonton-soup',
    category: 'soups',
    imgSrc: '/images/soups/wonton-soup.webp',
    name: 'Wonton Soup',
    description: 'Savory broth, house-made pork wontons, shrimp, chicken',
    price: '0.00',
    soup: [
      {
        id: 'cup',
        name: 'Cup',
        price: '7.50'
      },
      {
        id: 'bowl',
        name: 'Bowl',
        price: '12.50'
      },
    ]
  },
  {
    id: 'beef-broccoli',
    category: 'main-entree',
    imgSrc: '/images/main-entree/beef-broccoli.webp',
    name: 'Beef with Broccoli',
    description: 'Flank steak, ginger-garlic aromatics, green onion, steamed broccoli',
    price: '22.00'
  },
  {
    id: 'crispy-honey-shrimp',
    category: 'main-entree',
    imgSrc: '/images/main-entree/crispy-honey-shrimp.webp',
    name: 'Crispy Honey Shrimp',
    description: 'Lightly battered, tangy honey sauce, green onion',
    price: '24.50'
  },
  {
    id: 'ginger-chicken-broccoli',
    category: 'main-entree',
    imgSrc: '/images/main-entree/ginger-chicken-broccoli.webp',
    name: 'Ginger Chicken with Broccoli',
    description: 'Ginger-garlic aromatics, green onion, steamed broccoli',
    price: '22.00'
  },
  {
    id: 'kung-pao-chicken',
    category: 'main-entree',
    imgSrc: '/images/main-entree/kung-pao-chicken.webp',
    name: 'Kung Pao Chicken',
    description: 'Spicy Sichuan chili sauce, peanuts, green onion, red chili peppers',
    price: '23.00'
  },
  {
    id: 'kung-pao-shrimp',
    category: 'main-entree',
    imgSrc: '/images/main-entree/kung-pao-shrimp.webp',
    name: 'Kung Pao Shrimp',
    description: 'Spicy Sichuan chili sauce, peanuts, green onion, red chili peppers',
    price: '25.00'
  },
  {
    id: 'ma-po-tofu',
    category: 'main-entree',
    imgSrc: '/images/main-entree/ma-po-tofu.webp',
    name: 'Ma Po Tofu',
    description: 'Crispy silken tofu, spicy red chili sauce, steamed broccoli',
    price: '18.00'
  },
  {
    id: 'mongolian-beef',
    category: 'main-entree',
    imgSrc: '/images/main-entree/mongolian-beef.webp',
    name: 'Mongolian Beef',
    description: 'Sweet soy glaze, flank steak, garlic, snipped green onion',
    price: '26.00'
  },
  {
    id: 'orange-chicken',
    category: 'main-entree',
    imgSrc: '/images/main-entree/orange-chicken.webp',
    name: 'Orange Chicken',
    description: 'Lightly battered, sweet citrus chili sauce, fresh orange slice',
    price: '19.50'
  },
  {
    id: 'salt-pepper-prawns',
    category: 'main-entree',
    imgSrc: '/images/main-entree/salt-pepper-prawns.webp',
    name: 'Salt & Pepper Prawns',
    description: 'Crisp prawns, aromatics, chili peppers, tossed in a spicy chili butter',
    price: '27.00'
  },
  {
    id: 'sweet-sour-chicken',
    category: 'main-entree',
    imgSrc: '/images/main-entree/sweet-sour-chicken.webp',
    name: 'Sweet & Sour Chicken',
    description: 'Sweet & sour sauce, pineapple, onion, bell peppers, ginger',
    price: '18.00'
  },
  {
    id: 'beef-broccoli-bowl',
    category: 'bowls',
    imgSrc: '/images/bowls/beef-broccoli-bowl.webp',
    name: 'Beef with Broccoli Bowl',
    description: 'Flank steak, ginger-garlic aromatics, green onion, steamed broccoli',
    price: '17.50',
    rice: riceOptions
  },
  {
    id: 'crispy-honey-shrimp-bowl',
    category: 'bowls',
    imgSrc: '/images/bowls/crispy-honey-shrimp-bowl.webp',
    name: 'Crispy Honey Shrimp Bowl',
    description: 'Lightly battered, tangy honey sauce, green onion',
    price: '19.50',
    rice: riceOptions
  },
  {
    id: 'ginger-chicken-broccoli-bowl',
    category: 'bowls',
    imgSrc: '/images/bowls/ginger-chicken-broccoli-bowl.webp',
    name: 'Ginger Chicken with Broccoli Bowl',
    description: 'Ginger-garlic aromatics, green onion, steamed broccoli',
    price: '15.50',
    rice: riceOptions
  },
  {
    id: 'kung-pao-chicken-bowl',
    category: 'bowls',
    imgSrc: '/images/bowls/kung-pao-chicken-bowl.webp',
    name: 'Kung Pao Chicken Bowl',
    description: 'Spicy Sichuan chili sauce, peanuts, green onion, red chili peppers',
    price: '15.50',
    rice: riceOptions
  },
  {
    id: 'kung-pao-shrimp-bowl',
    category: 'bowls',
    imgSrc: '/images/bowls/kung-pao-shrimp-bowl.webp',
    name: 'Kung Pao Shrimp Bowl',
    description: 'Spicy Sichuan chili sauce, peanuts, green onion, red chili peppers',
    price: '19.50',
    rice: riceOptions
  },
  {
    id: 'mongolian-beef-bowl',
    category: 'bowls',
    imgSrc: '/images/bowls/mongolian-beef-bowl.webp',
    name: 'Mongolian Beef Bowl',
    description: 'Sweet soy glaze, flank steak, garlic, snipped green onion',
    price: '17.50',
    rice: riceOptions
  },
  {
    id: 'orange-chicken-bowl',
    category: 'bowls',
    imgSrc: '/images/bowls/orange-chicken-bowl.webp',
    name: 'Orange Chicken Bowl',
    description: 'Lightly battered, sweet citrus chili sauce, fresh orange slice',
    price: '15.50',
    rice: riceOptions
  },
  {
    id: 'sweet-sour-chicken-bowl',
    category: 'bowls',
    imgSrc: '/images/bowls/sweet-sour-chicken-bowl.webp',
    name: 'Sweet & Sour Chicken Bowl',
    description: 'Sweet & sour sauce, pineapple, onion, bell peppers, ginger',
    price: '15.50',
    rice: riceOptions
  },
  {
    id: 'fried-rice',
    category: 'fried-rice-noodles',
    name: 'Fried Rice',
    imgSrc: '/images/fried-rice-noodles/fried-rice.webp',
    description: 'Wok-tossed with egg, carrots, bean sprouts, green onion',
    price: '0.00',
    protein: [
      {
        id: 'vegetable',
        name: 'Vegetable',
        price: '16.00'
      },
      {
        id: 'chicken',
        name: 'Chicken',
        price: '17.00'
      },
      {
        id: 'shrimp',
        name: 'Shrimp',
        price: '18.00'
      },
      {
        id: 'beef',
        name: 'Beef',
        price: '18.00'
      },
      {
        id: 'pork',
        name: 'Pork',
        price: '18.00'
      },
      {
        id: 'combo',
        name: 'Combo',
        price: '19.00'
      }
    ]
  },
  {
    id: 'short-rib-fried-rice',
    category: 'fried-rice-noodles',
    imgSrc: '/images/fried-rice-noodles/short-rib-fried-rice.webp',
    name: 'Short Rib Fried Rice',
    description: 'Slow-braised beef short rib, kimchi, mushrooms, edamame, egg, wasabi mayo, green onion',
    price: '22.00',
  },
  {
    id: 'korean-glass-noodles',
    category: 'fried-rice-noodles',
    imgSrc: '/images/fried-rice-noodles/korean-glass-noodles.webp',
    name: 'Korean Glass Noodles',
    description: 'Sweet potato glass noodles, onion, shiitakes, bell pepper, egg, sweet-spicy sauce',
    price: '0.00',
    protein: [
      {
        id: 'vegetable',
        name: 'Vegetable',
        price: '20.50'
      },
      {
        id: 'chicken',
        name: 'Chicken',
        price: '21.50'
      },
      {
        id: 'beef',
        name: 'Beef',
        price: '22.50'
      },
      {
        id: 'combo',
        name: 'Combo',
        price: '23.50'
      }
    ]
  },
  {
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
    ]
  },
  {
    id: 'signature-lo-mein',
    category: 'fried-rice-noodles',
    imgSrc: '/images/fried-rice-noodles/signature-lo-mein.webp',
    name: 'Signature Lo Mein',
    description: 'Wok-tossed noodles, mushrooms, Asian vegetables, savory soy sauce',
    price: '0.00',
    protein: [
      {
        id: 'vegetable',
        name: 'Vegetable',
        price: '16.50'
      },
      {
        id: 'chicken',
        name: 'Chicken',
        price: '17.50'
      },
      {
        id: 'shrimp',
        name: 'Shrimp',
        price: '18.50'
      },
      {
        id: 'beef',
        name: 'Beef',
        price: '18.50'
      },
      {
        id: 'pork',
        name: 'Pork',
        price: '18.50'
      },
      {
        id: 'combo',
        name: 'Combo',
        price: '19.50'
      }
    ]
  },
  {
    id: 'singapore-street-noodles',
    category: 'fried-rice-noodles',
    imgSrc: '/images/fried-rice-noodles/singapore-street-noodles.webp',
    name: 'Singapore Street Noodles',
    description: 'Thin rice noodles, light curry sauce, chicken, shrimp, onion, julienned vegetables',
    price: '19.50'
  },
  {
    id: 'white-rice',
    category: 'side-orders',
    imgSrc: '/images/side-orders/white-rice.webp',
    name: 'White Rice 8 oz',
    description: 'Steamed',
    price: '1.50'
  },
  {
    id: 'brown-rice',
    imgSrc: '/images/side-orders/brown-rice.webp',
    category: 'side-orders',
    name: 'Brown Rice 8 oz',
    description: 'Steamed',
    price: '1.75'
  },
  {
    id: 'signature-sauce',
    category: 'side-orders',
    imgSrc: '/images/side-orders/signature-sauce.webp',
    name: 'Signature Sauce 1 oz',
    description: 'Hot mustard, chili paste, and potsticker sauce - mixed and ready to enjoy',
    price: '0.75'
  },
  {
    id: 'coke',
    category: 'beverages',
    imgSrc: '/images/beverages/coke.webp',
    name: 'Coca-Cola Soft Drinks',
    description: '',
    price: '4.00',
    soda: [
      {
        id: 'coke',
        name: 'Coke',
        price: '0.00'
      },
      {
        id: 'diet-coke',
        name: 'Diet Coke',
        price: '0.00'
      },
      {
        id: 'sprite',
        name: 'Sprite',
        price: '0.00'
      },
      {
        id: 'coke-zero-sugar',
        name: 'Coke Zero Sugar',
        price: '0.00'
      },
      {
        id: 'pibb-xtra',
        name: 'Pibb Xtra',
        price: '0.00'
      }
    ]
  },
  {
    id: 'freshly-brewed-tea',
    category: 'beverages',
    imgSrc: '/images/beverages/freshly-brewed-tea.webp',
    name: 'Freshly Brewed Tea',
    description: '',
    price: '4.00',
    tea: [
      {
        id: 'black-tea',
        name: 'Black Iced Tea',
        price: '0.00'
      },
      {
        id: 'mango-tea',
        name: 'Mango Iced Tea',
        price: '0.00'
      }
    ]
  },
  {
    id: 'fiji-water',
    category: 'beverages',
    imgSrc: '/images/beverages/fiji-water.webp',
    name: 'Fiji Water 1L',
    description: '',
    price: '6.00'
  },
  {
    id: 'san-pellegrino',
    imgSrc: '/images/beverages/san-pellegrino.webp',
    category: 'beverages',
    name: 'San Pellegrino 1L',
    description: '',
    price: '6.00'
  },
];