import type { Request, Response } from 'express';
import { StatusCodes, getReasonPhrase } from 'http-status-codes';
import { getAllMenuItemData } from '../services/menuService';


export const getMenuItems = async (req: Request, res: Response) => {
  try {
    const menuItems = await getAllMenuItemData();
    res.json(menuItems)
  } catch (error) {
    console.error(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send({
        error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR)
      });
  }
}
