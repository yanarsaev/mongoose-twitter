const { Router } = require('express')
const { favoriteController } = require('../controllers/favorites.controller')
const router = Router()

router.get('/favorites', favoriteController.getAllFavorites)
router.post('/favorites', favoriteController.addFavorite)
router.delete('/favorites/:id', favoriteController.deleteFavorite)

module.exports = router