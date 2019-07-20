
const express = require('express')
const router = express.Router()
const ContactsController = require('../controllers/contacts')

router.get('/contacts', ContactsController.list)
router.get('/contacts/:id', ContactsController.show)
router.post('/contacts', ContactsController.create)

module.exports = router