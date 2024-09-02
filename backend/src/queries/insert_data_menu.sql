-- Insert data after creating tables
INSERT INTO categories (name) VALUES
    ('Appetizers'),
    ('Soups'),
    ('Main Entree'),
    ('Bowls'), 
    ('Fried Rice & Noodles'),
    ('Side Orders'),
    ('Beverages');

INSERT INTO items (
    category_id,
    name,
    identifier,
    description,
    image_path,
    base_price_cents
) VALUES
    (
        1,
        'Chicken Lettuce Wraps',
        'chicken-lettuce-wraps',
        'A secret family recipe and our signature dish. Enough said.',
        '/images/appetizers/chicken-lettuce-wraps.webp',
        1600
    ),
    (
        1,
        'Chili Garlic Beans',
        'chili-garlic-green-beans',
        'Fiery red chili sauce, fresh garlic, & Sichuan preserves',
        '/images/appetizers/chili-garlic-green-beans.webp',
        1000
    ),
    (
        1,
        'Crispy Green Beans',
        'crispy-green-beans',
        'Tempura-battered, signature spicy dipping sauce',
        '/images/appetizers/crispy-green-beans.webp',
        1250
    ),
    (
        1,
        'Edamame',
        'edamame',
        'Steamed to order, tossed with kosher salt',
        '/images/appetizers/edamame.webp',
        1000
    ),
    (
        1,
        'Tempura Calamari',
        'tempura-calamari',
        'Crisp calamari, hunan salt, wasabi aioli dipping sauce',
        '/images/appetizers/tempura-calamari.webp',
        1550
    ),
    (
        1,
        'Pork Dumplings | 6 Count',
        'pork-dumplings',
        'Pan-fried or steamed, light chili sauce drizzle',
        '/images/appetizers/pork-dumplings.webp',
        1450
    ),
    (
        1,
        'Shrimp Dumplings | 6 Count',
        'shrimp-dumplings',
        'Pan-fried or steamed, light chili sauce drizzle',
        '/images/appetizers/shrimp-dumplings.webp',
        1400
    ),
    (
        1,
        'Pork Egg Rolls | 2 Count',
        'pork-egg-rolls',
        'Hand-rolled with julienned veggies, sweet and sour mustard sauce',
        '/images/appetizers/pork-egg-rolls.webp',
        1050
    ),
    (
        1,
        'Vegetable Spring Rolls | 3 Count',
        'vegetable-spring-rolls',
        'Crispy rolls with julienned veggies, sweet chili dipping sauce',
        '/images/appetizers/vegetable-spring-rolls.webp',
        1000
    ),
    (
        2,
        'Egg Drop Soup',
        'egg-drop-soup',
        'Velvety broth, julienned carrots, green onion',
        '/images/soups/egg-drop-soup.webp',
        NULL
    ),
    (
        2,
        'Hot & Sour Soup',
        'hot-sour-soup',
        'Rich and tangy broth, silken tofu, chicken, bamboo shoots, egg',
        '/images/soups/hot-sour-soup.webp',
        NULL
    ),
    (
        2,
        'Spicy Chicken Nooodle Soup',
        'spicy-chicken-soup',
        'Pad Thai noodles, veggies, spicy broth',
        '/images/soups/spicy-chicken-soup.webp',
        NULL
    ),
    (
        2,
        'Wonton Soup',
        'wonton-soup',
        'Savory broth, house-made pork wontons, shrimp, chicken',
        '/images/soups/wonton-soup.webp',
        NULL
    ),
    (
        3,
        'Beef with Broccoli',
        'beef-broccoli',
        'Flank steak, ginger-garlic aromatics, green onion, steamed broccoli',
        '/images/main-entree/beef-broccoli.webp',
        2200
    ),
    (
        3,
        'Crispy Honey Shrimp',
        'crispy-honey-shrimp',
        'Lightly battered, tangy honey sauce, green onion',
        '/images/main-entree/crispy-honey-shrimp.webp',
        2450
    ),
    (
        3,
        'Ginger Chicken with Broccoli',
        'ginger-chicken-broccoli',
        'Ginger-garlic aromatics, green onion, steamed broccoli',
        '/images/main-entree/ginger-chicken-broccoli.webp',
        2200
    ),
    (
        3,
        'Kung Pao Chicken',
        'kung-pao-chicken',
        'Spicy Sichuan chili sauce, peanuts, green onion, red chili peppers',
        '/images/main-entree/kung-pao-chicken.webp',
        2300
    ),
    (
        3,
        'Kung Pao Shrimp',
        'kung-pao-shrimp',
        'Spicy Sichuan chili sauce, peanuts, green onion, red chili peppers',
        '/images/main-entree/kung-pao-shrimp.webp',
        2500
    ),
    (
        3,
        'Ma Po Tofu',
        'ma-po-tofu',
        'Crispy silken tofu, spicy red chili sauce, steamed broccoli',
        '/images/main-entree/ma-po-tofu.webp',
        1800
    ),
    (
        3,
        'Mongolian Beef',
        'mongolian-beef',
        'Sweet soy glaze, flank steak, garlic, snipped green onion',
        '/images/main-entree/mongolian-beef.webp',
        2600
    ),
    (
        3,
        'Orange Chicken',
        'orange-chicken',
        'Lightly battered, sweet citrus chili sauce, fresh orange slice',
        '/images/main-entree/orange-chicken.webp',
        1950
    ),
    (
        3,
        'Salt & Pepper Prawns',
        'salt-pepper-prawns',
        'Crisp prawns, aromatics, chili peppers, tossed in a spicy chili butter',
        '/images/main-entree/salt-pepper-prawns.webp',
        2700
    ),
    (
        3,
        'Sweet & Sour Chicken',
        'sweet-sour-chicken',
        'Sweet & sour sauce, pineapple, onion, bell peppers, ginger',
        '/images/main-entree/sweet-sour-chicken.webp',
        1800
    ),
    (
        4,
        'Beef with Broccoli Bowl',
        'beef-broccoli-bowl',
        'Flank steak, ginger-garlic aromatics, green onion, steamed broccoli',
        '/images/bowls/beef-broccoli-bowl.webp',
        1750
    ),
    (
        4,
        'Crispy Honey Shrimp Bowl',
        'crispy-honey-shrimp-bowl',
        'Lightly battered, tangy honey sauce, green onion',
        '/images/bowls/crispy-honey-shrimp-bowl.webp',
        1950
    ),
    (
        4,
        'Ginger Chicken with Broccoli Bowl',
        'ginger-chicken-broccoli-bowl',
        'Lightly battered, tangy honey sauce, green onion',
        '/images/bowls/crispy-honey-shrimp-bowl.webp',
        1950
    ),
    (
        4,
        'Kung Pao Chicken Bowl',
        'kung-pao-chicken-bowl',
        'Spicy Sichuan chili sauce, peanuts, green onion, red chili peppers',
        '/images/bowls/kung-pao-chicken-bowl.webp',
        1550
    ),
    (
        4,
        'Kung Pao Shrimp Bowl',
        'kung-pao-shrimp-bowl',
        'Spicy Sichuan chili sauce, peanuts, green onion, red chili peppers',
        '/images/main-entree/kung-pao-shrimp.webp',
        1950
    ),
    (
        4,
        'Mongolian Beef Bowl',
        'mongolian-beef-bowl',
        'Sweet soy glaze, flank steak, garlic, snipped green onion',
        '/images/bowls/mongolian-beef-bowl.webp',
        1750
    ),
    (
        4,
        'Orange Chicken Bowl',
        'orange-chicken-bowl',
        'Lightly battered, sweet citrus chili sauce, fresh orange slice',
        '/images/bowls/orange-chicken-bowl.webp',
        1550
    ),
    (
        4,
        'Sweet & Sour Chicken Bowl',
        'sweet-sour-chicken-bowl',
        'Sweet & sour sauce, pineapple, onion, bell peppers, ginger',
        '/images/bowls/sweet-sour-chicken-bowl.webp',
        1550
    ),
    (
        5,
        'Fried Rice',
        'fried-rice',
        'Wok-tossed with egg, carrots, bean sprouts, green onion',
        '/images/fried-rice-noodles/fried-rice.webp',
        NULL
    ),
    (
        5,
        'Short Rib Fried Rice',
        'short-rib-fried-rice',
        'Slow-braised beef short rib, kimchi, mushrooms, edamame, egg, wasabi mayo, green onion',
        '/images/fried-rice-noodles/short-rib-fried-rice.webp',
        2200
    ),
    (
        5,
        'Korean Glass Noodles',
        'korean-glass-noodles',
        'Sweet potato glass noodles, onion, shiitakes, bell pepper, egg, sweet-spicy sauce',
        '/images/fried-rice-noodles/korean-glass-noodles.webp',
        NULL
    ),
    (
        5,
        'Pad Thai',
        'pad-thai',
        'Rice noodles, Thai spices, tofu, green onion, peanuts',
        '/images/fried-rice-noodles/pad-thai.webp',
        NULL
    ),
    (
        5,
        'Signature Lo Mein',
        'signature-lo-mein',
        'Wok-tossed noodles, mushrooms, Asian vegetables, savory soy sauce',
        '/images/fried-rice-noodles/pad-thai.webp',
        NULL
    ),
    (
        5,
        'Singapore Street Noodles',
        'singapore-street-noodles',
        'Thin rice noodles, light curry sauce, chicken, shrimp, onion, julienned vegetables',
        '/images/fried-rice-noodles/singapore-street-noodles.webp',
        1950
    ),
    (
        6,
        'White Rice 8 oz',
        'white-rice',
        'Steamed',
        '/images/side-orders/white-rice.webp',
        150
    ),
    (
        6,
        'Brown Rice 8 oz',
        'brown-rice',
        'Steamed',
        '/images/side-orders/brown-rice.webp',
        175
    ),
    (
        6,
        'Signature Sauce 1 oz',
        'signature-sauce',
        'Hot mustard, chili paste, and potsticker sauce - mixed and ready to enjoy',
        '/images/side-orders/signature-sauce.webp',
        75
    ),
    (
        7,
        'Coca-Cola Soft Drinks',
        'soda',
        '',
        '/images/beverages/coke.webp',
        400
    ),
    (
        7,
        'Freshly Brewed Tea',
        'freshly-brewed-tea',
        '',
        '/images/beverages/freshly-brewed-tea.webp',
        400
    ),
    (
        7,
        'Fiji Water 1L',
        'fiji-water',
        '',
        '/images/beverages/fiji-water.webp',
        600
    ),
    (
        7,
        'San Pellegrino 1L',
        'san-pellegrino',
        '',
        '/images/beverages/san-pellegrino.webp',
        600
    );

