import { findAllMenuItems } from '../repositories/menuRepository';
import { MenuItem } from '../models/';

export const getAllMenuItemData = async () => {
  let menuItems = await findAllMenuItems();

  let groupedItems = menuItems.reduce(( acc: any, item: any ) => {
    const { 
      item_name,
      identifier,
      description,
      image_path,
      category_name,
      base_price_dollars,
      variation_name,
      variation_group_name,
      additional_price_dollars
    } = item;

    let category = category_name.toLowerCase().replace('&', '').replace(/\s+/g, '-');
  
    // Find or create the entry for the current item_identifier
    if (!acc[identifier]) {

      acc[identifier] = {
        name: item_name,
        category: category,
        imgSrc: image_path,
        description: description,
        price: base_price_dollars || '0.00'
      };
    }

  // If there is a variation group, add the variation under the correct key
  if (variation_group_name) {
    let groupKey = variation_group_name.toLowerCase().split(' ');

    // Ensure the group key exists in the item object
    if (!acc[identifier][groupKey[0]]) {
      acc[identifier][groupKey[0]] = [];
    }

    // Add the variation to the group
    acc[identifier][groupKey[0]].push({
      id: variation_name.toLowerCase().replace(/\s+/g, '-'),
      name: variation_name,
      price: additional_price_dollars
    });
  }
    return acc;
  }, {});
  
  // map to array
  let arrayItems: MenuItem[] = Object.keys(groupedItems).map(key => ({
    id: key,
    ...groupedItems[key]
  }));
  
  return arrayItems;
}
