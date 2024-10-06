import type { Request, Response } from 'express';
import { StatusCodes, getReasonPhrase } from 'http-status-codes';
import { getAllNutritionalItemData } from '../services/nutritionService';


export const getNutritionItems = async (req: Request, res: Response) => {
  try {
    const nutritionItems = await getAllNutritionalItemData();
    res.json(nutritionItems)
  } catch (error) {
    console.error(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send({
        error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR)
      });
  }
}
