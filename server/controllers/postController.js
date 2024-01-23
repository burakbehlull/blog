import Post from '../models/Post.js'
import Category from '../models/Category.js'

async function createPost(req,res){
    const post = await Post.create(req.body)
    res.json({
        post
    })
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

                      if (!categorySlug && !search)
                      {
                        filter.title = null;
                        filter.category = null;
                      }
        
                const posts = await Post.find(filter)
                .sort('-createdAt');
        
        if (posts.  length) {
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

export {
    createPost, getPosts, deletePost
}