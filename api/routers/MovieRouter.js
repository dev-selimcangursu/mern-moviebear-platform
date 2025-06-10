const express = require('express')
const router = express.Router()
const MovieController = require('../controllers/MovieController')


router.get('/get/is-exclusive-movie-list',MovieController.isExclusiveMovie)
router.get('/get/section-movie',MovieController.isSectionMovie)

module.exports = router