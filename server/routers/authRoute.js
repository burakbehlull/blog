import express from 'express'
import passport from "passport"
import {GoogleRedirect, register, login, userVerify} from '../controllers/authController.js'
const router = express.Router();

router.route('/register').post(register)
router.route('/login').post(login)

router.route('/verify').post(userVerify)

router.route('/google').get(passport.authenticate('google', {scope: ['profile']}))
router.route('/google/redirect').get(passport.authenticate('google'), GoogleRedirect)
export default router;