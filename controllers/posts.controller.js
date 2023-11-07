const PostModel = require("../models/Post.model")

module.exports.postController = {
    addPost: async (req, res) => {
        try {
            const { text, user } = req.body
            await PostModel.create({
                text,
                user
            })
            res.json('Пост опубликован')
        } catch (error) {
            res.json('[Error] -', error)
        }
    },
    updatePost: async (req, res) => {
        try {
            const { text } = req.body
            await PostModel.findByIdAndUpdate(req.params.id, {text})
            res.json('Пост изменен')
        } catch (error) {
            res.json('[Error] -', error)
        }
    },
    deletePost: async (req, res) => {
        try {
            await PostModel.findByIdAndDelete(req.params.id)
            res.json('Пост удален')
        } catch (error) {
            res.json('[Error] -', error)
        }
    },
    getAllPosts: async (req, res) => {
        try {
            const allPostsData = await PostModel.find().populate('user')
            res.json(allPostsData)
        } catch (error) {
            res.json('[Error] -', error)
        }
    },
    getPost: async (req, res) => {
        try {
            const postData = await PostModel.findById(req.params.id).populate('user')
            res.json(postData)
        } catch (error) {
            res.json('[Error] -', error)
        }
    }
}