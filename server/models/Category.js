import { Schema, model } from "mongoose";

const CategorySchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    }
})

export default model('Category', CategorySchema)