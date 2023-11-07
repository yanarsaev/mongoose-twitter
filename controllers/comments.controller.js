const CommentModel = require("../models/Comment.model")

module.exports.commentController = {
    addComment: async (req, res) => {
        try {
            const { text, user, post } = req.body
            await CommentModel.create({
                text,
                user,
                post
            })
            res.json('Комментарий опубликован')
        } catch (error) {
            res.send('[Error] - ', error)
        }
    },

    updateComment: async (req, res) => {
        try {
            const { text } = req.body
            await CommentModel.findByIdAndUpdate(req.params.id, {text})
            res.json('Комментарий изменен')
        } catch (error) {
            res.json('[Error] - ', error)
        }
    },

    deleteComment: async (req, res) => {
        try {
            await CommentModel.findByIdAndDelete(req.params.id)
            res.json('Комментарий удален')
        } catch (error) {
            res.json('[Error] - ', error)
        }
    },

    getComment: async (req, res) => {
        try {
            const dataComment = await CommentModel.findById(req.params.id).populate('user post')
            res.json(dataComment)
        } catch (error) {
            res.json('[Error] - ', error)
        }
    },

    getAllComments: async (req, res) => {
        try {
            const dataComments = await CommentModel.find().populate('user post')
            res.json(dataComments)
        } catch (error) {
            res.json('[Error] - ', error)
        }
    }
}