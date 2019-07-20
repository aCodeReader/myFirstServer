
const express = require('express')
const router = express.Router()
const ProductsController = require('../controllers/products')

router.get('/products', ProductsController.list)
router.get('/products/:id', ProductsController.show)
router.post('/products', ProductsController.create)

module.exports = router