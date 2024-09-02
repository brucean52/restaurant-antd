import { Router } from 'express';
import { getNutrtionItems } from '../controllers/nutritionController';

const router = Router();

router.get('/', getNutrtionItems);

export default router
