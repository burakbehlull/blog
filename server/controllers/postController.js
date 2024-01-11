import Post from '../models/Post.js'

async function createPost(req,res){
    const post = await Post.create(req.body)
    res.json({
        post
    })
}

export {
    createPost
}