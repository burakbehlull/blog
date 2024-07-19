import express from 'express'
import { index } from '../controllers/adminController.js'
const router = express.Router();

router.route('/').post(index)
export default router;