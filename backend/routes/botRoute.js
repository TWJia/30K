import express from 'express';
import { askQuestion } from '../controllers/botController.js';

const router = express.Router();

router.post('/ask', askQuestion);

export default router;