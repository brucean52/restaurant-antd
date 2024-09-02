export const allMenuItemsQuery = `
SELECT 
    i.id AS item_id,
    i.identifier AS item_identifier,
    i.name AS item_name,
    i.identifier,
    i.description,
    i.image_path,
    c.name AS category_name,
    to_char(i.base_price_cents / 100.0, 'FM999990.00') AS base_price_dollars,
    vg.name AS variation_group_name,
    v.name AS variation_name,
    to_char(iv.additional_price_cents / 100.0, 'FM999990.00') AS additional_price_dollars
FROM 
    items i
LEFT JOIN 
    categories c ON i.category_id = c.id
LEFT JOIN 
    item_variations iv ON i.id = iv.item_id
LEFT JOIN 
    variations v ON iv.variation_id = v.id
LEFT JOIN 
    variation_groups vg ON v.variation_group_id = vg.id
ORDER BY 
    i.id, vg.name, v.name;
`;

export const allNutritionalItemsQuery = `
SELECT 
    i.id AS item_id,
	i.identifier AS item_identifier,
    i.name AS item_name,
    NULL AS variation_name,
	c.name AS category_name,
    inut.servings,
    inut.calories,
    inut.calories_from_fat,
    inut.fat,
    inut.saturated_fat,
    inut.trans_fat,
    inut.cholesterol,
    inut.sodium,
    inut.carbohydrates,
    inut.fiber,
    inut.sugar,
    inut.protein
FROM 
    item_nutritionals inut
JOIN 
    items i ON inut.item_id = i.id
JOIN 
    categories c ON i.category_id = c.id

UNION ALL

SELECT 
    i.id AS item_id,
	i.identifier AS item_identifier,
    i.name AS item_name,
    v.name AS variation_name,
	c.name AS category_name,
    vn.servings,
    vn.calories,
    vn.calories_from_fat,
    vn.fat,
    vn.saturated_fat,
    vn.trans_fat,
    vn.cholesterol,
    vn.sodium,
    vn.carbohydrates,
    vn.fiber,
    vn.sugar,
    vn.protein
FROM 
    variation_nutritionals vn
JOIN 
    items i ON vn.item_id = i.id
JOIN 
    item_variations iv ON vn.item_variation_id = iv.id
JOIN 
    variations v ON iv.variation_id = v.id
JOIN 
    categories c ON i.category_id = c.id
ORDER BY 
    item_id, variation_name;
`