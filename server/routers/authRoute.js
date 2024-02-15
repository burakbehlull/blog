import express from 'express'
import passport from "passport"
import {GoogleRedirect, Signin} from '../controllers/authController.js'
const router = express.Router();

router.route('/signin').post(Signin)
router.route('/verify').post()
router.route('/google').get(passport.authenticate('google', {scope: ['profile']}))
router.route('/google/redirect').get(passport.authenticate('google'), GoogleRedirect)
export default router;