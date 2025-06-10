const express = require('express')
const router = express.Router()
const MovieController = require('../controllers/MovieController')


router.get('/get/is-exclusive-movie-list',MovieController.isExclusiveMovie)
router.get('/get/section-movie',MovieController.isSectionMovie)
router.get('/get/highlights-movie',MovieController.highlightsMovieList)

module.exports = router