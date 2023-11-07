const mongoose = require("mongoose")
const Schema = mongoose.Schema

const commentSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: 'posts'
    }
})

module.exports = mongoose.model('comments', commentSchema)