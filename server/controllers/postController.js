import Post from '../models/Post.js'

async function createPost(req,res){
    const post = await Post.create(req.body)
    res.json({
        post
    })
}

async function getPosts(req,res){
    const posts = await Post.find({})
    res.json({
        posts
    })
}

export {
    createPost, getPosts
}