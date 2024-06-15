import express from 'express'

import {createPost, getPosts, deletePost, updatePost,allPosts, findUser, getCategories } from '../controllers/postController.js'

const router = express.Router();

router.post('/createPost', createPost)
router.get('/allPosts', allPosts)

router.get('/posts', getPosts)
router.delete('/posts', deletePost)
router.put('/posts', updatePost)

router.post('/findUser', findUser)

router.get('/categories', getCategories)

export default router;
