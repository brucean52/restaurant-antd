import { db } from '../config/dbConnect';
import { allMenuItemsQuery } from '../queries/queries';

export const findAllMenuItems = async () => {
  try {
    return await db.any(allMenuItemsQuery);
  } catch (error) {
    console.error('DB ERROR:', error)
  }
}
