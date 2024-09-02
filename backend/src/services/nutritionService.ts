import { findAllNutritionalItems } from '../repositories/nutritionRepository';
import { NutritionItem } from '../models/';

export const getAllNutritionalItemData = async () => {
  let nutritionItems = await findAllNutritionalItems();

  return nutritionItems.map((item: any) => {
    const { 
      item_identifier,
      item_name,
      variation_name,
      category_name,
      servings,
      calories,
      calories_from_fat,
      fat,
      saturated_fat,
      trans_fat,
      cholesterol,
      sodium,
      carbohydrates,
      fiber,
      sugar,
      protein
    } = item;

    let id = variation_name
      ? item_identifier + '-' + variation_name.toLowerCase().replace(' ', '-')
      : item_identifier;

    let name = variation_name
      ? item_name + ' ' + variation_name
      : item_name;

    let category = category_name.toLowerCase().replace('&', '').replace(/\s+/g, '-');

    let nutritionItem: NutritionItem = {
      id,
      category,
      name,
      servings,
      calories,
      calsFromFat: calories_from_fat,
      fat,
      saturatedFat: saturated_fat,
      transFat: trans_fat,
      cholesterol,
      sodium,
      carbohydrates,
      fiber,
      sugar,
      protein
    }

    return nutritionItem
  });
}
