const express = require('express')
const router = express.Router()

const skills = require('../controllers/skills')
router.get('/', skills.GetAllSkills)


module.exports = router