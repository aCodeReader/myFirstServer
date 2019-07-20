
const express = require('express')
const router = express.Router()
const VehiclesController = require('../controllers/vehicles')

router.get('/vehicles', VehiclesController.list)
router.get('/vehicles/:id', VehiclesController.show)
router.post('/vehicles', VehiclesController.create)

module.exports = router