import { Schema, model } from "mongoose";

const PostSchema = new Schema({
    title:{
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true,
        required: true,

    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
    },
    slug: {
        type: String,
        unique: true
    }
    
})

PostSchema.pre('validate', (next)=>{
    this.slug = slugify(this.title, {
        lower: true,
        strict: true
    })
    next()
})

export default model('Post', PostSchema)