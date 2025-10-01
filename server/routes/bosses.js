import express from 'express';
import BossesController from '../controllers/bosses.js';

const router = express.Router();

// Route to get all bosses from the database
router.get('/', BossesController.getBosses);

export default router;
