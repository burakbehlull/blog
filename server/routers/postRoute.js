import express from 'express'
import {createPost, getPosts, deletePost, updatePost } from '../controllers/postController.js'
const router = express.Router();

router.post('/createPost', createPost)
router.get('/posts', getPosts)
router.delete('/posts', deletePost)
router.put('/posts', updatePost)

export default router;
