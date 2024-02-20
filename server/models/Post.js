import { Schema, model } from "mongoose";
import slugify from 'slugify'

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
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    slug: {
        type: String,
        unique: true
    }
    
})

PostSchema.pre('validate', function(next) {
    this.slug = slugify(this.title, {
        lower: true,
        strict: true
    })
    next()
})

export default model('Post', PostSchema)