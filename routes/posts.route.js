const { Router } = require('express')
const { postController } = require('../controllers/posts.controller')
const router = Router()

router.get('/posts', postController.getAllPosts)
router.get('/posts/:id', postController.getPost)
router.post('/posts', postController.addPost)
router.patch('/posts/:id', postController.updatePost)
router.delete('/posts/:id', postController.deletePost)

module.exports = router