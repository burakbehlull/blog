import Post from '../models/Post.js'
import User from '../models/User.js'
import Category from '../models/Category.js'
import { verifyToken, isExpired } from '../helpers/sessions.js'

async function createPost(req,res){
    const { title,description,category,token } = req.body 
    try {
        if(!token) return res.json({
            success: false,
            message: 'Token yok.'
        })
        
        const verify = await verifyToken(token)
        const ex = await isExpired(token)
        if(ex.expired) return res.json({
            success: false,
            message: 'Token süresi dolmuş!'
        })
        
        if(!verify.user?.email) return res.json({
            success: false,
            message: 'Email doğrulanmadı.'
        })

        const email = verify?.user.email
        const user = await User.findOne({email: email})

        if(!user) return res.json({
            success: false,
            message: 'Kullanıcı bulunamadı.'
        })
        const post = await Post.create({
            title: title,
            description: description,
            category: category,
            user: user._id
        })
        return res.json(post)
    } catch (err) {
        return res.status(404).json({
            error: err,
            message: err.message,
            success: false
        })
    }
}
async function getPosts(req,res){
    try {
        const categorySlug = req.query.category;
                const { search } = req.query;

                const category = await Category.findOne({ name: categorySlug });

                let filter = {};
                
                if (category) {
                    filter.category = category._id;
                }
                
                if (search) {
                    filter.title = { $regex: '.*' + search + '.*', $options: 'i' };
                }

                if (!categorySlug && !search){
                    filter.title = null;
                    filter.category = null;
                }
        
                const posts = await Post.find(filter)
                .sort('-createdAt');
        
        if (posts.length) {
            res.status(200).json(posts);
        } else {
            res.status(404).json({
                message: 'No post found.'
            });
        }
            } catch (error) {
                console.error(error);
                res.status(500).json({
                    error: true,
                    message: error.message
                });
            }
}

async function deletePost(req, res) {
            try {

                const postId = req.body.postId;

                const post = await Post.findOneAndDelete({ _id: postId });

                if (post) {
                    res.status(200).json({
                        message: "Post deleted successfully."
                    });
                } else {
                    res.status(404).json({
                        message: "Post not found!"
                    });
                }

                    } catch (error) {
                        console.error(error);
                        res.status(500).json({
                            error: true,
                            message: error.message
                        });
                    }
}
async function updatePost(req, res) {
            try {

                const { id, title, description } = req.body;

                if (!id || !title || !description) {
                    return res.status(400).json({
                        message: "Please choose a post and fill out title and description fields"
                    });
                }

                const post = await Post.findOneAndUpdate(
                    { _id: id },
                    { 
                        title: title,
                        description: description 
                    },
                    { new: true }
                );
                
                if (post) {
                    res.status(200).json({
                        message: "Post updated successfully.",
                        updatedPost: post
                    });
                } else {
                    res.status(404).json({
                        message: "Post not found!"
                    });
                }

                    } catch (error) {
                        console.error(error);
                        res.status(500).json({
                            error: true,
                            message: error.message
                        });
                    }
}
async function allPosts(req, res) {
            try {
                const posts = await Post.find({}).sort('-createdAt');
                res.status(200).json(posts);
            } catch (error) {
                console.error(error);
                res.status(500).json({
                    error: true,
                    message: error.message
                });
            }
}
async function findUser(req,res){
            const { username } = req.body
            try {
                const user = await User.findOne({username: username})
                if(user){
                    const post = await Post.find({user: user._id})
                    let posts = post ? post : null
                    return res.status(200).json({user: user, posts: posts})
                } 
                
                return res.status(404).json({message: "User not found"})
            } catch (err) {
                return res.status(404).json({error: err.message})
            }
}
async function getCategories(req,res) {
    try {
        const category = await Category.find({})
        if(category){
            return res.status(200).json({
                success: true,
                category: category
            })
        }
        res.json({
            success: false,
            category: null
        })
    } catch (err) {
        console.log(err)
    }
}

export {
    createPost, 
    getPosts, 
    deletePost, 
    updatePost,
    allPosts, 
    findUser,
    getCategories
}