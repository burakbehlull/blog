import { Schema, Model } from "mongoose";

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
    }
})

export default Model('Post', PostSchema)