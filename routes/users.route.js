const { Router } = require('express')
const { userController } = require('../controllers/users.controller')
const router = Router()

router.get('/users', userController.getAllUsers)
router.get('/users/:id', userController.getUser)
router.post('/users', userController.addUser)
router.delete('/users/:id', userController.deleteUser)

module.exports = router