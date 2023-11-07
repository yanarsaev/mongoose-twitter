const FavoriteModel = require("../models/Favorite.model")

module.exports.favoriteController = {
    addFavorite: async (req, res) => {
        try {
            const { post, user } = req.body
            await FavoriteModel.create({
                post,
                user
            })
            res.json('Пост сохранен')
        } catch (error) {
            res.json('[Error] -', error)
        }
    },
    deleteFavorite: async (req, res) => {
        try {
            await FavoriteModel.findByIdAndDelete(req.params.id).populate('post user')
            res.json('Пост удален')
        } catch (error) {
            res.json('[Error] -', error)
        }
    },
    getAllFavorites: async (req, res) => {
        try {
            const data = await FavoriteModel.find().populate('post user')
            res.json(data)
        } catch (error) {
            res.json('[Error] -', error)
        }
    },
}