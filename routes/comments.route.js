const { Router } = require('express')
const { commentController } = require('../controllers/comments.controller')
const router = Router()

router.get('/comments', commentController.getAllComments)
router.get('/comments/:id', commentController.getComment)
router.post('/comments', commentController.addComment)
router.delete('/comments/:id', commentController.deleteComment)
router.patch('/comments/:id', commentController.updateComment)

module.exports = router