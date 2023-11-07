const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
})

module.exports = mongoose.model('posts', postSchema)