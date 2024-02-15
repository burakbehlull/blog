import { Schema, model } from "mongoose"
import slugify from "slugify"
const CategorySchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    slug: {
        type: String,
        unique: true
    }
})

CategorySchema.pre('validate', (next)=>{
    this.slug = slugify(this.name, {
        lower: true,
        strict: true
    })
    next()
})

export default model('Category', CategorySchema)