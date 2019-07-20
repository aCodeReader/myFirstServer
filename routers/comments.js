
const express = require('express')
const router = express.Router()
const CommentsController = require('../controllers/comments')

router.get('/comments', CommentsController.list)
router.get('/comments/:id', CommentsController.show)
router.post('/comments', CommentsController.create)

module.exports = router