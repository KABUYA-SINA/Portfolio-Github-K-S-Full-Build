const express = require('express')
const router = express.Router()

//verifie les routes
const controller = require('../controllers/projet')
router.get('/', controller.GetAllObjet)

module.exports = router