INSERT INTO variation_groups (name) VALUES
    ('Dumpling Options'),
    ('Soup Sizes'),
    ('Protein Options'),
    ('Rice Options'),
    ('Soda Options'),
    ('Tea Options');

INSERT INTO variations (variation_group_id, name) VALUES
    (1, 'Steamed'),
    (1, 'Pan Fried'),
    (2, 'Cup'),
    (2, 'Bowl'),
    (3, 'Vegetable'),
    (3, 'Chicken'),
    (3, 'Beef'),
    (3, 'Pork'),
    (3, 'Shrimp'),
    (3, 'Combo'),
    (4, 'White Rice'),
    (4, 'Brown Rice'),
    (4, 'Fried Rice'),
    (5, 'Coke'),
    (5, 'Diet Coke'),
    (5, 'Coke Zero Sugar'),
    (5, 'Sprite'),
    (5, 'Fanta'),
    (5, 'Dr. Pepper'),
    (6, 'Black Iced Tea'),
    (6, 'Green Iced Tea'),
    (6, 'Mango Iced Tea');

INSERT INTO item_variations (item_id, variation_id, additional_price_cents) VALUES
    (6, 1, 0),  -- Pork Dumplings Steamed
    (6, 2, 0),  -- Pork Dumplings Pan Fried
    (7, 1, 0),  -- Shrimp Dumplings Steamed
    (7, 2, 0),  -- Shrimp Dumplings Pan Fried
    (10, 3, 750),  -- Egg Drop Soup - Cup
    (10, 4, 1250),  -- Egg Drop Soup - Bowl
    (11, 3, 750),  -- Hot Sour Soup - Cup
    (11, 4, 1250),  -- Hot Sour Soup - Bowl
    (12, 3, 850),  -- Spicy Chicken Soup - Cup
    (12, 4, 1350),  -- Spicy Chicken Soup - Bowl
    (13, 3, 750),  -- Wonton Soup - Cup
    (13, 4, 1250),  -- Wonton Soup - Bowl
    (24, 11, 0),  -- Beef Broccoli Bowl white rice
    (24, 12, 50),  -- Beef Broccoli Bowl brown rice
    (24, 13, 200),  -- Beef Broccoli Bowl fried rice
    (25, 11, 0),  -- Crispy Honey Shrimp Bowl white rice
    (25, 12, 50),  -- Crispy Honey Shrimp Bowl brown rice
    (25, 13, 200),  -- Crispy Honey Shrimp Bowl fried rice
    (26, 11, 0),  -- Ginger Chicken with Broccoli Bowl white rice
    (26, 12, 50),  -- Ginger Chicken with Broccoli Bowl brown rice
    (26, 13, 200),  -- Ginger Chicken with Broccoli Bowl fried rice
    (27, 11, 0),  -- Kung Pao Chicken Bowl white rice
    (27, 12, 50),  -- Kung Pao Chicken Bowl brown rice
    (27, 13, 200),  -- Kung Pao Chicken Bowl fried rice
    (28, 11, 0),  -- Kung Pao Shrimp Bowl white rice
    (28, 12, 50),  -- Kung Pao Shrimp Bowl brown rice
    (28, 13, 200),  -- Kung Pao Shrimp Bowl fried rice
    (29, 11, 0),  -- Mongolian Beef Bowl white rice
    (29, 12, 50),  -- Mongolian Beef Bowl brown rice
    (29, 13, 200),  -- Mongolian Beef Bowl fried rice
    (30, 11, 0),  -- Orange Chicken Bowl white rice
    (30, 12, 50),  -- Orange Chicken Bowl brown rice
    (30, 13, 200),  -- Orange Chicken Bowl fried rice
    (31, 11, 0),  -- Sweet & Sour Chicken Bowl white rice
    (31, 12, 50),  -- Sweet & Sour Chicken Bowl brown rice
    (31, 13, 200),  -- Sweet & Sour Chicken Bowl fried rice
    (32, 5, 1600),  -- Fried Rice Vegetable
    (32, 6, 1700),  -- Fried Rice Chicken
    (32, 9, 1800),  -- Fried Rice Shrimp
    (32, 7, 1800),  -- Fried Rice Beef
    (32, 8, 1800),  -- Fried Rice Pork
    (32, 10, 1900),  -- Fried Rice Combo
    (34, 5, 2050),  -- Korean Glass Noodles Vegetable
    (34, 6, 2150),  -- Korean Glass Noodles Chicken
    (34, 7, 2250),  -- Korean Glass Noodles Beef
    (34, 10, 2350),  -- Korean Glass Noodles Combo
    (35, 6, 2000),  -- Pad Thai Chicken
    (35, 9, 2250),  -- Pad Thai Shrimp
    (35, 10, 2350),  -- Pad Thai Combo
    (36, 5, 1650),  -- Signature Lo Mein Vegetable
    (36, 6, 1750),  -- Signature Lo Mein Chicken
    (36, 9, 1850),  -- Signature Lo Mein Shrimp
    (36, 7, 1850),  -- Signature Lo Mein Beef
    (36, 8, 1850),  -- Signature Lo Mein Pork
    (36, 10, 1950),  -- Signature Lo Mein Combo
    (41, 14, 0),  -- soda coke
    (41, 15, 0),  -- soda diet coke
    (41, 16, 0),  -- soda coke zero sugar
    (41, 17, 0),  -- soda sprite
    (41, 18, 0),  -- soda fanta
    (41, 19, 0),  -- soda dr pepper
    (42, 20, 0),  -- tea black
    (42, 21, 0),  -- tea green
    (42, 22, 0);  -- tea mango
