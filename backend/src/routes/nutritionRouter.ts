import { Router } from 'express';
import { getNutritionItems } from '../controllers/nutritionController';

const router = Router();

router.get('/', getNutritionItems);

export default router
