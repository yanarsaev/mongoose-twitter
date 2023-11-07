const UserModel = require("../models/User.model")

module.exports.userController = {
    addUser: async (req, res) => {
        try {
            const { userName, email } = req.body
            await UserModel.create({
                userName,
                email
            })
            res.json('Пользователь создан')
        } catch (error) {
            res.json('[Error] -', error)
        }
    },

    getAllUsers: async (req, res) => {
        try {
            const data = await UserModel.find()
            res.json(data)
        } catch (error) {
            res.json('[Error] -', error)
        }
    },

    getUser: async (req, res) => {
        try {
            const data = await UserModel.findById(req.params.id)
            res.json(data)
        } catch (error) {
            res.json('[Error] -', error)
        }
    },

    deleteUser: async (req, res) => {
        try {
            await UserModel.findByIdAndDelete(req.params.id)
            res.json('Пользователь удален')
        } catch (error) {
            res.json('[Error] -', error)
        }
    }
}