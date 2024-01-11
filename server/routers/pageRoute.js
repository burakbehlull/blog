import express from 'express'
import {index} from '../controllers/pageController.js'
const router = express.Router();

router.route('/').get(index)

export default router;
