import { db } from '../config/dbConnect';
import { allNutritionalItemsQuery } from '../queries/queries';

export const findAllNutritionalItems = async () => {
  try {
    return await db.any(allNutritionalItemsQuery);
  } catch (error) {
    console.error('DB ERROR:', error)
  }
}
