import { Router } from 'express';
import { getMenuItems } from '../controllers/menuController';

const router = Router();

router.get('/', getMenuItems);

export default router
