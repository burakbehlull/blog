import express from 'express'
import {createPost,getPosts} from '../controllers/postController.js'
const router = express.Router();

router.post('/createPost', createPost)
router.get('/posts', getPosts)

export default router;
