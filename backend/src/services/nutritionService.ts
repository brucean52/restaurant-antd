import { findAllNutritionalItems } from '../repositories/nutritionRepository';
import { NutritionItem } from '../models/';

export const getAllNutritionalItemData = async () => {
  let nutritionItems = await findAllNutritionalItems();

  return nutritionItems.map((item: any) => {
    const { 
      item_identifier,
      item_name,
      item_description,
      item_image_path,
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
      protein,
      dv_fat,
      dv_saturated_fat,
      dv_cholesterol,
      dv_sodium,
      dv_carbohydrates,
      dv_fiber
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
      description: item_description,
      imgSrc: item_image_path,
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
      protein,
      dvFat: dv_fat,
      dvSaturatedFat: dv_saturated_fat,
      dvCholesterol: dv_cholesterol,
      dvSodium: dv_sodium,
      dvCarbohydrates: dv_carbohydrates,
      dvFiber: dv_fiber
    }

    return nutritionItem
  });
}
