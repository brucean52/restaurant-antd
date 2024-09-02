-- Create tables 
CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    identifier VARCHAR(80) UNIQUE NOT NULL CHECK (identifier ~ '^[a-z][a-z0-9\-]*$'),
    name VARCHAR(100) NOT NULL,
    description TEXT,
    image_path VARCHAR(255),
    category_id INTEGER REFERENCES categories(id),
    base_price_cents NUMERIC
);

CREATE TABLE variation_groups (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE variations (
    id SERIAL PRIMARY KEY,
    variation_group_id INTEGER REFERENCES variation_groups(id),
    name VARCHAR(50) NOT NULL
);

CREATE TABLE item_variations (
    id SERIAL PRIMARY KEY,
    item_id INTEGER REFERENCES items(id),
    variation_id INTEGER REFERENCES variations(id),
    additional_price_cents NUMERIC
);

CREATE TABLE item_nutritionals (
    id SERIAL PRIMARY KEY,
    item_id INTEGER REFERENCES items(id) ON DELETE CASCADE,
    servings SMALLINT,
    calories SMALLINT,
    calories_from_fat SMALLINT,
    fat VARCHAR(10),
    saturated_fat VARCHAR(10),
    trans_fat VARCHAR(10),
    cholesterol VARCHAR(10),
    sodium VARCHAR(10),
    carbohydrates VARCHAR(10),
    fiber VARCHAR(10),
    sugar VARCHAR(10),
    protein VARCHAR(10),
    dv_fat SMALLINT,
    dv_saturated_fat SMALLINT,
    dv_cholesterol SMALLINT,
    dv_sodium SMALLINT,
    dv_carbohydrates SMALLINT,
    dv_fiber SMALLINT
);

CREATE TABLE variation_nutritionals (
    id SERIAL PRIMARY KEY,
    item_id INTEGER REFERENCES items(id) ON DELETE CASCADE,
    item_variation_id INTEGER REFERENCES item_variations(id) ON DELETE CASCADE,
    servings SMALLINT,
    calories SMALLINT,
    calories_from_fat SMALLINT,
    fat VARCHAR(10),
    saturated_fat VARCHAR(10),
    trans_fat VARCHAR(10),
    cholesterol VARCHAR(10),
    sodium VARCHAR(10),
    carbohydrates VARCHAR(10),
    fiber VARCHAR(10),
    sugar VARCHAR(10),
    protein VARCHAR(10),
    dv_fat SMALLINT,
    dv_saturated_fat SMALLINT,
    dv_cholesterol SMALLINT,
    dv_sodium SMALLINT,
    dv_carbohydrates SMALLINT,
    dv_fiber SMALLINT
);
