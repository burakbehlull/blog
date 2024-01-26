import express from 'express'
import passport from "passport"
import {Signin} from '../controllers/authController.js'
const router = express.Router();

router.route('/google').get(passport.authenticate('google', {scope: ['profile']}))

export default router;